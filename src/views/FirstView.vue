<template>
    <div class="First">
      <p style="font-size:50px;">คุณคือทับสองตัวจริงหรือเปล่า????</p>
      <img v-bind:src="picture" width="800" height="700">
    </div>
    <div class="col-sm-12">
    <button type="button" style="font-size:30px; position: relative; bottom: 1cm; right: 0;" class="btn btn-warning" @click="start()">START</button>
  </div>
  </template>

<script>
  export default {

    name: 'App',
    data(){
      return{
        picture:"https://i.pinimg.com/564x/9c/f9/0c/9cf90c52f493eee6a7760acd9dffa509.jpg"
      }
    },
    methods:{
      start(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'q1'});
      }
  
    }
    }
  </script>