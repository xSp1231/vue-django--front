<template>
    <div ref="graph4" style="width: 100%; height: 500px;"></div>
</template>
<script>
import * as echarts from 'echarts/core';
import * as d3 from 'd3'
import 'echarts/theme/macarons.js'
export default {
    data() {
        return {
            datalist: 0
        }
    },
    mounted() {
        //this.getdata()
        this.init();
    },
    methods: {
        // getdata(){
        //     d3.csv('delete.csv').then((data)=> {
        //     this.datalist=data
        //     console.log(this.datalist)
        // })
        // },
        init() {
            d3.csv("delete.csv").then((data) => {
                console.log("data is", data)
                var Type = Array.from(data.map(d => d['Type']))
                var move_speed = Array.from(data.map(d => d['move_speed']))
                var move_time = Array.from(data.map(d => d['move_time']))
                var move_angle = Array.from(data.map(d => d['move_angle']))
                var move_acceleration = Array.from(data.map(d => d['move_acceleration']))
                var arr1 = []
                var arr2 = []
                var arr3 = []
                var arr4 = []
                var arr5 = []
                for (var i = 0; i < data.length; i++) {
                    if (Type[i] == 'WALK') {
                        var item = [Type[i], move_speed[i], move_time[i], move_angle[i], move_acceleration[i]]
                        arr1.push(item)
                    }
                    if (Type[i] == 'RUN') {
                        var item2 = [Type[i], move_speed[i], move_time[i], move_angle[i], move_acceleration[i]]
                        arr2.push(item2)
                    }
                    if (Type[i] == 'EXERCISE') {
                        var item3 = [Type[i], move_speed[i], move_time[i], move_angle[i], move_acceleration[i]]
                        arr3.push(item3)
                    }
                    if (Type[i] == 'FALL') {
                        var item4 = [Type[i], move_speed[i], move_time[i], move_angle[i], move_acceleration[i]]
                        arr4.push(item4)
                    }
                    if (Type[i] == 'OTHER_ACTION') {
                        var item5 = [Type[i], move_speed[i], move_time[i], move_angle[i], move_acceleration[i]]
                        arr5.push(item5)
                    }

                }
                var myChart = echarts.init(this.$refs.graph4);


                var data
                var schema = [
                    { name: 'Type', index: 0, text: 'Type' },
                    { name: 'move_speed', index: 1, text: 'move_speed' },
                    { name: 'move_time', index: 2, text: 'move_time' },
                    { name: 'move_angle', index: 3, text: 'move_angle' },
                    { name: 'move_acceleration', index: 4, text: 'move_acceleration' }
                ];
                var lineStyle = {
                    width: 1,
                    opacity: 0.5
                };
                var option = {
                    title: {
                        text: '不同活动老年人的速度、加速度、骨关节偏移量',
                        left: 'center',
                        top: '0%',
                        textStyle: {
                            color: '#008acd',        
                            fontSize:16,
                            fontWeight:'bold',
                        },

                    },

                    backgroundColor: '#fef8ef',
                    legend: {
                        bottom: 30,
                        data: ['WALK', 'RUN', 'EXERCISE', 'FALL', 'OTHER_ACTION'],
                        itemGap: 20,
                        textStyle: {
                            color: 'black',
                            fontSize: 15
                        }
                    },
                    tooltip: {
                        padding: 10,
                        backgroundColor: '#222',
                        borderColor: '#777',
                        borderWidth: 1,
                    },
                    parallelAxis: [
                        {
                            dim: 0,
                            name: schema[0].text,
                            type: 'category',
                            data: ['WALK', 'RUN', 'EXERCISE', 'FALL', 'OTHER_ACTION']
                        },
                        {
                            dim: 1, name: schema[1].text,
                            inverse: false,
                            max: 18
                        },
                        {
                            dim: 2, name: schema[2].text,
                            inverse: false,
                            max: 60
                        },
                        {
                            dim: 3, name: schema[3].text,
                            inverse: false,
                            max: 80
                        },
                        {
                            dim: 4,
                            name: schema[4].text,
                            inverse: true,
                            max: 10,
                            nameLocation: 'start'
                        }


                    ],
                    visualMap: {
                        show: true,
                        min: 0,
                        max: 30,
                        dimension: 2
                    },
                    parallel: {

                        left: '3%',
                        right: '3%',
                        bottom: 100,
                        parallelAxisDefault: {
                            type: 'value',
                            name: 'Type',
                            nameLocation: 'end',
                            nameGap: 20,
                            nameTextStyle: {
                                color: 'black',
                                fontSize: 12
                            },
                            axisLine: {
                                lineStyle: {
                                    color: 'black'
                                }
                            },
                            axisTick: {
                                lineStyle: {
                                    color: 'black'
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                color: 'black'
                            }
                        }
                    },
                    series: [
                        {
                            name: 'WALK',
                            type: 'parallel',
                            lineStyle: lineStyle,
                            data: arr1
                        },
                        {
                            name: 'RUN',
                            type: 'parallel',
                            lineStyle: lineStyle,
                            data: arr2
                        },
                        {
                            name: 'EXERCISE',
                            type: 'parallel',
                            lineStyle: lineStyle,
                            data: arr3
                        },
                        {
                            name: 'FALL',
                            type: 'parallel',
                            lineStyle: lineStyle,
                            data: arr4
                        },
                        {
                            name: 'OTHER_ACTION',
                            type: 'parallel',
                            lineStyle: lineStyle,
                            data: arr5
                        }
                    ]
                };
                myChart.setOption(option);
            })

        }
    },
};
</script>