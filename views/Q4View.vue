<template>
    <div class="Q4">
      <p style="font-size:60px;">ใครสูงเป็นลำดับที่สองของห้องทับสอง?</p>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 10.5cm; right: 21.5cm;" @click="wrong()"> A
        <img src="../assets/touch.jpg" width="200" height="215">
        <p style="font-size:20px;">นันทชัย</p>
      </button>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 10.5cm; right: 12cm;" @click="wrong()"> B
        <img src="../assets/m.jpg" width="200" height="215">
        <p style="font-size:20px;">ภูชิต</p>
      </button>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 2cm; right: 21.5cm;" @click="correct()"> C
        <img src="../assets/j.jpg" width="200" height="215">
        <p style="font-size:20px;">ณัฐวัตร</p>
      </button>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 2cm; right: 12cm;" @click="wrong()"> D
        <img src="../assets/tj.jpg" width="200" height="215">
        <p style="font-size:20px;">ยุติวิชญ์</p>
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