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

    // Handle the click outside the second popup to close it
    bookcontent.addEventListener("click", function (e) {
        if (e.target === bookcontent) {
            bookcontent.style.display = "none";
        }
    });
}
