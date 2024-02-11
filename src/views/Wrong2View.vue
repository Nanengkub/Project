<template>
    <div class="wrong2">
        <img src="../assets/wrong.png" width="700" height="600">
        <h1>ผิดจ้าาา</h1>
        <p>พี่ใหญ่ = แก่สุด = ทัช</p>
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
      this.$router.push({name:'q3'});
      }
    }
    }
  </script>
<style>
  body{
    background-color: #ff8a8ac8;
  }
</style>