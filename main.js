
setTimeout(function () {
    $("#overlay").fadeOut();
}, 1900);
$(document).ready(function () {
    $(".styleCssLink").click(function () {
        window.location = "style.css";
    });
    $(".mainIndexLink").click(function () {
        window.location = "example.html";
    });
});
