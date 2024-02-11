<template>
    <div class="Q2">
      <p style="font-size:80px;">ใครคือ พี่ใหญ่ ของทับสอง?</p>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 13cm; right: 28cm;" @click="correct()"> A
        <img src="../assets/touch.jpg" width="300" height="300">
        <p style="font-size:25px;">นันทชัย</p>
      </button>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 13cm; right: 16cm;" @click="wrong()"> B
        <img src="../assets/r.jpg" width="300" height="300">
        <p style="font-size:25px;">กนกพร</p>
      </button>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 3cm; right: 28cm;" @click="wrong()"> C
        <img src="../assets/nan.jpg" width="300" height="300">
        <p style="font-size:25px;">ณปภา</p>
      </button>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 3cm; right: 16cm;" @click="wrong()"> D
        <img src="../assets/benz.jpg" width="300" height="300">
        <p style="font-size:25px;">ศศิธร</p>
      </button>
    </div>
  </template>
  <script>
  export default {

    name: 'App',
    data(){
      return{
        picture:"https://i.pinimg.com/564x/9c/f9/0c/9cf90c52f493eee6a7760acd9dffa509.jpg"
      }
    },
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