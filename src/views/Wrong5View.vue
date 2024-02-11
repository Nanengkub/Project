<template>
    <div class="wrong5">
        <img src="../assets/wrong.png" width="700" height="600">
        <h1>ผิดจ้าาา</h1>
        <p>ตี้มาถึงรร.ก็เริ่มเรียนคาบแรกแล้วอะ คุณเขาเคยเจอแดดตอนเช้ามั้ยก็ไม่รู้</p>
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
      this.$router.push({name:'end'});
      }
    }
    }
  </script>
<style>
  body{
    background-color: #ff8a8ac8;
  }
</style>