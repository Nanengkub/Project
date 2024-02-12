<template>
    <div class="First">
      <p style="font-size:50px;">คุณคือทับสองตัวจริงหรือเปล่า????</p>
      <img src="../assets/P1.jpg" width="800" height="550">
    </div>
    <div class="col-sm-12">
    <button type="button" style="font-size:30px; position: fixed; bottom: 1cm; right: 19cm;" class="btn btn-warning" @click="start()">START</button>
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