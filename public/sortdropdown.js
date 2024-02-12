document.addEventListener('DOMContentLoaded', function () {
    var sortdefault = document.getElementById('sortdefault');
    var dropdownContent = document.querySelector('.dropdown-content');

    sortdefault.addEventListener('click', function () {
        // Toggle the visibility of the dropdown content
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });
});

function switchimage(newImageSrc) {
    document.getElementById('defaultmain').src = newImageSrc;
    if (this.src == 'sortlowmain.svg') {
        document.getElementById('low').src = 'sortlowon.svg';
        document.getElementById('high').src = 'sorthigh.svg';
        document.getElementById('default').src = 'sortdefault.svg';
    } else if (this.src == 'sorthighmain.svg') {
        document.getElementById('high').src = 'sorthighon.svg';
        document.getElementById('default').src = 'sortdefault.svg';
        document.getElementById('low').src = 'sortlow.svg';
    } else if (this.src == 'sortdefaultmain.svg') {
        document.getElementById('high').src = 'sorthigh.svg';
        document.getElementById('low').src = 'sortlow.svg';
        document.getElementById('default').src = 'sortdefaulton.svg';
    }
}