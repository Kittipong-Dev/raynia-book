document.addEventListener('DOMContentLoaded', function () {
    var filtericon = document.getElementById('filtericon');
    var filterdefault = document.querySelector('.filterdefault');

    filtericon.addEventListener('click', function () {
      // Toggle the visibility of the popup
      filterdefault.style.display = (filterdefault.style.display === 'block') ? 'none' : 'block';
    });

    // Handle the click on "Exit" inside the popup
    var discardIcon = document.querySelector('.discard-icon');
    if (discardIcon) {
      discardIcon.addEventListener('click', function () {
        // Hide the popup
        filterdefault.style.display = 'none';
      });
    }
  });