<template>
    <div class="corr4">
        <img v-bind:src="picture" width="700" height="600">
        <h1>ถูกต้องแล้วค้าบบบ</h1>
    </div>
    <div class="col-sm-12">
    <button type="button" style="font-size:30px; position: relative; bottom: 0cm; right: 0;" class="btn btn-warning" @click="next()">NEXT</button>
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
      next(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'q5'});
      }
    }
    }
  </script>
<style>
  body{
    background-color: rgb(158, 255, 161);
  }
</style>