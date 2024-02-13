document.addEventListener('DOMContentLoaded', function () {
    var allscore = document.getElementById('allscore');
});
function switchimage(newImageSrc) {
    document.getElementById('allscore').src = newImageSrc;
    if (newImageSrc == '0on.svg') {
        document.getElementById('0').src = '0on.svg';
        document.getElementById('1').src = '1off.svg';
        document.getElementById('2').src = '2off.svg';
        document.getElementById('3').src = '3off.svg';
        document.getElementById('4').src = '4off.svg';
        document.getElementById('5').src = '5off.svg';
    } else if (newImageSrc == '1on.svg') {
        document.getElementById('0').src = '0off.svg';
        document.getElementById('1').src = '1on.svg';
        document.getElementById('2').src = '2off.svg';
        document.getElementById('3').src = '3off.svg';
        document.getElementById('4').src = '4off.svg';
        document.getElementById('5').src = '5off.svg';
    } else if (newImageSrc == '2on.svg') {
        document.getElementById('0').src = '0off.svg';
        document.getElementById('1').src = '1off.svg';
        document.getElementById('2').src = '2on.svg';
        document.getElementById('3').src = '3off.svg';
        document.getElementById('4').src = '4off.svg';
        document.getElementById('5').src = '5off.svg';
    } else if (newImageSrc == '3on.svg') {
        document.getElementById('0').src = '0off.svg';
        document.getElementById('1').src = '1off.svg';
        document.getElementById('2').src = '2off.svg';
        document.getElementById('3').src = '3on.svg';
        document.getElementById('4').src = '4off.svg';
        document.getElementById('5').src = '5off.svg';
    } else if (newImageSrc == '4on.svg') {
        document.getElementById('0').src = '0off.svg';
        document.getElementById('1').src = '1off.svg';
        document.getElementById('2').src = '2off.svg';
        document.getElementById('3').src = '3off.svg';
        document.getElementById('4').src = '4on.svg';
        document.getElementById('5').src = '5off.svg';
    } else if (newImageSrc == '5on.svg') {
        document.getElementById('0').src = '0off.svg';
        document.getElementById('1').src = '1off.svg';
        document.getElementById('2').src = '2off.svg';
        document.getElementById('3').src = '3off.svg';
        document.getElementById('4').src = '4off.svg';
        document.getElementById('5').src = '5on.svg';
    } 
}