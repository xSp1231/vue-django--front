<template>
  <div class="main">
    <div class="container">
      <h1>教师页面</h1>
      <h2>{{ teacher.name }}</h2>
      <img :src="teacher.img" alt="">
      <el-button @click="getdata()" size="medium" type="primary">点击获取数据</el-button>
    </div>
    <div class="graph"> 
      <el-card style="width:33%">
        <Piegraph></Piegraph>
      </el-card>
      <el-card style="width:33% ;margin-left:5%;">
        <Bargraph></Bargraph>
      </el-card>
      <el-card style="width: 33%;margin-left:5%;">
       <Linegraph></Linegraph>
      </el-card>
    </div>
  </div>
</template>
<script>
import Bargraph from './vuexgraph/bar.vue';
import Linegraph from './vuexgraph/line.vue'
import Piegraph from './vuexgraph/pie.vue';
import axios from 'axios';
export default {
  name: 'teacherinfo',
  components: {
    Bargraph,
    Linegraph,
    Piegraph,
  },
  data() {
    return {
      teacher: ""
    }
  },
  methods: {
    getdata() {
      axios.get("http://127.0.0.1:8000/teachers/").then((res) => {
        console.log("获取的数据是：", res.data);
        this.teacher = res.data[6]
      })
    },


    
  }
}
</script>

<style scoped>
.graph {
  position: relative;
  display: flex;
  margin-left: 10%;
  margin-top: 20px;
  width: 60%;
  height: 500px;
}
</style>
