document.addEventListener('DOMContentLoaded', function () {
    var sortdefault = document.querySelector('.sorting');
    var dropdownContent = document.querySelector('.dropdown-content');
    let mainSortDOM = document.querySelector('.main-sort');

    sortdefault.addEventListener('click', function () {
        // Toggle the visibility of the dropdown content
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
        let onSortDOM = document.querySelector('input[name="price"]:checked');
        mainSortDOM.innerHTML = onSortDOM.value
    });
});
