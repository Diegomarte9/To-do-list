const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    // Crear elementos de la tarea
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    const taskLabel = document.createElement("label");
    taskLabel.textContent = taskText;

    // Crear un input de tipo date
    const taskDateInput = document.createElement("input");
    taskDateInput.type = "date";
    taskDateInput.className = "task-date";

    const buttonGroup = document.createElement("div");

    // Botón de completar
    const completeButton = document.createElement("button");
    completeButton.textContent = "Completar";
    completeButton.className = "complete-button";
    completeButton.addEventListener("click", function () {
        taskLabel.classList.toggle("completed");
    });

    // Botón para eliminar la tarea
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function () {
        taskItem.remove();
    });

    // Agregar elementos al grupo de botones
    buttonGroup.appendChild(completeButton);
    buttonGroup.appendChild(deleteButton);

    // Agregar los elementos al elemento de la tarea
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(taskDateInput);
    taskItem.appendChild(buttonGroup);

    // Agregar la tarea a la lista
    taskList.appendChild(taskItem);

    // Limpiar el campo de entrada
    taskInput.value = "";
});
