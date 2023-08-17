const todoList = document.querySelector("#todo-list");
const template = document.querySelector("#task-template").content;
const fragment = document.createDocumentFragment();

// Mostrar las tareas en el DOM (paginadas)
export function displayTasks(tasks, start, end) {
  // Paginar las tareas
  for (let i = start; i < end; i++) {
    // clonar el template
    const clone = template.cloneNode(true);
    // extraer el contenido del template
    const task = tasks[i];
    // Si la tarea está completada, añadir la clase completed y marcar el checkbox como checked
    if (task.completed) {
      clone.querySelector("li").classList.add("completed");
      clone.querySelector("input").checked = true;
    }
    // Añadir el id a la tarea
    clone.querySelector("li").id = task.id;
    // Añadir el título de la tarea
    clone.querySelector("span").textContent = task.title;
    // Añadir el template clonado al fragmento
    fragment.appendChild(clone);
  }
  // Añadir el fragmento al DOM
  todoList.appendChild(fragment);
}
