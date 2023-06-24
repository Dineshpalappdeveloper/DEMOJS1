let addNewTaskPopButton = document.getElementsByClassName("rightHeader");
let parentMain = document.getElementsByClassName("parentMain");
let parentMain2 = document.getElementsByClassName("parentMain2");
let addTaskFromDetailsButton = document.getElementsByClassName("addSymbol2");
let todoDetailsPageBack = document.getElementsByClassName(
  "todoDetailsPageBack"
);
let SecondPageBox = document.getElementById("cardSpecification");
let parent = document.getElementsByClassName("parent");
let body = document.getElementsByTagName("body");
let header = document.getElementsByTagName("header");
let taskPopUp = document.getElementsByClassName("taskPopUp");
let taskPopUp2 = document.getElementsByClassName("taskPopUp2");
let taskClose = document.getElementById("taskClose");
let subTaskClose = document.getElementById("taskClose2");
let addTaskButton = document.getElementById("taskAdd");
let addSubTaskButton = document.getElementById("taskAdd2");
let addTaskInput = document.getElementById("taskInput");
let addSubTaskInput = document.getElementById("taskInput2");
let headingAddNewTaskPop = document.getElementsByClassName(
  "headingAddNewTaskPop"
);
let newTaskParent = document.getElementsByClassName("cardContainer");
let noItemInToDoList = document.getElementsByClassName("noItemInToDoList");
let subTaskRuning = false;

var token;

// code start

addNewTaskPopButton[0].addEventListener("click", () => {
  openTaskPopUp();
});
addTaskFromDetailsButton[0].addEventListener("click", () => {
  addTaskFromDetails();
});

taskClose.addEventListener("click", () => {
  closeTaskPopUp();
});
addTaskButton.addEventListener("click", () => {
  addNewTask();
  closeTaskPopUp();
});

function SwitchToSingleCard() {
  parentMain[0].classList.add("hide");
  parentMain2[0].classList.remove("hide");
  parentMain2[0].classList.remove("parentBlur");
  parentMain[0].setAttribute("style", " display: none");
  parentMain2[0].setAttribute("style", " display: block");
}

function SwitchToAllCard() {
  parentMain[0].classList.remove("hide");
  parentMain2[0].classList.add("hide");
  parentMain[0].setAttribute("style", " display: block");
  parentMain2[0].setAttribute("style", " display: none");
}

function openTODOTaskPage(taskContainer1, headingS) {
  let specialHeading = document.getElementsByClassName("heading2");
  specialHeading[0].innerHTML = headingS.innerHTML;
  SecondPageBox.appendChild(taskContainer1);
  SwitchToSingleCard();
  console.log("openDetailsPage");
  todoDetailsPageBack[0].addEventListener("click", () => {
    newTaskParent[0].appendChild(taskContainer1);
    SwitchToAllCard();
  });
}

function addTaskFromDetails() {
  openTaskPopUp();
  parentMain2[0].classList.add("parentBlur");
  parentMain2[0].setAttribute("style", " display: block");
  parentMain2[0].classList.remove("hide");
  // closeTODOTaskPage();
}

function openTaskPopUp() {
  parentMain[0].classList.add("parentBlur");
  taskPopUp[0].setAttribute("style", " display: block");
  parent[0].setAttribute("style", "background-color: rgb(53, 54, 51)");
  body[0].setAttribute("style", "background-color: rgb(53, 54, 51)");
  console.log("open");
  // closeTODOTaskPage();
}
function closeTaskPopUp() {
  parentMain[0].setAttribute("style", " display: block");
  parentMain[0].classList.remove("parentBlur");
  header[0].setAttribute("style", " display: flex");
  taskPopUp[0].setAttribute("style", " display: none");
  parent[0].setAttribute("style", "background-color: rgb(53, 54, 51)");
  body[0].setAttribute("style", "background-color: rgb(53, 54, 51)");
  console.log("close");
  addTaskInput.innerHTML = "";
  // closeTODOTaskPage();
}

// Sub task popUp

function openSubTaskPopUp() {
  taskPopUp2[0].setAttribute("style", " display: block");
  parent[0].setAttribute("style", " background-color: rgb(53, 54, 51)");
  body[0].setAttribute("style", " background-color: rgb(53, 54, 51)");
  console.log("openSubtask");
}
function closeSubTaskPopUp() {
  parentMain[0].setAttribute("style", " display: block");
  parentMain[0].classList.remove("parentBlur");
  header[0].setAttribute("style", " display: flex");
  taskPopUp2[0].setAttribute("style", " display: none");
  parent[0].setAttribute("style", " background-color: rgb(53, 54, 51)");
  body[0].setAttribute("style", " background-color: rgb(53, 54, 51)");
  console.log("closeSubTask");
  addSubTaskInput.innerHTML = "";
}

let taskCount = 0;
function addNewTask() {
  // creating element
  var taskContainer = document.createElement("div");
  var taskHeading = document.createElement("div");
  var hr = document.createElement("hr");
  var subTaskContainer = document.createElement("div");
  var removeTaskContainer = document.createElement("div");
  var removeTaskImage = document.createElement("img");
  var addSubTaskImage = document.createElement("img");
  // appending element
  newTaskParent[0].appendChild(taskContainer);
  taskContainer.appendChild(taskHeading);
  taskContainer.appendChild(hr);
  taskContainer.appendChild(subTaskContainer);
  taskContainer.appendChild(removeTaskContainer);
  removeTaskContainer.appendChild(removeTaskImage);
  removeTaskContainer.appendChild(addSubTaskImage);

  // styleing element

  taskContainer.classList.add("taskContainer");

  subTaskContainer.id = `id${taskCount}`;

  taskHeading.classList.add("taskHeading");
  subTaskContainer.classList.add("subTaskContainer");

  removeTaskContainer.classList.add("removeTaskContainer");
  removeTaskImage.classList.add("removeTaskImage");
  addSubTaskImage.classList.add("addSubTaskImage");

  taskHeading.innerHTML = addTaskInput.value;
  removeTaskImage.src = "./trash.png";
  addSubTaskImage.src = "./edit.png";

  closeTaskPopUp();

  // task Datails

  taskHeading.addEventListener("click", () => {
    openTODOTaskPage(taskContainer, taskHeading);
  });

  // removeTodoTask
  removeTaskImage.addEventListener("click", () => {
    taskContainer.remove();
    taskCount--;
    if (taskCount > 0) {
      noItemInToDoList[0].setAttribute("style", " display: none");
    } else {
      noItemInToDoList[0].setAttribute("style", " display: block");
    }
    // Noitem();
  });

  // AddTodoSubTask

  addSubTaskImage.addEventListener("click", () => {
    openSubTaskPopUp();
    token = subTaskContainer.id;
  });

  subTaskClose.addEventListener("click", () => {
    closeSubTaskPopUp();
  });

  taskCount++;
  Noitem();
}

addSubTaskButton.addEventListener("click", () => {
  AddTodoSubTask(token);
  closeSubTaskPopUp();
  console.log("subTask Created");
});

// testing
function AddTodoSubTask(uniqe) {
  // console.log(uniqe)
  var uniqeId = document.getElementById(uniqe);

  // createing element
  var subtaskParent = document.createElement("div");
  var subTaskTitle = document.createElement("span");
  var subTaskMarker = document.createElement("button");

  uniqeId.appendChild(subtaskParent);

  subtaskParent.appendChild(subTaskTitle);
  subtaskParent.appendChild(subTaskMarker);

  subtaskParent.classList.add("subtaskParent");
  subTaskTitle.classList.add("subTaskTitle");
  subTaskMarker.classList.add("subTaskMarker");
  subTaskTitle.innerHTML = addSubTaskInput.value;
  subTaskMarker.innerHTML = "Done";
  closeSubTaskPopUp();
  // marker codeing
  var marker = true;
  subTaskMarker.addEventListener("click", () => {
    if (marker) {
      subTaskTitle.classList.add("marked");
      subTaskMarker.setAttribute("style", "display:none");
      subTaskTitle.setAttribute("style", "color:red");
      console.log("marked");
      marker = false;
    } else {
      console.log("unmarked");
      marker = true;
    }
  });
  subTaskTitle.addEventListener("click", () => {
    if (!marker) {
      subTaskMarker.setAttribute("style", "display:flex");
      subTaskTitle.setAttribute("style", "color:black");
      subTaskTitle.classList.remove("marked");
      console.log("click by undone");
      marker = false;
    }
  });
}

// testing
// hide no item text
function Noitem() {
  if (taskCount >= 0) {
    noItemInToDoList[0].setAttribute("style", " display: none");
  } else {
    noItemInToDoList[0].setAttribute("style", " display: block");
  }
}
