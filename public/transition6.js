window.transitionToPage = function (href) {
    document.querySelector('body').style.opacity = 0
    window.location.href = href
}

document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('body').style.opacity = 1
})

var signInText = document.getElementById("signInText");
if (signInText) {
    signInText.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        window.transitionToPage('signIn');
    });
}

let confirmDOM = document.getElementById('confirm')

if (confirmDOM !== undefined) {
    confirmDOM.addEventListener("click", function (event) {
        let emailDOM = document.getElementById('email')
        let usernameDOM = document.getElementById('username')
        let nameDOM = document.getElementById('name')
        let passwordDOM = document.getElementById('password')
        let confirmPasswordDOM = document.getElementById('confirmPassword')
        if (!passwordDOM.value || !emailDOM.value || !nameDOM.value || !usernameDOM.value || !confirmPasswordDOM.value || passwordDOM.value !== confirmPasswordDOM.value) {
            console.error('validate failed')
            return
        }
        fetch()
    })
}