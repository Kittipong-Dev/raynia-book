var filtericon = document.getElementById("filtericon");
var filteroverlaypage = document.getElementById("filteroverlaypage");
var exit = document.getElementById("exit");
var confirm1 = document.getElementById("confirm1");

if (filtericon && filteroverlaypage ) {
  filtericon.addEventListener("click", function (e) {
      filteroverlaypage.style.display = "flex";
  });
if (filteroverlaypage && exit) {
    exit.addEventListener("click", function (e) {
        filteroverlaypage.style.display = "none";
    });
if (filteroverlaypage && confirm1) {
      confirm1.addEventListener("click", function (e) {
          filteroverlaypage.style.display = "none";
    });
  }
}
filteroverlaypage.addEventListener("click", function (e) {
  if (e.target === filteroverlaypage) {
      filteroverlaypage.style.display = "none";

  }
});
}