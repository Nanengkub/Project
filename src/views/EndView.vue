<template>
    <div class="end">
        <p style="font-size:80px;">จบแล้วฮ้าฟฟฟ</p>
        <img src="../assets/P2.jpg" width="1500" height="1000">
        <p style="font-size:40px;">ได้กี่คะแนนก็ตัวจริงจ้า เพราะให้แต่คนในห้องทำ คริคริ</p>
    </div>
    <div class="col-sm-12">
    <button type="button" style="font-size:30px; position: relative; bottom: 5mm; right: 0;" class="btn btn-warning" @click="logOut()">Logout</button>
  </div>
  </template>

<script>
  export default {

    name: 'App',
    methods:{
    logOut(){
    localStorage.setItem("auth",false);
    this.$router.push({name:'login'});
    }
  
    }
    }
  </script>