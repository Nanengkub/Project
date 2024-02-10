<template>
    <div class="Q1">
      <p style="font-size:80px;">คำถาม?</p>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 13cm; right: 28cm;" @click="correct()"> A
        <img v-bind:src="picture" width="300" height="300">
        <p style="font-size:25px;">ans</p>
      </button>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 13cm; right: 16cm;" @click="wrong()"> B
        <img v-bind:src="picture" width="300" height="300">
        <p style="font-size:25px;">ans</p>
      </button>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 3cm; right: 28cm;" @click="wrong()"> C
        <img v-bind:src="picture" width="300" height="300">
        <p style="font-size:25px;">ans</p>
      </button>
      <button type="button" style="width:350px; height:350px; font-size:30px; position: fixed; bottom: 3cm; right: 16cm;" @click="wrong()"> D
        <img v-bind:src="picture" width="300" height="300">
        <p style="font-size:25px;">ans</p>
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