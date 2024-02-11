<template>
    <div class="corr1">
        <img src="../assets/correct.png" width="700" height="600">
        <h1>ถูกต้องแล้วค้าบบบ</h1>
    </div>
    <div class="col-sm-12">
    <button type="button" style="font-size:30px; position: relative; bottom: 0cm; right: 0;" class="btn btn-warning" @click="next()">NEXT</button>
  </div>
  </template>

<script>
  export default {

    name: 'App',
    methods:{
      next(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'q2'});
      }
    }
    }
  </script>
<style>
  body{
    background-color: rgb(158, 255, 161);
  }
</style>