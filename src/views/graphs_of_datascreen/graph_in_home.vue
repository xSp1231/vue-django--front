<template>
    <div ref="graph1" style="width: 100%; height: 280px;"></div>
</template>
<script>
import * as echarts from 'echarts/core';
export default {
    data() {
        return {}
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            
            var ydata=[];
             for(var i=0;i<7;i++){
                var t=parseInt(Math.random()*1000);  //parseInt()  将数据转化为整数
                ydata.push(t);
             }
             console.log("ydata is ",ydata)
            var myChart = echarts.init(this.$refs.graph1);
            // 绘制图表
            var option = {
                title: {
                    text: '系统每日使用量曲线图'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['Line 1']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left:'0%',
                    right:'3%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(128, 255, 165)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(1, 191, 236)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data:ydata
                    },
                ]
            };
            myChart.setOption(option);
        }
    },
};
</script>