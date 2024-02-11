<template>
    <div class="First">
      <p style="font-size:50px;">คุณคือทับสองตัวจริงหรือเปล่า????</p>
      <img src="../assets/P1.jpg" width="1100" height="800">
    </div>
    <div class="col-sm-12">
    <button type="button" style="font-size:30px; position: fixed; bottom: 2cm; right: 25cm;" class="btn btn-warning" @click="start()">START</button>
  </div>
  </template>

<script>
  export default {

    name: 'App',
    methods:{
      start(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'q1'});
      }
  
    }
    }
  </script>