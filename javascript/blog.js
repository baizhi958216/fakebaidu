const myBlog = $('#blog')
const mdWriter = $('#markWriter')

$(getWindowSize())

mdWriter.css({
  position: 'absolute',
  left: '50%',
  top: '15%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

// 获取日志
fetch('/assets/blogs/Side!oadBlog.md').then(response => response.blob()).then(blob => blob.text()).then(markdown => { mdWriter[0].innerHTML = marked.parse(markdown); })

// 监听窗口resize操作
$(window).on('resize', () => {
  getWindowSize()
})
function getWindowSize() {
  myBlog.css({
    'width': $(window).width() + 'px',
    'height': $(window).height() + 'px'
  })
}