document.addEventListener('DOMContentLoaded', function () {
    var allgrade = document.getElementById('allgrade');
});
function switchimage(newImageSrc) {
    document.getElementById('allgrade').src = newImageSrc;
    if (newImageSrc == 'm.1on.svg') {
        document.getElementById('m.1').src = 'm.1on.svg';
        document.getElementById('m.2').src = 'm.2off.svg';
        document.getElementById('m.3').src = 'm.3off.svg';
        document.getElementById('m.4').src = 'm.4off.svg';
        document.getElementById('m.5').src = 'm.5off.svg';
        document.getElementById('m.6').src = 'm.6off.svg';
    } else if (newImageSrc == 'm.2on.svg') {
        document.getElementById('m.1').src = 'm.1off.svg';
        document.getElementById('m.2').src = 'm.2on.svg';
        document.getElementById('m.3').src = 'm.3off.svg';
        document.getElementById('m.4').src = 'm.4off.svg';
        document.getElementById('m.5').src = 'm.5off.svg';
        document.getElementById('m.6').src = 'm.6off.svg';
    } else if (newImageSrc == 'm.3on.svg') {
        document.getElementById('m.1').src = 'm.1off.svg';
        document.getElementById('m.2').src = 'm.2off.svg';
        document.getElementById('m.3').src = 'm.3on.svg';
        document.getElementById('m.4').src = 'm.4off.svg';
        document.getElementById('m.5').src = 'm.5off.svg';
        document.getElementById('m.6').src = 'm.6off.svg';
    } else if (newImageSrc == 'm.4on.svg') {
        document.getElementById('m.1').src = 'm.1off.svg';
        document.getElementById('m.2').src = 'm.2off.svg';
        document.getElementById('m.3').src = 'm.3off.svg';
        document.getElementById('m.4').src = 'm.4on.svg';
        document.getElementById('m.5').src = 'm.5off.svg';
        document.getElementById('m.6').src = 'm.6off.svg';
    } else if (newImageSrc == 'm.5on.svg') {
        document.getElementById('m.1').src = 'm.1off.svg';
        document.getElementById('m.2').src = 'm.2off.svg';
        document.getElementById('m.3').src = 'm.3off.svg';
        document.getElementById('m.4').src = 'm.4off.svg';
        document.getElementById('m.5').src = 'm.5on.svg';
        document.getElementById('m.6').src = 'm.6off.svg';
    } else if (newImageSrc == 'm.6on.svg') {
        document.getElementById('m.1').src = 'm.1off.svg';
        document.getElementById('m.2').src = 'm.2off.svg';
        document.getElementById('m.3').src = 'm.3off.svg';
        document.getElementById('m.4').src = 'm.4off.svg';
        document.getElementById('m.5').src = 'm.5off.svg';
        document.getElementById('m.6').src = 'm.6on.svg';
    } 
}