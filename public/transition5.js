window.transitionToPage = function (href) {
    document.querySelector('body').style.opacity = 0
    window.location.href = href
}

document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('body').style.opacity = 1
})

var createAnAccount = document.getElementById("createAnAccount");
if (createAnAccount) {
    createAnAccount.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        window.transitionToPage('signUp');
    });
}