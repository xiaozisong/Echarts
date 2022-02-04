// todo ======================= 图表概览 =======================

// todo ======================= 饼图 =======================

// todo ======================= 地图 =======================

// todo ======================= 柱状图 =======================
// 1. 创建echarts的实例
let myChart = echarts.init(qs('.barChart'))
// 2. 准备配置项 option
let option = {
    grid: {
        top: 30,
        bottom: 30,
        left: '7%',
        right: '7%'
    },
    tooltip: { // 提示框
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        // 图例
    },

    xAxis: [ // x轴
        {
            type: 'category', // 类目轴，适用于离散的类目数据
            data: ['1组', '2组', '3组', '4组', '5组', '6组', '7组'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [ // y轴
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
            data: [83, 57, 90, 78, 66, 76, 77, 87, 69, 92, 88, 78]
        },
        {
            name: '低于60分人数',
            type: 'bar',
            barWidth: 15,
            data: [2, 1, 3, 4, 2, 5, 2, 2, 4, 1, 6, 2]
        },
        {
            name: '60到80之间',
            type: 'bar',
            barWidth: 15,
            yAxisIndex: 1,
            data: [3, 2, 1, 5, 1, 2, 3, 4, 5, 2, 2, 4]
        },
        {
            name: '高于80分人数',
            type: 'bar',
            barWidth: 15,
            yAxisIndex: 1,
            data: [3, 2, 1, 5, 1, 2, 3, 4, 5, 2, 2, 4]
        }
    ]
}

// 3. setOption方法生成图表
myChart.setOption(option)


// todo  ======================= 折线图 =======================