const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

// JS는 클래스 추가 제거 하는 역할
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused"); // 클래스 추가
  searchInputEl.setAttribute("placeholder", "통합검색"); // 속성 추가 함수 - 속성, 속성값
});

searchInputEl.addEventListener("blur", function () {
  // blur: 포커스가 해제됐을 때
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});
