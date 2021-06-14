$(function() {
    $("#showpswd").on("mouseover", function() {
        $("#pass").prop("type", "text");
    });
    $("#showpswd").on("mouseout", function() {
        $("#pass").prop("type", "password");
    });
});