<template>
    <div class="Q3">
      <p style="font-size:80px;">ใครแพร่เชื้อวัณโรค ครั้งล่าสุดของทับสอง?</p>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 13cm; right: 28cm;" @click="wrong()"> A
        <img src="../assets/touch.jpg" width="300" height="300">
        <p style="font-size:25px;">นันทชัย</p>
      </button>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 13cm; right: 16cm;" @click="wrong()"> B
        <img src="../assets/nan.jpg" width="300" height="300">
        <p style="font-size:25px;">ณปภา</p>
      </button>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 3cm; right: 28cm;" @click="wrong()"> C
        <img src="../assets/fah.jpg" width="300" height="300">
        <p style="font-size:25px;">นภัส</p>
      </button>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 3cm; right: 16cm;" @click="correct()"> D
        <img src="../assets/toey.jpg" width="300" height="300">
        <p style="font-size:25px;">ก้องภพ</p>
      </button>
    </div>
  </template>
  <script>
  export default {

    name: 'App',
    methods:{
      correct(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'corr3'});
      },
      wrong(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'wrong3'});
      },
    }
    }
  </script>

<style>
  body {
    background-color: #ddfec2;
  }
</style>