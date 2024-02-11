<template>
    <div class="Q2">
      <p style="font-size:60px;">ใครคือ พี่ใหญ่ ของทับสอง?</p>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 10.5cm; right: 21.5cm;" @click="correct()"> A
        <img src="../assets/touch.jpg" width="200" height="215">
        <p style="font-size:20px;">นันทชัย</p>
      </button>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 10.5cm; right: 12cm;" @click="wrong()"> B
        <img src="../assets/r.jpg" width="200" height="215">
        <p style="font-size:20px;">กนกพร</p>
      </button>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 2cm; right: 21.5cm;" @click="wrong()"> C
        <img src="../assets/nan.jpg" width="200" height="215">
        <p style="font-size:20px;">ณปภา</p>
      </button>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 2cm; right: 12cm;" @click="wrong()"> D
        <img src="../assets/benz.jpg" width="200" height="215">
        <p style="font-size:20px;">ศศิธร</p>
      </button>
    </div>
  </template>
  <script>
  export default {

    name: 'App',
    methods:{
      correct(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'corr2'});
      },
      wrong(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'wrong2'});
      },
    }
    }
  </script>

<style>
  body {
    background-color: #ddfec2;
  }
</style>