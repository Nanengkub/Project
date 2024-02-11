<template>
    <div class="wrong1">
        <img src="../assets/wrong.png" width="600" height="500">
        <h1>ผิดจ้าาา</h1>
        <p>
          ฟ้าเกิด 26/2/50
        </p>
    </div>
    <div class="col-sm-12">
    <button type="button" style="font-size:30px; position: relative; bottom: 0; right: 0;" class="btn btn-warning" @click="next()">NEXT</button>
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
    background-color: #ff8a8ac8;
  }
</style>