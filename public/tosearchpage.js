window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

var tosearch = document.getElementById("tosearch");
    		if(tosearch) {
      			tosearch.addEventListener("click", function (event) {
                    event.preventDefault(); // Prevent the default link behavior
    window.transitionToPage('search.html');
      			});
    		}

