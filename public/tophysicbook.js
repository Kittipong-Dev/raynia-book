window.transitionToPage = function (href) {
    document.querySelector('body').style.opacity = 0
    window.location.href = href
}

document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('body').style.opacity = 1
})

var bookEx2Container = document.getElementById("bookEx2Container");
if (bookEx2Container) {
    bookEx2Container.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        window.transitionToPage('physicbook.html');
    });
}
var bookEx2Container3 = document.getElementById("bookEx2Container3");
if (bookEx2Container3) {
    bookEx2Container3.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        window.transitionToPage('physicbook.html');
    });
}