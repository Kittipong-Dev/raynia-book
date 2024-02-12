window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

var ToProfile = document.getElementById("ToProfile");
    		if(ToProfile) {
      			ToProfile.addEventListener("click", function (event) {
                    event.preventDefault(); // Prevent the default link behavior
    window.transitionToPage('profile.html');
      			});
    		}
var touser = document.getElementById("touser");
    		if(touser) {
      			touser.addEventListener("click", function (event) {
                    event.preventDefault(); // Prevent the default link behavior
    window.transitionToPage('profile.html');
      			});
    		}