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
        createCards(json)
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

function createCards(json){
    $('.dlist')[0].innerHTML=''
        for (const key in json) {
            if(json[key].manufacturer==deviceIs){
                for (const infos in json[key].info) {
                    $('.dlist')[0].innerHTML+=`
                    <div id="device_card">
                        <div id="devicepic" style="background-image:url(/assets/devicepic/${json[key].info[infos].codeName}.jpg);"></div>
                        <div>${json[key].info[infos].deviceName}</div>
                        <div>made by ${json[key].manufacturer}</div>
                        <div>codename: <span>${json[key].info[infos].codeName}</span></div>
                        <div id="dlLatest" dvs="${json[key].info[infos].codeName}"">DOWNLOAD LATEST VERSION</div>
                    </div>
                    ` 
                }
            } 
        }
        $('#dlLatest').on('click',function(){
            console.log($(this)[0].getAttribute('dvs'));
        }) 
}