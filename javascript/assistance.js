const myBlog = $('#assistance')
const mdWriter = $('#assiss')

$(getWindowSize())

fetch(`/assets/assistance/assistance.md`)
    .then(response => {
        if(response.ok){
            return response.blob()
        }else{
            throw new Error('没交电费')
        }
    })
    .then(blob => blob.text())
    .then(markdown => {
        mdWriter.append(`${marked.parse(markdown)}`)
    }).catch(err => console.log(err))

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