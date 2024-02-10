<template>
    <div class="end">
        <p style="font-size:80px;">จบแล้วฮ้าฟฟฟ</p>
        <img v-bind:src="picture" width="1000" height="1000">
        <p style="font-size:40px;">ได้กี่คะแนนก็ตัวจริงจ้า เพราะให้แต่คนในห้องทำ คริคริ</p>
    </div>
    <div class="col-sm-12">
    <button type="button" style="font-size:30px; position: relative; bottom: 0cm; right: 0;" class="btn btn-warning" @click="logOut()">Logout</button>
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
    logOut(){
    localStorage.setItem("auth",false);
    this.$router.push({name:'login'});
    }
  
    }
    }
  </script>