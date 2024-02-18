let html = document.querySelector('html')
let defaultHtml = html.innerHTML
html.innerHTML = `
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet"  href="./raynia.css" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Karla:wght@500&display=swap" />
	<title>raynia</title>
</head>
<body>
	<div class="raynia">
		<div class="raynia1">Raynia</div>
		<img class="raynia-child" alt="" src="Vector 11.svg">
	</div>
</body>
`
setTimeout(() => {
    html.innerHTML = defaultHtml

    window.transitionToPage = function(href) {
        document.querySelector('body').style.opacity = 0
        window.location.href = href
    }
    
    document.addEventListener('DOMContentLoaded', function(event) {
        document.querySelector('body').style.opacity = 1
    })
    
    var continueAsGuest = document.getElementById("continueAsGuest");
    if(continueAsGuest) {
        continueAsGuest.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior
            window.transitionToPage('books');
        });
    }
    
    var continueSignIn = document.getElementById("continueSignIn");
    if(continueSignIn) {
        continueSignIn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        window.transitionToPage('signIn');
        });
    }
    
    
    var continueSignUp = document.getElementById("continueSignUp");
    if(continueSignUp) {
        continueSignUp.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        window.transitionToPage('signUp');
        });
    }
}, 500)