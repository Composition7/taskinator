// Left off spot text to search:
// return actionContainerEl;
// https://courses.bootcampspot.com/courses/951/pages/4-dot-3-6-dynamically-create-buttons?module_item_id=330227

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskIDCounter = 0;

var taskFormHandler = function (event) {
	event.preventDefault();
	var taskNameInput = document.querySelector("input[name='task-name']").value;
	var taskTypeInput = document.querySelector(
		"select[name='task-type']"
	).value;

	// check if input values are empty strings
	if (!taskNameInput || !taskTypeInput) {
		alert("You need to fill out the task form!");
		return false;
	}

	formEl.reset();
	// package up data as an object
	var taskDataObj = {
		name: taskNameInput,
		type: taskTypeInput,
	};

	// send it as an argument to createTaskEl
	createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
	// create list item
	var listItemEl = document.createElement("li");
	listItemEl.className = "task-item";

	// add task id as a custom attribute
	listItemEl.setAttribute("data-task-id", taskIDCounter);

	// create div to hold task info and add to list item
	var taskInfoEl = document.createElement("div");
	taskInfoEl.className = "task-info";
	taskInfoEl.innerHTML =
		"<h3 class='task-name'>" +
		taskDataObj.name +
		"</h3><span class='task-type'>" +
		taskDataObj.type +
		"</span>";
	listItemEl.appendChild(taskInfoEl);

	// add entire list item to list
	tasksToDoEl.appendChild(listItemEl);

	// increment taskIDCounter for next unique ID
	taskIDCounter++;
};

// create action buttons for each task
var createTaskActions = function (taskID) {
	var actionContainerEl = document.createElement("div");
	actionContainerEl.className = "task-actions";
	return actionContainerEl;
};

// create edit button
var editButtonEl = document.createElement("button");
editButtonEl.textContent = "Edit";
editButtonEl.className = "btn edit-btn";
editButtonEl.setAttribute("data-task-id", taskID);

actionContainerEl.appendChild(editButtonEl);

// create delete button
var deleteButtonEl = document.createElement("button");
deleteButtonEl.textContent = "Delete";
deleteButtonEl.className = "btn delete-btn";
deleteButtonEl.setAttribute("data-task-id", taskID);

actionContainerEl.appendChild(deleteButtonEL);

formEl.addEventListener("submit", taskFormHandler);
