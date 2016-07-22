/**
 * Created by wangxiaoyu on 16/7/15.
 */
var myfootstep = echarts.init(document.getElementById("myFootPrint"));
//myfootstep.showLoading();
myfootstep.setOption({
    title: {
        show: 'true',
        text:'常去的自习室',
        left: '125'
    },
    series : [
        {
            roseType: 'radius',
            radius: [10, 100],
            center: ['50%', '50%'],
            startAngle: 180,
            name: "常去的自习室",
            type: "pie",
            data: [
                {value: 30, name: "4-235"},
                {value: 24, name: "4-335"},
                {value: 15, name: "3-108"},
                {value: 12, name: "3-435"},
                {value: 8, name: "图-222"}
            ],
            itemStyle:{
                emphasis:{
                    shadowBlur: 200,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'white'
                }
            },
            labelLine:{
                normal:{
                    lineStyle:{
                        color: 'rgba(25, 25, 25, 0.3)'
                    }
                }

            }
        }
    ],
    tooltip:{
        trigger: 'item',
        formatter:  "{a} <br/>{b} : {c} ({d}%)"
    },
    legend:{
        x: 'center',
        y: 'bottom',
        data: ['4-235','4-335','3-108','3-435','图-222']
    }
});

var apartmentrank = echarts.init(document.getElementById("apartmentRank"));
apartmentrank.setOption({
        title: {
            show: 'true',
            text:'教学楼使用情况',
            left: '125'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            x: 'center',
            y: 'bottom',
            data:['教一','教二','教三','教四','图书馆']
        },
        series: [
            {
                id:'apartment',
                name:'教学楼',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '30%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:164, name:'教一'},
                    {value:89, name:'教二'},
                    {value:246, name:'教三'},
                    {value:199, name:'教四'},
                    {value:187, name:'图书馆'}
                ]
            },
            {
                id:'room',
                name:'教室',
                type:'pie',
                radius: ['40%', '55%'],

                data:[
                    {value:64, name:'1-108'},
                    {value:42, name:'1-222'},
                    {value:58, name:'1-其他'},
                    {value:45, name:'2-231'},
                    {value:20, name:'2-418'},
                    {value:24, name:'2-其他'},
                    {value:66, name:'3-131'},
                    {value:40, name:'3-435'},
                    {value:140, name:'3-其他'},
                    {value:56, name:'4-202'},
                    {value:45, name:'4-313'},
                    {value:98, name:'4-其他'},
                    {value:67, name:'图-122'},
                    {value:45, name:'图-302'},
                    {value:75, name:'图-其他'},

                ]
            }
        ],
    });
apartmentrank.on('click',function(param){
    $(document).ready(function(){
        if (param.name === '教一') {
            $("#j2Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#j3Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#j4Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#TRank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#j1Rank").fadeIn(1000).animate({left: "45%"}, 'normal');
        } else if (param.name === '教二') {
            $("#j1Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#j3Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#j4Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#TRank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#j2Rank").fadeIn(1000).animate({left: "45%"}, 'normal');
        } else if (param.name === '教三') {
            $("#j2Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#j1Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#j4Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#TRank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#j3Rank").fadeIn(1000).animate({left: "45%"}, 'normal');
        } else if (param.name === '教四') {
            $("#j2Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#j3Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#j1Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#TRank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#j4Rank").fadeIn(1000).animate({left: "45%"}, 'normal');
        } else if (param.name === '图书馆') {
            $("#j2Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#j3Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#j4Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#j1Rank").fadeOut(500).animate({left: "562px"}, 'normal');
            $("#TRank").fadeIn(1000).animate({left: "45%"}, 'normal');
        } else {
            alert("点击教学楼查看详情");
            $("#j1Rank").fadeOut(1000).animate({left: "562px"}, 'normal');
            $("#j2Rank").fadeOut(1000).animate({left: "562px"}, 'normal');
            $("#j3Rank").fadeOut(1000).animate({left: "562px"}, 'normal');
            $("#j4Rank").fadeOut(1000).animate({left: "562px"}, 'normal');
            $("#TRank").fadeOut(1000).animate({left: "562px"}, 'normal');
        }
    });
});

var j1Rank = echarts.init(document.getElementById("j1Rank"));
j1Rank.setOption({
    color: ['#c23531'],
    title: {
        show: 'true',
        text:'教一使用情况',
        left: '175'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "教室 {b} : {c}人"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['1-108', '1-222', '1-323', '1-417', '1-113', '1-132', '1-其他'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'j1Rank',
            type:'bar',
            barWidth: '45%',
            data:[64, 42, 21, 9, 7, 12, 9]
        }
    ],
    animationDuration: 5000
});

var j2Rank = echarts.init(document.getElementById("j2Rank"));
j2Rank.setOption({
    color: ['#2f4554'],
    title: {
        show: 'true',
        text:'教二使用情况',
        left: '175'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "教室 {b} : {c}人"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['2-231', '2-418', '2-114', '2-417', '2-209', '2-332', '2-其他'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'j2Rank',
            type:'bar',
            barWidth: '45%',
            data:[45, 20, 12, 4, 6, 2, 0]
        }
    ],
    animationDuration: 5000
});

var j3Rank = echarts.init(document.getElementById("j3Rank"));
j3Rank.setOption({
    color: ['#61a0a8'],
    title: {
        show: 'true',
        text:'教三使用情况',
        left: '175'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "教室 {b} : {c}人"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['3-131', '3-435', '3-322', '3-124', '3-332', '3-209', '3-其他'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'j3Rank',
            type:'bar',
            barWidth: '45%',
            data:[66, 40, 35, 30, 13, 20, 42]
        }
    ],
    animationDuration: 5000
});

var j4Rank = echarts.init(document.getElementById("j4Rank"));
j4Rank.setOption({
    color: ['#d48265'],
    title: {
        show: 'true',
        text:'教四使用情况',
        left: '175'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "教室 {b} : {c}人"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['4-202', '4-313', '4-114', '4-435', '4-234', '4-333', '4-其他'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'j4Rank',
            type:'bar',
            barWidth: '45%',
            data:[56, 45, 40, 34, 14, 4, 6]
        }
    ],
    animationDuration: 5000
});

var TRank = echarts.init(document.getElementById("TRank"));
TRank.setOption({
    color: ['#91c7ae'],
    title: {
        show: 'true',
        text:'图书馆使用情况',
        left: '175'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "教室 {b} : {c}人"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['图-122', '图-302', '图-121', '图-120', '图-213', '图-211', '图-其他'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'TRank',
            type:'bar',
            barWidth: '45%',
            data:[67, 45, 45, 23, 3, 2, 2]
        }
    ],
    animationDuration: 5000
});

var climaxTime = echarts.init(document.getElementById('climaxTime'));
var dataMap = {};
function dataFormatter(obj) {
    return obj;
}

dataMap.dataJ1 = dataFormatter({
    0800:['24'],
    1000:['350'],
    1200:['120'],
    1400:['215'],
    1600:['467'],
    1800:['54'],
    2000:['189'],
    2200:['34']
});

dataMap.dataJ2 = dataFormatter({
    0800:['34'],
    1000:['234'],
    1200:['98'],
    1400:['156'],
    1600:['309'],
    1800:['20'],
    2000:['67'],
    2200:['12']
});

dataMap.dataJ3 = dataFormatter({
    0800:['256'],
    1000:['578'],
    1200:['234'],
    1400:['453'],
    1600:['567'],
    1800:['34'],
    2000:['276'],
    2200:['209']
});

dataMap.dataJ4 = dataFormatter({
    0800:['89'],
    1000:['234'],
    1200:['145'],
    1400:['256'],
    1600:['178'],
    1800:['56'],
    2000:['389'],
    2200:['16']
});

dataMap.dataT = dataFormatter({
    0800:['24'],
    1000:['234'],
    1200:['120'],
    1400:['142'],
    1600:['231'],
    1800:['23'],
    2000:['289'],
    2200:['14']
});


option = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
             //currentIndex: 2,
            playInterval: 1500,
             //controlStyle: {
             //    position: 'left'
             //},
            data: [
                '08:00','10:00','12:00','14:00',
                '16:00', '18:00','20:00','22:00'
            ],
            label: {
                formatter : function(s) {
                    return s;
                }
            }
        },
        title:{
            left: '50px'
        },
        tooltip: {},
        legend: {
            left: '485px',
            top: '10px',
            data: ['教一', '教二', '教三', '教四', '图书馆']
        },
        calculable : true,
        grid: {
            top: 80,
            bottom: 100
        },
        xAxis: [
            {
                'type':'category',
                'axisLabel':{'interval':0},
                'data':['教学楼使用情况'],
                splitLine: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '人数'
            }
        ],
        series: [
            {name: '教一', type: 'bar'},
            {name: '教二', type: 'bar'},
            {name: '教三', type: 'bar'},
            {name: '教四', type: 'bar'},
            {name: '图书馆', type: 'bar'},
            {
                name: '教学楼使用占比',
                type: 'pie',
                center: ['80%', '25%'],
                radius: '25%'
            }
        ]
    },
    options: [
        {
            title: {text: '08:00教学楼使用情况'},
            series : [
                {data: dataMap.dataJ1[0800]},
                {data: dataMap.dataJ2[0800]},
                {data: dataMap.dataJ3[0800]},
                {data: dataMap.dataJ4[0800]},
                {data: dataMap.dataT[0800]},
                {data: [
                    {name: '教一', value: dataMap.dataJ1[0800]},
                    {name: '教二', value: dataMap.dataJ2[0800]},
                    {name: '教三', value: dataMap.dataJ3[0800]},
                    {name: '教四', value: dataMap.dataJ4[0800]},
                    {name: '图书馆', value: dataMap.dataT[0800]}
                ]}
            ]
        },
        {
            title : {text: '10:00教学楼使用情况'},
            series : [
                {data: dataMap.dataJ1['1000']},
                {data: dataMap.dataJ2['1000']},
                {data: dataMap.dataJ3['1000']},
                {data: dataMap.dataJ4['1000']},
                {data: dataMap.dataT['1000']},
                {data: [
                    {name: '教一', value: dataMap.dataJ1['1000']},
                    {name: '教二', value: dataMap.dataJ2['1000']},
                    {name: '教三', value: dataMap.dataJ3['1000']},
                    {name: '教四', value: dataMap.dataJ4['1000']},
                    {name: '图书馆', value: dataMap.dataT['1000']}
                ]}
            ]
        },
        {
            title : {text: '12:00教学楼使用情况'},
            series : [
                {data: dataMap.dataJ1['1200']},
                {data: dataMap.dataJ2['1200']},
                {data: dataMap.dataJ3['1200']},
                {data: dataMap.dataJ4['1200']},
                {data: dataMap.dataT['1200']},
                {data: [
                    {name: '教一', value: dataMap.dataJ1['1200']},
                    {name: '教二', value: dataMap.dataJ2['1200']},
                    {name: '教三', value: dataMap.dataJ3['1200']},
                    {name: '教四', value: dataMap.dataJ4['1200']},
                    {name: '图书馆', value: dataMap.dataT['1200']}
                ]}
            ]
        },
        {
            title : {text: '14:00教学楼使用情况'},
            series : [
                {data: dataMap.dataJ1['1400']},
                {data: dataMap.dataJ2['1400']},
                {data: dataMap.dataJ3['1400']},
                {data: dataMap.dataJ4['1400']},
                {data: dataMap.dataT['1400']},
                {data: [
                    {name: '教一', value: dataMap.dataJ1['1400']},
                    {name: '教二', value: dataMap.dataJ2['1400']},
                    {name: '教三', value: dataMap.dataJ3['1400']},
                    {name: '教四', value: dataMap.dataJ4['1400']},
                    {name: '图书馆', value: dataMap.dataT['1400']}
                ]}
            ]
        },
        {
            title : {text: '16:00教学楼使用情况'},
            series : [
                {data: dataMap.dataJ1['1600']},
                {data: dataMap.dataJ2['1600']},
                {data: dataMap.dataJ3['1600']},
                {data: dataMap.dataJ4['1600']},
                {data: dataMap.dataT['1600']},
                {data: [
                    {name: '教一', value: dataMap.dataJ1['1600']},
                    {name: '教二', value: dataMap.dataJ2['1600']},
                    {name: '教三', value: dataMap.dataJ3['1600']},
                    {name: '教四', value: dataMap.dataJ4['1600']},
                    {name: '图书馆', value: dataMap.dataT['1600']}
                ]}
            ]
        },
        {
            title : {text: '18:00教学楼使用情况'},
            series : [
                {data: dataMap.dataJ1['1800']},
                {data: dataMap.dataJ2['1800']},
                {data: dataMap.dataJ3['1800']},
                {data: dataMap.dataJ4['1800']},
                {data: dataMap.dataT['1800']},
                {data: [
                    {name: '教一', value: dataMap.dataJ1['1800']},
                    {name: '教二', value: dataMap.dataJ2['1800']},
                    {name: '教三', value: dataMap.dataJ3['1800']},
                    {name: '教四', value: dataMap.dataJ4['1800']},
                    {name: '图书馆', value: dataMap.dataT['1800']}
                ]}
            ]
        },
        {
            title : {text: '20:00教学楼使用情况'},
            series : [
                {data: dataMap.dataJ1['2000']},
                {data: dataMap.dataJ2['2000']},
                {data: dataMap.dataJ3['2000']},
                {data: dataMap.dataJ4['2000']},
                {data: dataMap.dataT['2000']},
                {data: [
                    {name: '教一', value: dataMap.dataJ1['2000']},
                    {name: '教二', value: dataMap.dataJ2['2000']},
                    {name: '教三', value: dataMap.dataJ3['2000']},
                    {name: '教四', value: dataMap.dataJ4['2000']},
                    {name: '图书馆', value: dataMap.dataT['2000']}
                ]}
            ]
        },
        {
            title : {text: '22:00教学楼使用情况'},
            series : [
                {data: dataMap.dataJ1['2200']},
                {data: dataMap.dataJ2['2200']},
                {data: dataMap.dataJ3['2200']},
                {data: dataMap.dataJ4['2200']},
                {data: dataMap.dataT['2200']},
                {data: [
                    {name: '教一', value: dataMap.dataJ1['2200']},
                    {name: '教二', value: dataMap.dataJ2['2200']},
                    {name: '教三', value: dataMap.dataJ3['2200']},
                    {name: '教四', value: dataMap.dataJ4['2200']},
                    {name: '图书馆', value: dataMap.dataT['2200']}
                ]}
            ]
        }
    ]
};

climaxTime.setOption(option);
