const myMain = $('#myMain')

$(getWindowSize())

const data3 = $('#data-3'), data4 = $('#data-4'), data6 = $('#data-6'), footer = $('#footer')

// 配置页脚样式
footer.css({
  height: $(document).height() - (data6.offset().top + data6.height()),
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
})
footer.find('a').css({
  textDecoration: 'none',
  color: 'white',
  background: 'rgba(14, 168, 102, 0.651)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '20px',
  width: '130px',
  padding: '5px',
  borderRadius: '15px'
})
$('#footer .r').css({
  width: '200px',
  display: 'flex',
  justifyContent: 'space-around',
})
$('#footer .r svg').css({
  cursor: 'pointer'
})

// 监听滚动事件
let rotation = 0
let scrollLoc = $(document).scrollTop()
$(window).scroll(() => {
  let newLoc = $(document).scrollTop()
  let diff = (scrollLoc - newLoc) / 3
  rotation += diff, scrollLoc = newLoc
  let rotationStr = "rotate(" + rotation + "deg)"
  // 顶栏toggle效果
  $(document).scrollTop().toFixed() > 603 ? $('#banner').animate({ height: 'hide' }) : $('#banner').animate({ height: 'show' }, 'fast')
  // data3文字放大/渐入渐出效果
  data3.find('p,a,img').css({
    opacity: Number(1 - (($(document).scrollTop() * 0.002).toFixed(1))).toFixed(1),
  })
  $(document).scrollTop().toFixed() < data3.height() / 3 ?
    data3.find('p:first').css({
      'font-size': $(document).scrollTop() * 0.05 + 35
    }) : {}
  // Longevity图片旋转效果
  data4.find('img').css({
    "-webkit-transform": rotationStr,
    "-moz-transform": rotationStr,
    "transform": rotationStr
  })
  // 轮播图渐入效果
  $('.swiper').css({ opacity: (1 - ((data3.height() * 2.5 - $(document).scrollTop()) * 0.0010) + 0.3).toFixed(2) })

})

// 轮播图组件
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  autoplay: true,
  autoplay: {
    delay: 1000
  },
  coverflowEffect: {
    rotate: 10,
    stretch: 20,
    depth: 200,
    modifier: 2,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
})

// 监听窗口resize,scroll,load操作，动态配置页面大小 记录浏览位置
$(window).on('resize',()=>{
  getWindowSize()
}).on('scroll',()=>{
  localStorage.setItem('offsetTop',$(window).scrollTop())
}).on('load',()=>{
  $(document).scrollTop(localStorage.getItem('offsetTop'))
})

function getWindowSize() {
  myMain.css({
    'width': $(window).width() + 'px',
    'height': $(window).height() * 3 + 'px'
  })
}
