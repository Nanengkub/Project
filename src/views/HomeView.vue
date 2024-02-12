<template>
    <section>
      <img v-bind:src="picture" width="210" height="200"/>
      <h1>ชื่อผู้สมัครงาน : {{getfullName()}}</h1>
      <h1>อายุ : {{age}} ปี</h1>
      <p>ที่อยู่ : <span v-html="address"></span></p>
      <a :href="social" target="_blank">Facebook</a>
      <p>งานอดิเรก : </p>   
      <ul>
          <li>{{hobby[0]}}</li>
          <li>{{hobby[1]}}</li>
          <li>{{hobby[2]}}</li>
          <li>{{hobby[3]}}</li>
      </ul>
      <p>ข้อมูลพื้นฐาน :</p>
      <ul>
          <li>เพศ :{{general.gender}}</li>
          <li>น้ำหนัก :{{general.weight}} กิโลกรัม</li>
          <li>ส่วนสูง :{{general.height}} เซนติเมตร</li>
          <li>โรคประจำตัว :{{general.status}}</li>
      </ul>
      <button @click="showData"> คลิกเพื่อดูข้อมูล</button>
      <button @click="increment"> เพิ่ม </button>
      <button @click="decrement">ลด</button>
    </section>
    <TableCom :theader="theader" :tdata="tdata"/>
    <div class="col-sm-12">
      <button type="button" class="btn btn-warning" @click="logOut()">logout</button>
    </div>
    
  </template>
  <script>
  import TableCom from "../components/TableMng.vue";
  
  export default {
  
    name: 'App',
    components:{
      TableCom,
    },
    data(){
      return{
        firstName:"ศศิธร",
        lastName:"รื่นเจริญ",
        age:16,
        address: "<i>จังหวัดฉะเชิงเทรา</i>",
        picture:"data:image/jpeg;base64,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",
        size:160,
        social:"https://www.facebook.com/profile.php?id=61552541191218",
        hobby:["ฟังเพลง","อ่านหนังสือ","เล่นเกม","เล่นกีฬา"],
        general:{gender:"หญิง",weight:50.8,height:160,status:false},
        theader:["ชื่อ-นามสกุล","งานอดิเรก","อายุ","น้ำหนัก","ส่วนสูง"],
        tdata:[{"col1":"ศศิธร รื่นเจริญ","col2":"เล่นกีฬา","col3":"16","col4":"50.8","col5":"160"},{"col1":"ศศิธร รื่นเจริญ","col2":"ร้องเพลง","col3":"16","col4":"50.8","col5":"160"}],
      }
    },
    methods:{
      getfullName(){
        return this.firstName + " "+ this.lastName
      },
      showData(){
        alert(this.firstName)
      },
      increment(){
        this.age++
      },
      decrement(){
        this.age--
      },
      logOut(){
      localStorage.setItem("auth",false);
      this.$router.push({name:'login'});
      }
  
    }
    }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>