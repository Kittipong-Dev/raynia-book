var information = document.getElementById("information");
var infoContainer = document.getElementById("infoContainer");
var infoContainer1 = document.getElementById("infoContainer1");

if (information && infoContainer && infoContainer1) {
    information.addEventListener("click", function (e) {
        infoContainer.style.display = "flex";
    });

    // Handle the click on "Popup Next" inside the first popup
    var popupNext = document.querySelector(".popupnext");
    if (popupNext) {
        popupNext.addEventListener("click", function (e) {
            // Hide the first popup
            infoContainer.style.display = "none";

            // Show the second variant popup
            infoContainer1.style.display = "flex";
        });
    }

    // Handle the click outside the second popup to close it
    infoContainer1.addEventListener("click", function (e) {
        if (e.target === infoContainer1) {
            infoContainer1.style.display = "none";
        }
    });
}
