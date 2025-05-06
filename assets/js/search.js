const searchPage = document.getElementById("searchBar");
const closeSearchBar = document.getElementById("closeSearch");
const showSearch = document.getElementById("showSearch");

searchPage.addEventListener("click", () => {
  showSearch.classList.remove("translate-y-full");
  showSearch.classList.add("translate-y-0");
  document.body.style.overflow = "hidden";
});
closeSearchBar.addEventListener("click", () => {
  showSearch.classList.remove("translate-y-0");
  showSearch.classList.add("translate-y-full");
  document.body.style.overflow = "";
});
