<template>
    <div class="Q4">
      <p style="font-size:80px;">ใครสูงเป็นลำดับที่สองของห้องทับสอง?</p>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 13cm; right: 28cm;" @click="wrong()"> A
        <img src="../assets/touch.jpg" width="300" height="300">
        <p style="font-size:25px;">นันทชัย</p>
      </button>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 13cm; right: 16cm;" @click="wrong()"> B
        <img src="../assets/m.jpg" width="300" height="300">
        <p style="font-size:25px;">ภูชิต</p>
      </button>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 3cm; right: 28cm;" @click="correct()"> C
        <img src="../assets/j.jpg" width="300" height="300">
        <p style="font-size:25px;">ณัฐวัตร</p>
      </button>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 3cm; right: 16cm;" @click="wrong()"> D
        <img src="../assets/tj.jpg" width="300" height="300">
        <p style="font-size:25px;">ยุติวิชญ์</p>
      </button>
    </div>
  </template>
  <script>
  export default {

    name: 'App',
    methods:{
      correct(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'corr4'});
      },
      wrong(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'wrong4'});
      },
    }
    }
  </script>

<style>
  body {
    background-color: #ddfec2;
  }
</style>