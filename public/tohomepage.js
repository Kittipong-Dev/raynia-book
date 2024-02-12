window.transitionToPage = function (href) {
	document.querySelector('body').style.opacity = 0
	window.location.href = href
}

document.addEventListener('DOMContentLoaded', function (event) {
	document.querySelector('body').style.opacity = 1
})

var tohomepage = document.getElementById("tohomepage");
if (tohomepage) {
	tohomepage.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent the default link behavior
		window.transitionToPage('books');
	});
}

var backtoWelcome = document.getElementById("backtoWelcome");
if (backtoWelcome) {
	backtoWelcome.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent the default link behavior
		window.transitionToPage('books');
	});
}