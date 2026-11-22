const API_URL = "http://localhost:3000/api/products";

const getLessons = async()=>{
    const response = await fetch(API_URL);
    return response.json()
}
const createLesson = async(lesson)=>{
    const response = await fetch(API_URL,{
        method:'POST',
        headers:{'Content-Type':'application/jsom'},
        body: JSON.stringify(lesson)
    })
    return response.json();
}
const deleteLesson = async(id)=>{
    const response = await fetch(`${API_URL}/${id}`,{
        method:"DELETE",
    })
}
export {getLessons,createLesson,deleteLesson};