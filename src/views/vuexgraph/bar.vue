<template>
    <div>
        <el-button @click="changegraph()" type="success" size="mini" plain>data</el-button>
        <el-button @click="showvalue()" type="success" size="mini" plain>show</el-button>
        <div ref="bar" style="width: 100%; height: 400px;"></div>
        <p>图表数值 {{ graphdata }} {{ xinfo }}</p>
    </div>
</template>
<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import * as echarts from 'echarts/core';
export default {
    data() {
        return {
            graphdata: "",
            xinfo:"",
        }
    },
    mounted() {
        this.init();
    },
    computed: {
        ...mapState(['datab']),
        bardata() {
            return this.datab
        }
    },
    watch: {
        bardata: {
            handler(newData, oldData) {//检测数据的变化 数据发生变化 则调用函数
                //每次监听到数据变化 就绘制图表
                this.updatechart(newData)
            },
            deep: true // 深度监听
        },
    },
    methods: {
        //当点击柱状图的时候 获取x轴坐标信息 传入函数  statedatap的值发生变化  检测datapie的变化 实时更新图表
        ...mapMutations(['changedata','changepie']),
        changegraph() {
            //this.$store.commit('changedata') #这个方法好用
            this.changedata()
        },
        init() {
            this.chart = echarts.init(this.$refs.bar);
            // 绘制图表
            this.chart.setOption({
                tooltip: {},
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: this.bardata,
                        type: 'bar'
                    }
                ]
            });
            this.chart.on('click', (params) => {
                console.log("params is ",params)
                // 使用箭头函数，确保函数中的this指向Vue组件实例
                this.graphdata = params.data; // 直接修改属性值不会触发响应式更新
                this.xinfo=params.name
                //当点击柱状图的时候 获取x轴坐标信息 传入函数  statedatap的值发生变化  检测datapie的变化 实时更新图表
                this.changepie(this.xinfo)
            });
        },
        updatechart(newdata) {
            this.chart.setOption({
                series: [{
                    data: newdata // 使用新数据更新图表
                }]
            });
        },

    },

};
</script>