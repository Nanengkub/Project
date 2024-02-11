<template>
    <div class="Q1">
      <p style="font-size:60px;">ทับสองคนไหนอยู่ 07 ไลน์?</p>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 10.5cm; right: 21.5cm;" @click="wrong()"> A
        <img src="../assets/toey.jpg" width="200" height="215">
        <p style="font-size:20px;">ก้องภพ</p>
      </button>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 10.5cm; right: 12cm;" @click="wrong()"> B
        <img src="../assets/pete.jpg" width="200" height="215">
        <p style="font-size:20px;">เอกชลิต</p>
      </button>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 2cm; right: 21.5cm;" @click="correct()"> C
        <img src="../assets/fah.jpg" width="200" height="215">
        <p style="font-size:20px;">นภัส</p>
      </button>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 2cm; right: 12cm;" @click="wrong()"> D
        <img src="../assets/pan.jpg" width="200" height="215">
        <p style="font-size:20px;">ณัฐนิชา</p>
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