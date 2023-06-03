<template>
    <div ref="graph6" style="width: 100%; height: 400px;"></div>
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
            var myChart = echarts.init(this.$refs.graph6,'macarons');
            // 绘制图表
           var option = {
           //backgroundColor: 'white',
                title: {
                    text: '老年人口喜爱运动主要分布',
                    left: 'center',
                    textStyle: {
                        color: '#008acd'
                    }
                },

                legend: {
                    top: '40'
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                series: [
                    {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        radius: [50, 100],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 8                     
                         },
                        data: [
                            { value: 80, name: '健身气功' },
                            { value: 40, name: '太极拳' },
                            { value: 52, name: '太极球' },
                            { value: 32, name: '羽毛球' },
                            { value: 30, name: '慢跑' },
                            { value: 58, name: '乒乓球' },
                            { value: 20, name: '排球' },
                            { value: 70, name: '广场舞' }
                        ]
                    }
                ]
            };
            myChart.setOption(option);
        }
    },
};
</script>