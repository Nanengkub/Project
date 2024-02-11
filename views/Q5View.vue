<template>
    <div class="Q5">
      <p style="font-size:60px;">ทับสองคนไหนเข้าแถวเคารพธงชาติน้อยครั้งที่สุด?</p>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 10.5cm; right: 21.5cm;" @click="correct()"> A
        <img src="../assets/ty.jpg" width="200" height="215">
        <p style="font-size:20px;">ธนกฤต</p>
      </button>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 10.5cm; right: 12cm;" @click="wrong()"> B
        <img src="../assets/m.jpg" width="200" height="215">
        <p style="font-size:20px;">ภูชิต</p>
      </button>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 2cm; right: 21.5cm;" @click="wrong()"> C
        <img src="../assets/namoon.jpg" width="200" height="215">
        <p style="font-size:20px;">น้ำอุ่น</p>
      </button>
      <button type="button" style="width:250px; height:250px; font-size:25px; position: fixed; bottom: 2cm; right: 12cm;" @click="wrong()"> D
        <img src="../assets/new.jpg" width="200" height="215">
        <p style="font-size:20px;">รุ่งรวีย์</p>
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
      this.$router.push({name:'corr5'});
      },
      wrong(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'wrong5'});
      },
    }
    }
  </script>

<style>
  body {
    background-color: #ddfec2;
  }
</style>