<script setup>
import { createLesson, deleteLesson, getLessons } from './api/Lesson.js';
import HelloWorld from './components/HelloWorld.vue'
import UserManager from './components/UserManager.vue'
</script>

<script>
export default {
  name: 'App',
  data() {
    return {
      lessons:[],
      Newlesson:{
        teacherName:"",
        subject:"",
        room:"",
        startsAt:"",
        endsAt:"",
        capacity:""
      }
    }

  },
    methods:{
        async loadLessons(){
          this.lessons = await getLessons();
        },
        async addLesson(lesson){
          await createLesson(lesson)
          await this.loadLessons();
        },
        async removeLesson(id){
          await deleteLesson()
        }
  },
  mounted(){
    this.loadLessons()
  }
}
</script>

<template>
<main>
  <h1 >Mathiász Nyiltnap</h1>
  <table>
    <thead>
      <tr>
      <th>id</th>
      <th>Tanár neve</th>
      <th>Tantárgy</th>
      <th>Terem</th>
      <th>Kezdete</th>
      <th>Vége</th>
      <th>Kápacitás</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>{{ lessons.id }}</td>
          <td>{{ lessons.teacherName }}</td>
          <td>{{ lessons.subject }}</td>
          <td>{{ lessons.room }}</td>
          <td>{{ lessons.startsAt }}</td>
          <td>{{ lessons.endsAt }}</td>
          <td>{{ lessons.capacity }}</td>
          <button>jelentkezés</button>
      </tr>
    </tbody>
  </table>
</main>
</template>
