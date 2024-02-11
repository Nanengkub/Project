<template>
    <div class="Q3">
      <p style="font-size:60px;">ใครแพร่เชื้อวัณโรค ครั้งล่าสุดของทับสอง?</p>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 10.5cm; right: 21.5cm;" @click="wrong()"> A
        <img src="../assets/touch.jpg" width="200" height="215">
        <p style="font-size:20px;">นันทชัย</p>
      </button>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 10.5cm; right: 12cm;" @click="wrong()"> B
        <img src="../assets/nan.jpg" width="200" height="215">
        <p style="font-size:20px;">ณปภา</p>
      </button>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 2cm; right: 21.5cm;" @click="wrong()"> C
        <img src="../assets/fah.jpg" width="200" height="215">
        <p style="font-size:20px;">นภัส</p>
      </button>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 2cm; right: 12cm;" @click="correct()"> D
        <img src="../assets/toey.jpg" width="200" height="215">
        <p style="font-size:20px;">ก้องภพ</p>
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