<template>
    <div ref="tablegraph" style="width: 100%; height: 600px;"></div>
</template>
<script>
import * as echarts from 'echarts/core';
import 'echarts/theme/macarons.js'
export default {
    data() {
        return {}
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            var myChart = echarts.init(this.$refs.tablegraph, 'macarons');
            // 绘制图表
            var option = {
                title: {
                    text: '整体异常分析视图',
                    left: 'center',
                    top: '0%',
                    textStyle: {
                        color: '#008acd',
                        fontSize: 16,
                        fontWeight: 'bold',
                    },

                },

                tooltip: {

                    trigger: 'axis',
                    axisPointer: {
                        // Use axis to trigger tooltip
                        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                    }
                },
                legend: {
                    right: '10%',
                    top: '3%'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: ['21.00-24.00', '18.00-21.00', '15.00-18.00', '12.00-15.00', '9.00-12.00', '6.00-9.00', '0.00-6.00','3.00-6.00','10.00-12.00']
                },
                series: [
                    {
                        name: 'Track',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 302, 301, 334, 390, 330, 320,330,280]
                    },
                    {
                        name: 'Action',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210,301,302]
                    }
                ]
            };
            myChart.setOption(option);
        }
    },
};
</script>