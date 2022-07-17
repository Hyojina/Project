const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//let으로 선언하여, local storage에 있는 값을 덮어쓰지 않도록 한다.
let toDos = [];

function saveToDos() {
  //local storage안에 todo를 넣고싶지만, 텍스트로 넣지 않고 배열로 넣고싶다면!
  //JSON.stringify(~) : ~가 objects나 array나 어떤 js 코드던간에 string으로 만들어 줌
  //하지만 이것 역시 단순한 string일 뿐, 살아있는 array로 만들려면 JSON.parse(JSON.stringify(~)) 해야함
  //이는 자바스크립트에서 사용하기 위함
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== li.id);
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;

  const button = document.createElement("button");
  button.innerText = "✔";

  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  //text를 push하는 게 아니라 id를 함께 주어 object로 만들고 싶다.
  // Date 값을 아이디로 주기!
  const newToDoObj = {
    text: newToDo,
    id: String(Date.now()),
  };

  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

//만약 savedToDos가 localStorage에 존재하면? (화면 켰을때 저장된 to do 리스트 뿌리기)
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //한개씩 넣는것이 아니기 때문에 push할 수 없다..

  //forEach는 배열마다 실행되며, 각각의 item을 주며, item은 object이다.
  parsedToDos.forEach(paintToDo);
}
