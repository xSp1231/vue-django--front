<template>
  <div class="chart-container">
    <div ref="graph1" class="chart" style="width: 95%;height: 460px;"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
import 'echarts/theme/macarons.js'
export default {
  data() {
    return {
    };
  },
  mounted() {
    //echarts.registerTheme('macarons',macarons)
    this.init();
  },
  methods: {
    init() {
      const data = [
        {
          name: 'A',
          value: [2, 13, 14, 22, 23],
        },
        {
          name: 'B',
          value: [12, 14, 20, 22, 23],
        },
        {
          name: 'C',
          value: [3, 6, 8, 11, 16],
        },
        {
          name: 'D',
          value: [12, 14, 16, 20, 22],
        },
        {
          name: 'E',
          value: [13, 15, 17, 18, 21],
        }, {
          name: 'F',
          value: [12, 19, 21, 23, 23],
        },
        {
          name: 'G',
          value: [10, 12, 16, 16, 20],
        },
        {
          name: 'H',
          value: [5, 14, 15, 17, 21],
        },
        {
          name: 'I',
          value: [10, 20, 21, 22, 23],
        },
        {
          name: 'J',
          value: [15, 16, 21, 23, 23],
        },
        {
          name: 'K',
          value: [1, 2, 8, 16, 23],
        },
        {
          name: 'L',
          value: [2, 6, 10, 15, 21],
        },
      ];
      // 初始化图表实例
      var myChart = echarts.init(this.$refs.graph1, 'macarons');

      // 配置项
      const option = {
        title: {
          text: '不同区域内活跃程度图',
          left: 'center',
          top: '0%'
        },

        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        yAxis: {
          type: 'category',
          data: data.map((item) => item.name),
        },
        xAxis: {
          axisLabel: {
            interval: 0 // 控制 x 轴标签全部显示
        },
          type: 'value',
          name: 'h',
          splitLine: {
            lineStyle: {
              type: 'dashed',
            },
          },
        },
        series: [
          {
            name: 'Boxplot',
            type: 'boxplot',
            data: data.map((item) => item.value),
            tooltip: {
              formatter: function (param) {
                return [
                  'Name: ' + param.name + '<hr size=1 style="margin: 3px 0">',
                  'Max: ' + param.data[4] + '<br/>',
                  'Q3: ' + param.data[3] + '<br/>',
                  'Median: ' + param.data[2] + '<br/>',
                  'Q1: ' + param.data[1] + '<br/>',
                  'Min: ' + param.data[0] + '<br/>',
                ].join('');
              },
            },
            itemStyle: {
		            color: {
		                type: 'linear',
		                x: 0,
		                y: 0,
		                x2: 1,
		                y2: 0,
		                colorStops: [{
		                    offset: 0, color: '#C5E1A5'
		                }, {
		                    offset: 1, color: '#FFB74D'
		                }],
		            },
		        },


          },
        ],
        
      };

      // 渲染图表
      myChart.setOption(option);




    }
  }
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
}

.chart {
  width: 100%;
  height: 100%;
}
</style>
