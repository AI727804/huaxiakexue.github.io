// pie chart
document.addEventListener('DOMContentLoaded', function () {
    // 初始化 ECharts 实例
    let myChart = echarts.init(document.getElementById('chart2'));
    let pie_data1 = '{%PIEDATA1%}';
    let pie_data2 = '{%PIEDATA2%}';
    let option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '7%',
            orient: 'horizontal',
            data: pie_data1
        },
        series: [
            {
                type: 'pie',
                radius: ['20%', '60%'],
                avoidLabelOverlap: true,
                padAngle: 5,
                itemStyle: {
                    borderRadius: 10
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: pie_data2
            }
        ]
    };
    // 渲染图表
    myChart.setOption(option);
});

// map
document.addEventListener('DOMContentLoaded', function () {
    let myChart = echarts.init(document.getElementById('chart3'));
  
    // fetch('https://cdn.jsdelivr.net/npm/echarts/map/json/china.json')
    fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
        .then(response => response.json())
        .then(chinaMapData => {
            echarts.registerMap('china', chinaMapData);
            let mapData = '{%MAPDATA1%}';
            let option = {
                // title: {
                //     text: '中国地图数据可视化',
                //     subtext: '示例数据',
                //     left: 'center'
                // },
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        if (params.data.description) {
                        return params.name + '<br/>' +
                            params.seriesName + ' : ' + params.value + '<br/>' +
                            '详情：<br/>' + params.data.description;
                        } else {
                        return '无';
                        }
                    }
                },
                visualMap: {
                    show: false,
                    min: 0,
                    max: 8,
                    text:['高','低'],
                    realtime: true,
                    inRange: {
                        color: ['lightskyblue','yellow', 'orangered']
                    }
                },
                series: [
                    {
                        name: '发明数量',
                        type: 'map',
                        mapType: 'china',
                        roam: false,
                        label: {
                            show: false
                        },
                        data: mapData
                    }
                ]
            };
  
            myChart.setOption(option);
        });
});

// bar chart
document.addEventListener('DOMContentLoaded', function () {
    let mapData = '{%BARDATA1%}';
    let myChart = echarts.init(document.getElementById('chart4'));
    let option = {
    //   title: {
    //     text: '',
    //     subtext: '',
    //     left: 'center'
    //   },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: mapData.map(item => item.name)
      },
      series: [
        {
          name: '发明数量',
          type: 'bar',
          data: mapData.map(item => item.value)
        }
      ]
    };
    myChart.setOption(option);
  
});

// word cloud
document.addEventListener('DOMContentLoaded', function () {
      let myChart = echarts.init(document.getElementById('chart5'));
      // let maskImage = new Image();
      // maskImage.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzM3OTg3MzI0NzAyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzNDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTk2MCAwSDY0QzI1LjYgMCAwIDMyIDAgNjR2ODk2YzAgMzguNCAyNS42IDY0IDY0IDY0aDg5NmMzOC40IDAgNjQtMjUuNiA2NC02NFY2NGMwLTMyLTMyLTY0LTY0LTY0ek0yMDQuOCAzNDUuNmMxOS4yLTEyLjggMzItMjUuNiAzOC40LTQ0LjhzMTkuMi0zOC40IDI1LjYtNzYuOGgxOS4yYzAgMTkuMiA2LjQgMzIgNi40IDQ0LjhoMTg1LjZjLTE5LjItNTEuMi00NC44LTgzLjItNzYuOC0xMDguOGwxMi44LTEyLjhjNDQuOCAxMi44IDc2LjggMjUuNiAxMDIuNCAzMiAxOS4yIDEyLjggMzIgMjUuNiAzMiAzOC40IDAgNi40LTYuNCAxOS4yLTEyLjggMjUuNi02LjQgMTIuOC0xMi44IDE5LjItMjUuNiAyNS42aDIxNy42bDI1LjYtMzJjNi40LTYuNCA2LjQtNi40IDEyLjgtNi40czEyLjggNi40IDMyIDE5LjJjMTkuMiAxMi44IDI1LjYgMjUuNiAzOC40IDMyIDYuNCA2LjQgMTIuOCAxMi44IDEyLjggMTkuMiAwIDYuNC02LjQgNi40LTE5LjIgNi40cy0zMiAxMi44LTUxLjIgMTkuMmMtMTkuMiAxMi44LTUxLjIgMzguNC04OS42IDcwLjRsLTEyLjgtNi40YzI1LjYtMzguNCA0NC44LTcwLjQgNTcuNi0xMDIuNEgyOTQuNGMwIDM4LjQtNi40IDcwLjQtMjUuNiA4OS42cy0zMiAzOC40LTUxLjIgMzguNGMtMTIuOCAwLTE5LjIgMC0yNS42LTYuNC0xMi44LTYuNC0xMi44LTEyLjgtMTIuOC0yNS42czYuNC0yNS42IDI1LjYtMzguNHpNODc2LjggNzY4aC0yNS42Yy0xOS4yIDAtMzguNCAwLTUxLjIgNi40cy0xOS4yIDEyLjgtMjUuNiAxOS4yYy02LjQgNi40LTYuNCA2LjQtMTIuOCA2LjRzLTM4LjQtMTkuMi03Ni44LTU3LjZjLTQ0LjgtMzguNC03Ni44LTc2LjgtOTYtMTE1LjItMTkuMi0zOC40LTMyLTc2LjgtNDQuOC0xMjhoLTEyLjh2MzQ1LjZjMCA2LjQgMCA2LjQtNi40IDEyLjhzLTEyLjggNi40LTMyIDEyLjgtMjUuNiA2LjQtMzIgNi40YzAgMC02LjQgMC02LjQtNi40VjgzMiA1NjMuMmMtNTcuNiAxMDIuNC0xNjAgMTkyLTMwNy4yIDI2Mi40bC02LjQtMTIuOGMxMjgtODkuNiAyMTcuNi0xOTIgMjgxLjYtMzEzLjZIMjA0LjhjLTEyLjggMC0xOS4yIDAtMjUuNiA2LjRsLTEyLjgtMzguNGMxMi44IDAgMTkuMiA2LjQgMzIgNi40aDI2Mi40di02NC04My4yYzE5LjIgMCAzMiA2LjQgNTEuMiAxMi44IDE5LjIgNi40IDMyIDYuNCAzMiA2LjQgNi40IDAgNi40IDYuNCA2LjQgNi40cy02LjQgNi40LTE5LjIgMTIuOHYxMDguOGgxODUuNmwzOC40LTUxLjJjNi40LTYuNCA2LjQtNi40IDEyLjgtNi40czE5LjIgMTIuOCA0NC44IDMyYzI1LjYgMTkuMiAzOC40IDM4LjQgMzguNCA0NC44cy0xOS4yIDYuNC0zMiA2LjRINTY5LjZjMjUuNiA1Ny42IDcwLjQgMTE1LjIgMTIxLjYgMTYwczExNS4yIDc2LjggMTg1LjYgOTZ2MTIuOHoiIHAtaWQ9IjQzNDQiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTMuMjZmZTNhODFodzNWSWgiIGNsYXNzPSJzZWxlY3RlZCIgZmlsbD0iIzJjMmMyYyI+PC9wYXRoPjwvc3ZnPg==';
      let data = [
        { name: '活字印刷', value: Math.round(Math.random()*1000)},
        { name: '指南针', value: Math.round(Math.random()*1000)},
        { name: '火药', value: Math.round(Math.random()*1000)},
        { name: '天文', value: Math.round(Math.random()*1000)},
        { name: '浑仪', value: Math.round(Math.random()*1000)},
        { name: '水利', value: Math.round(Math.random()*1000)},
        { name: '农业', value: Math.round(Math.random()*1000)},
        { name: '稻麦轮作', value: Math.round(Math.random()*1000)},
        { name: '数学', value: Math.round(Math.random()*1000)},
        { name: '秦九韶', value: Math.round(Math.random()*1000)},
        { name: '贾宪', value: Math.round(Math.random()*1000)},
        { name: '医学', value: Math.round(Math.random()*1000)},
        { name: '太平惠民和剂局方', value: Math.round(Math.random()*1000)},
        { name: '瓷器', value: Math.round(Math.random()*1000)},
        { name: '景德镇', value: Math.round(Math.random()*1000)},
        { name: '造纸', value: Math.round(Math.random()*1000)},
        { name: '信息传播', value: Math.round(Math.random()*1000)},
        { name: '航海', value: Math.round(Math.random()*1000)},
        { name: '火器', value: Math.round(Math.random()*1000)},
        { name: '烟花', value: Math.round(Math.random()*1000)},
        { name: '历法', value: Math.round(Math.random()*1000)},
        { name: '精确', value: Math.round(Math.random()*1000)},
        { name: '肥料', value: Math.round(Math.random()*1000)},
        { name: '产量', value: Math.round(Math.random()*1000)},
        { name: '创新', value: Math.round(Math.random()*1000)},
        { name: '工艺', value: Math.round(Math.random()*1000)},
        { name: '知识普及', value: Math.round(Math.random()*1000)},
        { name: '书籍', value: Math.round(Math.random()*1000)},
        { name: '贸易', value: Math.round(Math.random()*1000)},
      ];
      let option = {
          // title: {
          //     text: 'ECharts WordCloud 示例',
          //     left: 'center'
          // },
          tooltip: {
              trigger: 'item',
              formatter: '{b}: {c}'
          },
          series: [
              {
                  type: 'wordCloud',
                  shape: 'circle',
                  // maskImage: maskImage,
                  sizeRange: [15, 35],
                  rotationRange: [-90, 90],
                  gridSize: 2,
                  drawOutOfBound: true,
                  textStyle: {
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    // Color can be a callback function or a color string
                    color: function () {
                        // Random color
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    focus: 'self',
      
                    textStyle: {
                        textShadowBlur: 10,
                        textShadowColor: '#333'
                    }
                },
                data: data
              }
          ]
      };
  
      myChart.setOption(option);
});

// line chart
document.addEventListener('DOMContentLoaded', function () {
    let myChart = echarts.init(document.getElementById('chart6'));
  
    let data = '{%LINEDATA1%}';
    let option = {
        title: {
            // text: '折线图堆叠'
        },
        tooltip: {
          // 横坐标为整数
            trigger: 'axis',
        },
        // legend: {
            // data: ['成就数']
        // },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'value',
            min: 900,
            max: 1300
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: '成就数量',
                type: 'line',
                stack: '总量',
                data: data
            },
        ]
    };
  
    myChart.setOption(option);
});