// todo ======================= 图表概览 =======================

// todo ======================= 饼图 =======================
let myEchartsP = echarts.init(qs('.pie'))
optionP = {
    title: {
      text: '籍贯 Hometown',
      left: 'left'
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: [
        'rose1',
        'rose2',
        'rose3',
        'rose4',
        'rose5',
        'rose6',
        'rose7',
        'rose8'
      ]
    },
    series: [
      {
        name: 'Area Mode',
        type: 'pie',
        radius: [20, 140],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 20, name: '广西壮族自治区' },
          { value: 10, name: '甘肃省' },
          { value: 23, name: '湖南省' },
          { value: 13, name: '河北省' },
          { value: 19, name: '黑龙江省' },
          { value: 22, name: '山东省' },
          { value: 26, name: '云南省' },
          { value: 18, name: '内蒙古自治区' },
          { value: 21, name: '江苏省' },
          { value: 21, name: '广东省' },
          { value: 12, name: '新疆维吾尔自治区' },
          { value: 8, name: '河南省' }
        ]
      }
    ]
  };
myEchartsP.setOption(optionP)
// todo ======================= 地图 =======================

// todo ======================= 柱状图 =======================
// 1.创建echarts实例
let myEcharts = echarts.init(qs('.barChart'))
// 2.设置配置对象option
let option = {
    grid: {
        top: 30,
        bottom: 30,
        left: '7%',
        right: '7%'
      },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
        // 鼠标移入的提示
    tooltip: {
        trigger: 'axis', // 触发方式，axis表示轴触发，item表示每一项
        axisPointer: {   // 坐标轴指示器配置项
        // 十字准星指示器，其他选项有 line、shadow、none（这里配合x轴的设置，组成的十字准星）
        type: 'cross', 
        crossStyle: {
            color: '#999'
        }
        }
    },
    toolbox: {
    },
    legend: {},
    xAxis: [
      {
        type: 'category',
        data: ['1组', '2组', '3组', '4组', '5组', '6组', '7组'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 100,
        interval: 10,
        axisLabel: {
          formatter: '{value} 分'
        }
      },
      {
        type: 'value',
        min: 0,
        max: 10,
        interval: 1,
        axisLabel: {
          formatter: '{value} 人'
        }
      }
    ],
    series: [
      {
        name: '平均分',
        type: 'bar',
        barWidth: 15,
        tooltip: {
          valueFormatter: function (value) {
            return value;
          }
        },
        data: [83, 57, 90, 78, 66, 76, 77, 87, 69, 92, 88, 78]
      },
      {
        name: '低于60分人数',
        type: 'bar',
        barWidth: 15,
        tooltip: {
          valueFormatter: function (value) {
            return value;
          }
        },
        data: [2, 1, 3, 4, 2, 5, 2, 2, 4, 1, 6, 2]
      },
      {
        name: '60到80之间',
        type: 'bar',
        barWidth: 15,
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value;
          }
        },
        data: [3, 2, 1, 5, 1, 2, 3, 4, 5, 2, 2, 4]
      },
      {
        name: '高于80分人数',
        type: 'bar',
        barWidth: 15,
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value;
          }
        },
        data: [3, 2, 1, 5, 1, 2, 3, 4, 5, 2, 2, 4]
      }
    ]
  };
// 3.将配置项与图表数据进行关联
myEcharts.setOption(option)
// todo  ======================= 折线图 =======================
let myEchartsz = echarts.init(qs('.line'))

 let optionz = {
      title:{
        text: '薪资salary',
      },
      legend: {
      },
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      dataset: {
        source: [
          ['product', '罗丽', '赵桂英', '龚洋', '廖磊', '邹芳', '程刚', '赖洋', '龚霞', '钱勇'],
          ['期望薪资', 15000, 16000, 17000, 5000, 20000, 10000, 20000, 10000, 10000],
          ['实际薪资', 3000, 8000, 9000, 11000, 10500, 11500, 8000, 6000, 6000],
        ]
      },
      xAxis: { type: 'category' },
      yAxis: { 
        gridIndex: 0,
        min: 0,
        max: 30000,
        interval: 5000,
      },
        dataZoom: [
      {
        show: true,
        realtime: true,
        start: 0,
        end: 100,
        xAxisIndex: [0, 1]
      },
  
    ],
      grid: { 
        top: '45%',
      },
      series: [
        {
          type: 'line',
          smooth: true,
          symbol: 'none',
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          symbol: 'none',
          color: 'red',
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
      ]
    };
    myEchartsz.setOption(optionz);
