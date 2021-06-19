$(function() {
    $("#showpswd").on("mouseover", function() {
        $("#pass").prop("type", "text");
    });
    $("#showpswd").on("mouseout", function() {
        $("#pass").prop("type", "password");
    });
});

function joinOk() {
    var userId;
    var mailId;
    var paswId;
    userId = document.getElementById('user_login');
    mailId = document.getElementById('user_email');
    paswId = document.getElementById('pass');
    if (userId.value === "") {
        alert("用户名为空，请重新输入");
        return 0;
    } else if (mailId.value === "") {
        alert("邮箱为空，请重新输入");
        return 0;
    } else if (paswId.value === "") {
        alert("密码为空，请重新输入");
        return 0;
    } else {
        alert("注册成功！您的账号为:" + userId.value);
        var arr = new Array("scs", "go");
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.display = "block";
        }
        var arr1 = new Array("back", "formgroup");
        for (var i = 0; i < arr1.length; i++) {
            document.getElementById(arr1[i]).style.display = "none";
        }
        document.getElementById('scs').style.textAlign = "center";
        var h2 = document.getElementById('done');
        h2.innerHTML += "成功";
    }
}

function enterMain() {
    var userId;
    var paswId;
    userId = document.getElementById('account');
    paswId = document.getElementById('pass');
    if (userId.value === "") {
        alert("用户名为空，请重新输入");
        return 0;
    } else if (paswId.value === "") {
        alert("密码为空，请重新输入");
        return 0;
    } else { location = 'chat.html' }
}