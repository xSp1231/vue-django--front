<template>
  <div class="homeview" style="background-color: #fef8ef;height: 1300px;">
    <el-row>
      <el-col :span="14"> <!---占比为18/24---->
        <div class="lefttop" style="display: flex;">
          <el-card class="lefttop"
            style=" width: 100% ; height: 500px;margin-top: 2px;margin-bottom: 8px;background-color: #fef8ef;"
            shadow="hover"><!---将图画在卡片之上---->
            <graph1></graph1>
          </el-card>
        </div>
        <div class="leftbottom" style="display: flex;">
          <!--------使用组件方式引入echarts图表------->
          <el-card class="saying"
            style=" width: 100% ; height: 500px;margin-top: 2px;margin-bottom: 8px;background-color: #fef8ef;"
            shadow="hover"><!---将图画在卡片之上---->
            <graph9></graph9>
          </el-card>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="righttop" style="width:100%; height:500px"><!--右上角----->
          <el-card class="box-card"
            style="margin-left: 6px;margin-top: 2px; height: 500px;margin-bottom: 8px;background-color: #fef8ef;"
            shadow="hover">
            <graph5></graph5>
          </el-card>
        </div>
        <div class="rightbottom" style="width:100%; height:500px">
          <el-card class="box-card"
            style="margin-left: 6px;margin-top: 2px; height: 500px;margin-bottom: 8px;background-color: #fef8ef;"
            shadow="hover">
            <graph4></graph4>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-card class="introduction"
      style="width: 60%; height: 200px; background-color:#f9e4d5; border-radius: 20px;margin-left: 20%;">
      <div class="content" style="width: 90%;height: 170px; background-color:#F7D8C2; border-radius: 15px">
        <div class="deco" style="display: flex;">
          <div class="decorate"
            style="width: 18px;height: 18px; border-radius: 8px;background-color:rebeccapurple;margin-left: 6px;"></div>
          <div class="decorate"
            style="width: 18px;height: 18px; border-radius: 8px;background-color:greenyellow;margin-left: 6px;"></div>
          <div class="decorate"
            style="width: 18px;height: 18px; border-radius: 8px;background-color: aqua;margin-left: 6px;"></div>
        </div>

        <div class="write" style="width:80%;height:130px">
        <h3 style="margin: 0px;">introduction</h3>
        <hr style="margin: 0px;">
        <p style="margin: 0px; font-weight: 600;">内容填写</p>
        <p style="margin: 0px;">内容填写</p>
        <p style="margin: 0px;">内容填写</p>
        <p style="margin: 0px;">内容填写</p>
        </div>

      </div>
    </el-card>
  </div>
</template>
<script>
import graph2 from './graphs_of_datascreen/graph2.vue'
import tablelist from './graphs_of_datascreen/table.vue'
import tablegraph from './graphs_of_datascreen/tablegraph.vue';
import graph6 from './graphs_of_datascreen/graph6.vue';
import graph7 from './graphs_of_datascreen/graph7.vue';
import graph1 from './graphs_of_datascreen/graph1.vue';
import graph3 from './graphs_of_datascreen/graph3.vue';
import graph4 from './graphs_of_datascreen/graph4.vue';
import graph5 from './graphs_of_datascreen/graph5.vue';
import graph9 from './graphs_of_datascreen/graph9.vue';
export default {
  components: {
    graph1,
    graph2,
    graph3,
    graph4,
    graph5,
    graph9,
    tablelist,
    tablegraph,
    graph6,
    graph7
  },
  data() {
    return {
      graphdata: []
    }
  },
  methods: {

  },
  mounted() {

  }


};
</script>

<style lang="less" scoped >
.out{
  background-color: #f9e4d5;
}

.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

//走马灯
.lamb {
  text-align: center;

  h4 {
    background-color: #f3f0f0;
    margin-top: 0px;
    margin-bottom: 2px;
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

//分割线
.el-divider--horizontal {
  margin: 13px 0;
}

.notification {
  p {
    font-size: medium;
    color: #646566;
  }
}</style>