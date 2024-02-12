window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    window.location.href = href
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

var bookEx1Container = document.getElementById("bookEx1Container");
    		if(bookEx1Container) {
      			bookEx1Container.addEventListener("click", function (event) {
                    event.preventDefault(); // Prevent the default link behavior
    window.transitionToPage('biobook.html');
      			});
    		}
var bookEx1Container1 = document.getElementById("bookEx1Container1");
    		if(bookEx1Container1) {
      			bookEx1Container1.addEventListener("click", function (event) {
                    event.preventDefault(); // Prevent the default link behavior
    window.transitionToPage('biobook.html');
      			});
    		}
var bookEx1Container2 = document.getElementById("bookEx1Container2");
    		if(bookEx1Container2) {
      			bookEx1Container2.addEventListener("click", function (event) {
                    event.preventDefault(); // Prevent the default link behavior
    window.transitionToPage('biobook.html');
      			});
    		}
var bookEx1Container3 = document.getElementById("bookEx1Container3");
    		if(bookEx1Container3) {
      			bookEx1Container3.addEventListener("click", function (event) {
                    event.preventDefault(); // Prevent the default link behavior
    window.transitionToPage('biobook.html');
      			});
    		}