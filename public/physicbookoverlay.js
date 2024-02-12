var bookImg = document.getElementById("bookImg");
var bookOverlay3 = document.getElementById("bookOverlay3");
var bookcontent = document.getElementById("bookcontent");
var codeInfoIcon = document.getElementById("codeInfoIcon");
var TDP = document.getElementById("TDP");

if (bookImg && bookOverlay3 && bookcontent) {
    bookImg.addEventListener("click", function (e) {
        bookOverlay3.style.display = "flex";
    });

if (codeInfoIcon && TDP) {  
    codeInfoIcon.addEventListener("click", function (e) {
        TDP.style.display = "flex";
    });
}
    // Handle the click on "Popup Next" inside the first popup
    var next = document.querySelector(".next");
    if (next) {
        next.addEventListener("click", function (e) {
            // Hide the first popup
            bookOverlay3.style.display = "none";

            // Show the second variant popup
            bookcontent.style.display = "flex";
        });
    }

    var back = document.querySelector(".back");
    if (back) {
        back.addEventListener("click", function (e) {
            // Hide the first popup
            bookOverlay3.style.display = "none";

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
            bookOverlay3.style.display = "flex";
        });
    }

    var back1 = document.querySelector(".back1");
    if (back1) {
        back1.addEventListener("click", function (e) {
            // Hide the first popup
            bookcontent.style.display = "none";

            // Show the second variant popup
            bookOverlay3.style.display = "flex";
        });
    }

    // Handle the click outside the second popup to close it
    bookcontent.addEventListener("click", function (e) {
        if (e.target === bookcontent) {
            bookcontent.style.display = "none";
        }
    });
    bookOverlay3.addEventListener("click", function (e) {
        if (e.target === bookOverlay3) {
            bookOverlay3.style.display = "none";
        }
    });
    TDP.addEventListener("click", function (e) {
        if (e.target === TDP) {
            TDP.style.display = "none";
        }
    });
}
