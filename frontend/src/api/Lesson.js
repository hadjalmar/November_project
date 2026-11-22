const API_URL = "http://localhost:3000/api/products";

const getLessons = async()=>{
    const response = await fetch(API_URL);
    return response.json()
}