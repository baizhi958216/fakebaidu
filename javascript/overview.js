const vieww = $('#vieww')

$(getWindowSize())


vieww.append(`
<div id="main" style="width:1000px;height:400px;margin:0 auto;top:60px"></div>
`)

// 网站部署日期
const webSetup = '01 May 2022 10:00:00 UTC +8'
function upperTime(time) {
    var nowTime = +new Date();
    var inputTime = +new Date(time);
    var theD = nowTime - inputTime;
    var times = theD / 1000;
    var d, h, m, s;
    d = parseInt(times / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    h = parseInt(times / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    return d + '天' + h + '时' + m + '分' + s + '秒';
}
setInterval(() => {
    $('#liveTime')[0].innerHTML = `${upperTime('01 May 2022 10:00:00 UTC +8')}`
}, 100)

// 网站状态
$('span#whtml').on('click', (e) => {
    window.location.href = `/${e.target.innerHTML}.html`;
})
$('span#webStatus').append('√')

// 设备状态
let deviceArr;
fetch('/assets/overview/official.json')
.then(res=>res.json())
.then(json=>{
    for (const key in json) {
        $('.deviceL')[0].innerHTML+=`
        <div class="commsctions"><span style="cursor: pointer;">${json[key].info[0].codeName}</span><span>${json[key].info[0].status}</span></div>
        `
    }
})

let myChart = echarts.init(document.getElementById('main'));
// 配置数据
let option = {
    title: {
        text: '装机量 统计至当前月份'
    },
    tooltip: {},
    legend: {
        data: ['装机量']
    },
    xAxis: {
        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        axisLine: {
            symbol: ['none', 'arrow'],
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
    },
    series: [
        {
            type: 'line',
            data: [200, 212, 260, 240, 200],
            label: {
                show: true,
            }
        },

    ]
}

// 实现图表。
myChart.setOption(option)

// 监听窗口resize操作
$(window).on('resize', () => {
    getWindowSize()
    myChart.resize()
})
function getWindowSize() {
    vieww.css({
        'width': $(window).width() + 'px',
        'height': $(window).height() + 'px'
    })
}