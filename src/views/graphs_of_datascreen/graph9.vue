<!---large area ----->
<template>
    <div ref="graph9" style="width: 100%; height: 460px;"></div>
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
            d3.csv("newdata2.csv").then((data) => {
                var myChart = echarts.init(this.$refs.graph9, "macarons");
                var date = Array.from(data.map(d => d['Date']))
                var data1 = Array.from(data.map(d => d['ANGLE']))
                var data2 = Array.from(data.map(d => d['Accelerate']))
                var data3 = Array.from(data.map(d => d['Speed']))
                var option = {
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    title: {
                        left: 'center',
                        text: '动作序列折线图'
                    },
                    toolbox: {
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: date
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '100%']
                    },
                    dataZoom: [
                        {
                            type: 'inside',
                            start: 0,
                            end: 10
                        },
                        {
                            start: 0,
                            end: 10
                        }
                    ],
                    series: [
                        {
                            name: 'ANGLE Data',
                            type: 'line',
                            symbol: 'none',
                            sampling: 'lttb',
                            itemStyle: {
                                color: 'rgb(255, 153, 204)'
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgb(255, 158, 68)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(255, 70, 131)'
                                    }
                                ])
                            },
                            data: data1
                        },
                        {
                            name: 'Accelerate Data',
                            type: 'line',
                            symbol: 'none',
                            sampling: 'lttb',
                            itemStyle: {
                                color: 'rgb(153, 255, 153)'
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgb(255, 158, 68)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(255, 70, 131)'
                                    }
                                ])
                            },
                            data: data2
                        },
                        {
                            name: 'Speed Data',
                            type: 'line',
                            symbol: 'none',
                            sampling: 'lttb',
                            itemStyle: {
                                color: 'rgb(153, 204, 255)'
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgb(255, 158, 68)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(255, 70, 131)'
                                    }
                                ])
                            },
                            data: data3
                        }
                    ]
                };
                myChart.setOption(option);
            })
        },
    }
}
</script>