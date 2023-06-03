<template>
    <div>
        <div ref="line" style="width: 100%; height: 400px;"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts/core';
import { mapState } from "vuex";
export default {
    data() {
        return {
        }
    },
    computed: {//计算属性: 里面的值不需要在data里面声明
        ...mapState(['datal']),
        linedata() {
            console.log("line计算属性")
            return this.datal
        }
    },
    mounted() {
        this.init();
    },
    ///############
    watch: {
        // 监听数据linedata的变化
        linedata: {
            handler(newData, oldData) {  //每一次数据变化时 就调用updateChart()方法
                // 在数据变化时更新图表
                console.log("newdata is ",newData)
                console.log("olddata is ",oldData)
                this.updateChart(newData);
            },
            deep: true // 深度监听
        }
    },
    /////////////////####
    methods: {
        init() {
            this.chart = echarts.init(this.$refs.line);
            // 绘制图表
            this.chart.setOption({
                tooltip:{},
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: this.linedata,
                        type: 'line',
                        smooth: true
                    }
                ]
            });
        },
        updateChart(newData) {
            console.log("浏览器里面的jwttoken is ",localStorage.getItem('jwtToken'))
            this.chart.setOption({
                series: [{
                    data: newData // 使用新数据更新图表
                }]
            });
        }
    },
};
</script>