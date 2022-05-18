const find_devices = $('#devis')

$(getWindowSize())

let currdevic,deviceIs
$('.tab a').on('click', function () {
    $('.tab a').removeClass('active')
    $(this).toggleClass('active')
    deviceIs = $(this).text()
    fetch('/assets/overview/official.json')
    .then(res=>res.json())
    .then(json=>{
        $('.dlist')[0].innerHTML=''
        for (const key in json) {
            if(json[key].manufacturer==deviceIs){
                for (const infos in json[key].info) {
                    $('.dlist')[0].innerHTML+=`
                    <div><!==${json[key].info[infos].deviceName}--></div>
                    `
                }
            }
        }
    })
})
// 监听窗口resize,scroll,load操作，动态配置页面大小 记录浏览位置
$(window).on('resize', () => {
    getWindowSize()
})

function getWindowSize() {
    find_devices.css({
        'width': $(window).width() + 'px',
        'height': $(window).height()-108 + 'px'
    })
}