<template>
  <div ref="graph3" style="width: 100%; height: 470px;"></div>
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
      var myChart = echarts.init(this.$refs.graph3,'macarons');
      const data = [
        [
          [28000, 90, 17094669, '502', 'The_year_before_last'],
          [31000, 77.4, 127659240, '503', 'The_year_before_last'],
          [151068, 89, 115460773, '504', 'The_year_before_last'],
          [28670, 74.7, 18495182, '505', 'The_year_before_last'],
          [50099, 75, 4989005, '506', 'The_year_before_last'],
          [340076, 77.1, 80143299, '507', 'The_year_before_last'],
          [39076, 95.4, 11178237, '508', 'The_year_before_last'],
          [40066, 79.1, 15620030, '509', 'The_year_before_last'],
          [59017, 59.7, 561001776, '510', 'The_year_before_last'],
          [85050, 75.2, 902249285, '511', 'The_year_before_last'],
          [86056, 89.5, 56194354, '512', 'The_year_before_last']
        ],
        [
          [28604, 77, 11096869, '502', 'Last_year'],
          [31163, 77.4, 27662440, '503', 'Last_year'],
          [15016, 68, 115505773, '504', 'Last_year'],
          [13670, 74.7, 10582082, '505', 'Last_year'],
          [28599, 75, 14986705, '506', 'Last_year'],
          [294706, 77.1, 56943299, '507', 'Last_year'],
          [31476, 75.4, 1958237, '508', 'Last_year'],
          [28666, 78.1, 1254830, '509', 'Last_year'],
          [81777, 57.7, 87601776, '510', 'Last_year'],
          [29550, 79.1, 149285, '511', 'Last_year'],
          [20706, 67.9, 20194354, '512', 'Last_year']
        ],
        [
          [440056, 81.8, 23968973, '502', 'This_year'],
          [43294, 81.7, 3339927, '503', 'This_year'],
          [103334, 76.9, 16048943, '504', 'This_year'],
          [21291, 78.5, 2189562, '505', 'This_year'],
          [308923, 80.8, 35503457, '506', 'This_year'],
          [37599, 81.9, 64395345, '507', 'This_year'],
          [44053, 81.1, 80688545, '508', 'This_year'],
          [402182, 82.8, 3329425, '509', 'This_year'],
          [5903, 66.8, 31050527, '510', 'This_year'],
          [360162, 83.5, 2573481, '511', 'This_year'],
          [1390, 71.4, 255317, '512', 'This_year']
        ]
      ];
      var option = {
        backgroundColor: "#fef8ef",
        title: {
          text: '近三年不同区域老年人的平均心率和停留时长',
          left: '5%',
          top: '0%'
        },
        legend: {
          right: '10%',
          top: '3%',
          data: ['The_year_before_last', 'Last_year', 'This_year']
        },
        grid: {
          left: '8%',
          top: '10%'
        },
        xAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          scale: true
        },
        series: [
          {
            name: 'The_year_before_last',
            data: data[0],
            type: 'scatter',
            symbolSize: function (data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              focus: 'series',
              label: {
                show: true,
                formatter: function (param) {
                  return param.data[3];
                },
                position: 'top'
              }
            },
            // itemStyle: {
            //   shadowBlur: 10,
            //   shadowColor: 'rgba(10, 36, 50, 0.5)',
            //   shadowOffsetY: 5,
            //   color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            //     {
            //       offset: 0,
            //     //  color: 'rgb(204, 255, 204)'
            //     },
            //     {
            //       offset: 1,
            //       color: 'rgb(204, 255, 204)'
            //     }
            //   ])
            // }
          },
          {
            name: 'Last_year',
            data: data[1],
            type: 'scatter',
            symbolSize: function (data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              focus: 'series',
              label: {
                show: true,
                formatter: function (param) {
                  return param.data[3];
                },
                position: 'top'
              }
            },
            // itemStyle: {
            //   shadowBlur: 10,
            //   shadowColor: 'rgba(120, 36, 50, 0.5)',
            //   shadowOffsetY: 5,
            //   color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            //     {
            //       offset: 0,
            //       color: 'rgb(251, 118, 123)'
            //     },
            //     {
            //       offset: 1,
            //       color: 'rgb(204, 46, 72)'
            //     }
            //   ])
            // }
          },
          {
            name: 'This_year',
            data: data[2],
            type: 'scatter',
            symbolSize: function (data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
              focus: 'series',
              label: {
                show: true,
                formatter: function (param) {
                  return param.data[3];
                },
                position: 'top'
              }
            },
            // itemStyle: {
            //   shadowBlur: 10,
            //   shadowColor: 'rgba(25, 100, 150, 0.5)',
            //   shadowOffsetY: 5,
            //   color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            //     {
            //       offset: 0,
            //       color: 'rgb(129, 227, 238)'
            //     },
            //     {
            //       offset: 1,
            //       color: 'rgb(25, 183, 207)'
            //     }
            //   ])
            // }
          }
        ]
      };
      myChart.setOption(option);
    }
  },
};
</script>