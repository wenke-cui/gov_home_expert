// 初始化中国地图
document.addEventListener('DOMContentLoaded', function() {
    var chartDom = document.getElementById('china-map');
    var myChart = echarts.init(chartDom);
    
    // 使用简化的中国地图数据（使用散点图模拟主要城市）
    var data = [
        {name: '北京', value: [116.4074, 39.9042, 100]},
        {name: '上海', value: [121.4737, 31.2304, 80]},
        {name: '广州', value: [113.2644, 23.1291, 70]},
        {name: '深圳', value: [114.0579, 22.5431, 75]},
        {name: '成都', value: [104.0668, 30.5728, 60]},
        {name: '武汉', value: [114.3054, 30.5931, 55]},
        {name: '西安', value: [108.9398, 34.3416, 50]},
        {name: '沈阳', value: [123.4315, 41.8057, 45]},
        {name: '济南', value: [117.1205, 36.6510, 40]},
        {name: '南京', value: [118.7969, 32.0603, 65]},
        {name: '杭州', value: [120.1551, 30.2741, 68]},
        {name: '重庆', value: [106.5516, 29.5630, 58]},
        {name: '天津', value: [117.2008, 39.0842, 52]},
        {name: '郑州', value: [113.6253, 34.7466, 48]},
        {name: '长沙', value: [112.9388, 28.2282, 46]},
        {name: '福州', value: [119.2965, 26.0745, 42]},
        {name: '昆明', value: [102.8329, 24.8801, 38]},
        {name: '乌鲁木齐', value: [87.6168, 43.8256, 35]},
        {name: '拉萨', value: [91.1409, 29.6456, 30]},
        {name: '兰州', value: [103.8343, 36.0611, 36]},
        {name: '银川', value: [106.2309, 38.4872, 32]},
        {name: '西宁', value: [101.7782, 36.6171, 30]},
        {name: '呼和浩特', value: [111.7492, 40.8426, 38]},
        {name: '太原', value: [112.5489, 37.8706, 40]},
        {name: '石家庄', value: [114.5149, 38.0423, 42]},
        {name: '合肥', value: [117.2272, 31.8206, 44]},
        {name: '南昌', value: [115.8540, 28.6830, 40]},
        {name: '贵阳', value: [106.6302, 26.6477, 36]},
        {name: '南宁', value: [108.3661, 22.8172, 38]},
        {name: '海口', value: [110.3492, 20.0174, 35]},
        {name: '哈尔滨', value: [126.5340, 45.8038, 42]},
        {name: '长春', value: [125.3235, 43.8171, 40]},
        {name: '台北', value: [121.5201, 25.0309, 45]},
        {name: '香港', value: [114.1716, 22.2770, 50]},
        {name: '澳门', value: [113.5491, 22.1987, 35]}
    ];

    var option = {
        backgroundColor: '#f0f8ff',
        title: {
            text: '',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name;
            }
        },
        geo: {
            map: 'china',
            roam: true,
            zoom: 1.2,
            label: {
                show: true,
                fontSize: 10,
                color: '#333'
            },
            itemStyle: {
                areaColor: '#e6f2ff',
                borderColor: '#1890ff',
                borderWidth: 1
            },
            emphasis: {
                itemStyle: {
                    areaColor: '#91cc75'
                }
            }
        },
        series: [
            {
                name: '城市',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: data,
                symbolSize: function(val) {
                    return val[2] / 5;
                },
                label: {
                    show: true,
                    formatter: '{b}',
                    position: 'right',
                    fontSize: 10,
                    color: '#333'
                },
                itemStyle: {
                    color: '#ff6b6b'
                },
                emphasis: {
                    itemStyle: {
                        color: '#ff4757'
                    }
                }
            },
            {
                name: '北京',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: [data[0]],
                symbolSize: 15,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke',
                    scale: 3
                },
                label: {
                    show: true,
                    formatter: '{b}',
                    position: 'right',
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#ff0000'
                },
                itemStyle: {
                    color: '#ff0000',
                    shadowBlur: 10,
                    shadowColor: '#ff0000'
                }
            }
        ]
    };

    // 由于没有中国地图JSON数据，使用简化的背景+散点方案
    var simpleOption = {
        backgroundColor: '#f0f8ff',
        title: {
            text: '中华人民共和国',
            subtext: '主要城市分布',
            left: 'center',
            top: 20,
            textStyle: {
                fontSize: 24,
                color: '#333'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        xAxis: {
            show: false,
            min: 70,
            max: 140
        },
        yAxis: {
            show: false,
            min: 15,
            max: 55
        },
        series: [
            {
                type: 'scatter',
                data: data.map(function(item) {
                    return {
                        name: item.name,
                        value: [item.value[0], item.value[1]],
                        symbolSize: item.value[2] / 4
                    };
                }),
                label: {
                    show: true,
                    formatter: '{b}',
                    position: 'top',
                    fontSize: 10
                },
                itemStyle: {
                    color: function(params) {
                        if (params.name === '北京') {
                            return '#ff0000';
                        }
                        return '#1890ff';
                    }
                }
            },
            {
                type: 'effectScatter',
                data: [
                    {
                        name: '北京',
                        value: [116.4074, 39.9042]
                    }
                ],
                symbolSize: 20,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke',
                    scale: 4
                },
                label: {
                    show: true,
                    formatter: '★ {b}',
                    position: 'right',
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#ff0000'
                },
                itemStyle: {
                    color: '#ff0000'
                }
            }
        ],
        graphic: [
            {
                type: 'text',
                left: 'center',
                bottom: 30,
                style: {
                    text: '周边国家：俄罗斯、蒙古、哈萨克斯坦、吉尔吉斯斯坦、塔吉克斯坦、阿富汗、巴基斯坦、印度、尼泊尔、不丹、缅甸、老挝、越南、朝鲜、韩国、日本',
                    fontSize: 11,
                    fill: '#666'
                }
            }
        ]
    };

    myChart.setOption(simpleOption);

    // 响应式
    window.addEventListener('resize', function() {
        myChart.resize();
    });
});
