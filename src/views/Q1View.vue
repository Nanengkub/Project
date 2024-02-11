<template>
    <div class="Q1">
      <p style="font-size:80px;">ทับสองคนไหนอยู่ 07 ไลน์?</p>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 13cm; right: 28cm;" @click="wrong()"> A
        <img src="../assets/toey.jpg" width="300" height="300">
        <p style="font-size:25px;">ก้องภพ</p>
      </button>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 13cm; right: 16cm;" @click="wrong()"> B
        <img src="../assets/pete.jpg" width="300" height="300">
        <p style="font-size:25px;">เอกชลิต</p>
      </button>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 3cm; right: 28cm;" @click="correct()"> C
        <img src="../assets/fah.jpg" width="300" height="300">
        <p style="font-size:25px;">นภัส</p>
      </button>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 3cm; right: 16cm;" @click="wrong()"> D
        <img src="../assets/pan.jpg" width="300" height="300">
        <p style="font-size:25px;">ณัฐนิชา</p>
      </button>
    </div>
  </template>
  <script>
  export default {

    name: 'App',
    methods:{
      correct(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'corr1'});
      },
      wrong(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'wrong1'});
      },
    }
    }
  </script>

<style>
  body {
    background-color: #ddfec2;
  }
</style>