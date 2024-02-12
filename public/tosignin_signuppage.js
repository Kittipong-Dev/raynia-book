window.transitionToPage = function (href) {
    document.querySelector('body').style.opacity = 0
    window.location.href = href
}

document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('body').style.opacity = 1
})

var Tosignin_signup = document.getElementById("Tosignin_signup");
if (Tosignin_signup) {
    Tosignin_signup.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        window.transitionToPage('account');
    });
}
var touser = document.getElementById("touser");
if (touser) {
    touser.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        window.transitionToPage('account');
    });
}