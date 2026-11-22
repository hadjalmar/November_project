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
}
</script>

<template>

</template>
