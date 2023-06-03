<template>
    <div ref="graph5" style="width: 100%; height: 500px;"></div>
</template>
<script>
import * as echarts from 'echarts/core';
import * as d3 from 'd3'
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
            var myChart = echarts.init(this.$refs.graph5,'macarons');
              var  option = {
                    legend: {
                        right:'0%',
                    },
                    title:{
                    top:'2%',    
                    left:'10%',
                    text:"个人活跃视图"
                    },
                    tooltip: {
                        trigger: 'axis',
                        showContent: true
                    },
                    dataset: {
                        source: [
                            ['Person', '2023-4-1', '2023-4-2', '2023-4-3', '2023-4-4', '2023-4-5', '2023-4-6'],
                            ['轨迹活跃', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                            ['轨迹静止动作活跃', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
                            ['轨迹静止动作静止', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
                        ]
                    },
                    xAxis: { type: 'category' },
                    yAxis: { gridIndex: 0 },
                    grid: { top: '55%' },
                    series: [
                        {
                            type: 'line',
                            smooth: true,
                            seriesLayoutBy: 'row',
                            emphasis: { focus: 'series' }
                        },
                        {
                            type: 'line',
                            smooth: true,
                            seriesLayoutBy: 'row',
                            emphasis: { focus: 'series' }
                        },
                        {
                            type: 'line',
                            smooth: true,
                            seriesLayoutBy: 'row',
                            emphasis: { focus: 'series' }
                        },
                        {
                            type: 'pie',
                            id: 'pie',
                            radius: '30%',
                            center: ['50%', '25%'],
                            emphasis: {
                                focus: 'self'
                            },
                            encode: {
                                itemName: 'Person',
                                value: '刘*',
                                tooltip: '刘*'
                            }
                        }
                    ]
                };
                myChart.on('updateAxisPointer', function (event) {
                    const xAxisInfo = event.axesInfo[0];
                    if (xAxisInfo) {
                        const dimension = xAxisInfo.value + 1;
                        myChart.setOption({
                            series: {
                                id: 'pie',
                                label: {
                                    formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                                },
                                encode: {
                                    value: dimension,
                                    tooltip: dimension
                                }
                            }
                        });
                    }
                });
                myChart.setOption(option);
            ;

        }
    },
};
</script>