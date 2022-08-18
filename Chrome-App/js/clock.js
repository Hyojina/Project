const clock = document.querySelector("h2#clock");
const today = document.getElementById("today");

function getClock() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  //${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일
  clock.innerText = `${hours} : ${minutes}`;
  today.innerText = `${date.getFullYear()} / ${
    date.getMonth() + 1
  } / ${date.getDate()}`;
}

getClock(); //이걸 써주면 1초를 안기다려도 처음에 보여줌!!
setInterval(getClock, 1000);
