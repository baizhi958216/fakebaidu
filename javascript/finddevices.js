$(document).ready(function(){$('.collapsible').collapsible()})
$('#findd').css({
    width:200
})

$('#findd a').on('click',(e)=>{
    console.log(e.currentTarget.text);
})