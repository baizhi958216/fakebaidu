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

// 获取更新日志
let histroyList = [
    'v0.0.1preview',
    'v0.0.2preview',
    'v0.0.3preview',
    'v0.0.4preview',
    'Side!oadBlog'
]

for (fileList = histroyList.length - 1; fileList >= 0; fileList--) {
    fetch(`/assets/blogs/${histroyList[fileList]}.md`)
        .then(response => {
            if(response.ok){
                return response.blob()
            }else{
                throw new Error('没交电费')
            }
        })
        .then(blob => blob.text())
        .then(markdown => {
            mdWriter[0].innerHTML += marked.parse(markdown)
        }).catch(err => console.log(err))
}

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