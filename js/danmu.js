function $(str) {
    return document.getElementById(str);
}

function enterKey() {
    e = window.event.keyCode;
    if (e == 13) {
        send();
    }
}

function send() {
    var word = $('txt').value;
    var p = document.createElement('p');
    var top = parseInt(Math.random() * 500) - 20;
    var color1 = parseInt(Math.random() * 256);
    var color2 = parseInt(Math.random() * 256);
    var color3 = parseInt(Math.random() * 256);
    var color4 = parseInt(Math.random() * 256);
    var color = "rgba(" + color1 + "," + color2 + "," + color3 + "," + color4 + ")";
    top = top < 0 ? 0 : top;
    p.style.position = 'relative';
    p.style.top = top + "px";
    p.style.color = color;
    p.style.left = '500px';
    p.style.whiteSpace = 'nowrap';
    var nub = (Math.random() * 10) + 10;
    p.setAttribute('speed', nub);
    p.speed = nub;
    p.innerHTML = word;
    $('runBox').appendChild(p);
    $('txt').value = "";
}
setInterval(move, 200);


function move() {
    var pArray = $('runBox').children;
    for (var i = 0; i < pArray.length; i++) {
        pArray[i].style.left =
            parseInt(pArray[i].style.left) - pArray[i].speed + 'px';
    }
}