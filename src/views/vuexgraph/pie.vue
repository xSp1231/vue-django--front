<template>
    <div>
        <div ref="pie" style="width: 100%; height: 400px;"></div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import * as echarts from 'echarts/core';
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.init();
    },
    computed: { //cpmputed也可以实现监听数据  但是为什么要使用watch呢 因为可以在watch里面使用函数
        ...mapState(['datap']),
        datapie() {
            console.log("cal")
            return this.datap
        }
    },

//监听饼图数据的变化 变化就更新
    watch: {
        datapie: {
            handler(newData, oldData) {//检测数据的变化 数据发生变化 则调用函数
                //每次监听到数据变化 就绘制图表
                this.updatepiechart(newData)
            },
            deep: true // 深度监听
        },
    },
    methods: {
        init() {
            this.chart = echarts.init(this.$refs.pie);
            // 绘制图表
            this.chart.setOption({
                title: {
                    text: 'TEST',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',

                        data:this.datapie,
                        
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        },

        updatepiechart(newdata) {
            this.chart.setOption({
                series: [{
                    data: newdata // 使用新数据更新图表
                }]
            });
        },
    },

};
</script>