/**
 * Created by wangxiaoyu on 16/7/15.
 */
var myChart = echarts.init(document.getElementById('circle'));
var room = "4-325";
var col = ['1', '2', '3', '4', '5', '6', '7',
    '8', '9', '10','11','12', '13', '14', '15',
    '16', '17', '18'];
var row = ['1', '2', '3', '4', '5', '6', '7',
    '8', '9', '10','11','12'];

var data = [[1,1,20],[3,3,10],[18,12,5],[6,7,7],[7,7,9],[2,5,5],[3,2,10],[3,4,20],[4,4,10],[5,4,10]];
data = data.map(function (item) {
    return [item[0]-1, item[1]-1, item[2]];
});

option = {
    title: {
        text: room + ' 座位分布',
        textStyle: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18
        },
        top: '3',
        left: '215 ',
        padding: [5, 175.5]
    },
    legend: {
        show: true,
        data: ['使用中'],
        align: 'left',
        right: '8',
        top: '10'
    },
    tooltip: {
        show: true,
        position: 'top',
        formatter: function (params) {
            return '位置(' + col[params.value[0]] + ',' + row[params.value[1]] + ') ' + params.value[2]*5 + '%可能被占用';
        },
        backgroundColor: 'rgba(4,118,217,0.7)'
    },
    grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true,
    },
    xAxis: {
        min: '1',
        max: '18',
        interval: 1,
        type: 'category',
        data: col,
        boundaryGap: true,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#999',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        min: '1',
        max: '12',
        interval: 1,
        type: 'category',
        data: row,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#999',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        name: '使用中',
        type: 'scatter',
        symbolSize: function (val) {
            return val[2] * 2;
        },
        data: data,
        animationDelay: function (idx) {
            return idx * 5;
        }
    }]
};
myChart.setOption(option);

var myChart2 = echarts.init(document.getElementById('circle2'));
var room2 = "图-108";
var col2 = ['1', '2', '3', '4', '5', '6', '7',
    '8', '9', '10','11','12', '13', '14', '15',
    '16', '17', '18'];
var row2 = ['1', '2', '3', '4', '5', '6', '7',
    '8', '9', '10','11','12'];

var data2 = [[1,1,20],[3,3,10],[18,12,5],[6,7,7],[7,7,9],[2,5,5],[3,2,10],[3,4,20],[2,1,10],[18,11,10]];
data2 = data2.map(function (item) {
    return [item[0]-1, item[1]-1, item[2]];
});

option = {
    title: {
        text: room2 + ' 座位分布',
        textStyle: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18
        },
        top: '3',
        left: '215 ',
        padding: [5, 175.5]
    },
    legend: {
        show: true,
        data: ['使用中'],
        align: 'left',
        right: '8',
        top: '10'
    },
    tooltip: {
        show: true,
        position: 'top',
        formatter: function (params) {
            return '位置(' + col2[params.value[0]] + ',' + row2[params.value[1]] + ') ' + params.value[2]*5 + '%可能被占用';
        },
        backgroundColor: 'rgba(4,118,217,0.7)'
    },
    grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true,
    },
    xAxis: {
        min: '1',
        max: '18',
        interval: 1,
        type: 'category',
        data: col2,
        boundaryGap: true,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#999',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        min: '1',
        max: '12',
        interval: 1,
        type: 'category',
        data: row2,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#999',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        name: '使用中',
        type: 'scatter',
        symbolSize: function (val) {
            return val[2] * 2;
        },
        data: data2,
        animationDelay: function (idx) {
            return idx * 5;
        }
    }]
};
myChart2.setOption(option);

var myChart3 = echarts.init(document.getElementById('circle3'));
var room3 = "3-235";
var col3 = ['1', '2', '3', '4', '5', '6', '7',
    '8', '9', '10','11','12', '13', '14', '15',
    '16', '17', '18'];
var row3 = ['1', '2', '3', '4', '5', '6', '7',
    '8', '9', '10','11','12'];

var data3 = [[1,1,10],[2,1,20],[3,4,5],[5,4,10],[11,12,20],[12,12,20]];
data3 = data3.map(function (item) {
    return [item[0]-1, item[1]-1, item[2]];
});

option = {
    title: {
        text: room3 + ' 座位分布',
        textStyle: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18
        },
        top: '3',
        left: '215 ',
        padding: [5, 175.5]
    },
    legend: {
        show: true,
        data: ['使用中'],
        align: 'left',
        right: '8',
        top: '10'
    },
    tooltip: {
        show: true,
        position: 'top',
        formatter: function (params) {
            return '位置(' + col3[params.value[0]] + ',' + row3[params.value[1]] + ') ' + params.value[2]*5 + '%可能被占用';
        },
        backgroundColor: 'rgba(4,118,217,0.7)'
    },
    grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true,
    },
    xAxis: {
        min: '1',
        max: '18',
        interval: 1,
        type: 'category',
        data: col3,
        boundaryGap: true,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#999',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        min: '1',
        max: '12',
        interval: 1,
        type: 'category',
        data: row3,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#999',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        name: '使用中',
        type: 'scatter',
        symbolSize: function (val) {
            return val[2] * 2;
        },
        data: data3,
        animationDelay: function (idx) {
            return idx * 5;
        }
    }]
};
myChart3.setOption(option);
