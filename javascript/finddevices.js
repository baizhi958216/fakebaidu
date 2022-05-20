const find_devices = $('#devis')

getWindowSize()
fetch('/assets/overview/official.json')
    .then(res => res.json())
    .then(json => {
        for (const infos in json[0].info) {
            $('.dlist').append(`
                <div class="device_card" devcod="${json[0].info[infos].codeName}">
                    <div class="devicepic" style="background-image:url(/assets/devicepic/${json[0].info[infos].codeName}.jpg);"></div>
                    <div>${json[0].info[infos].deviceName}</div>
                    <div>made by ${json[0].manufacturer}</div>
                    <div>codename: <span>${json[0].info[infos].codeName}</span></div>
                    <div class="dlLatest">DOWNLOAD LATEST VERSION</div>
                </div>
                ` )
        }
        $('.device_card').on('click', function () {
            let devcod = $(this).attr('devcod')
            $('.detail').slideDown()
            $('.detail')[0].innerHTML = `
                <div class="dttitle">${devcod}</div>
                <div class="dtdownload"></div>
                <p>LineageOS</p>
            `
        })
    })
let currdevic, deviceIs
$('.tab a').on('click', function () {
    $('.tab a').removeClass('active')
    $(this).toggleClass('active')
    $('.detail').hide()
    deviceIs = $(this).text()
    fetch('/assets/overview/official.json')
        .then(res => res.json())
        .then(json => {
            createCards(json)
        })
})

function createCards(json) {
    $('.dlist')[0].innerHTML = ''
    for (const key in json) {
        if (json[key].manufacturer == deviceIs) {
            for (const infos in json[key].info) {
                $('.dlist').append(`
                    <div class="device_card" devcod="${json[key].info[infos].codeName}">
                        <div class="devicepic" style="background-image:url(/assets/devicepic/${json[key].info[infos].codeName}.jpg);"></div>
                        <div>${json[key].info[infos].deviceName}</div>
                        <div>made by ${json[key].manufacturer}</div>
                        <div>codename: <span>${json[key].info[infos].codeName}</span></div>
                        <div class="dlLatest">DOWNLOAD LATEST VERSION</div>
                    </div>
                    ` )
            }
            $('.device_card').on('click', function () {
                let devcod = $(this).attr('devcod')
                $('.detail').slideDown()
                $('.detail')[0].innerHTML = `
                    <div class="dttitle">${devcod}</div>
                    <div class="dtdownload" onclick></div>
                    <p>LineageOS</p>
            `
            })
        }
    }
}

// 监听窗口resize,scroll,load操作，动态配置页面大小 记录浏览位置
$(window).on('resize', () => {
    getWindowSize()
})

function getWindowSize() {
    find_devices.css({
        'width': $(window).width() + 'px',
        'height': $(window).height() - 108 + 'px'
    })
}