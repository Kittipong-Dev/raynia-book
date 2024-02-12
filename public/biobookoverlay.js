var bookImg = document.getElementById("bookImg");
var bookOverlayContainer = document.getElementById("bookOverlayContainer");
var bookcontent = document.getElementById("bookcontent");

if (bookImg && bookOverlayContainer && bookcontent) {
    bookImg.addEventListener("click", function (e) {
        bookOverlayContainer.style.display = "flex";
    });

    // Handle the click on "Popup Next" inside the first popup
    var next = document.querySelector(".next");
    if (next) {
        next.addEventListener("click", function (e) {
            // Hide the first popup
            bookOverlayContainer.style.display = "none";

            // Show the second variant popup
            bookcontent.style.display = "flex";
        });
    }

    var back = document.querySelector(".back");
    if (back) {
        back.addEventListener("click", function (e) {
            // Hide the first popup
            bookOverlayContainer.style.display = "none";

            // Show the second variant popup
            bookcontent.style.display = "flex";
        });
    }

    var next1 = document.querySelector(".next1");
    if (next1) {
        next1.addEventListener("click", function (e) {
            // Hide the first popup
            bookcontent.style.display = "none";

            // Show the second variant popup
            bookOverlayContainer.style.display = "flex";
        });
    }

    var back1 = document.querySelector(".back1");
    if (back1) {
        back1.addEventListener("click", function (e) {
            // Hide the first popup
            bookcontent.style.display = "none";

            // Show the second variant popup
            bookOverlayContainer.style.display = "flex";
        });
    }

    // Handle the click outside the second popup to close it
    bookcontent.addEventListener("click", function (e) {
        if (e.target === bookcontent) {
            bookcontent.style.display = "none";
        }
    });
    bookOverlayContainer.addEventListener("click", function (e) {
        if (e.target === bookOverlayContainer) {
            bookOverlayContainer.style.display = "none";
        }
    });
}
