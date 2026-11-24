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
        teachers_id:"",
        subject_id:"",
        room_id:"",
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
          <button
            type="button"
            class="rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300">
            Jelentkezés
          </button>
      </tr>
    </tbody>
  </table>
</main>
</template>
