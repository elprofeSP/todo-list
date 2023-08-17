import { addTask } from "./services/addTask";
import { completeTask } from "./services/completeTask";
import { deleteTask } from "./services/deleteTask";
import { getTasks } from "./services/getTasks";
import { updateStatics } from "./services/updateStatics";

// Delegación de eventos

// Evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  getTasks("https://jsonplaceholder.typicode.com/todos", 0, 4);
});

// Evento submit
document.addEventListener("submit", (e) => {
  // Prevenir el comportamiento por defecto del formulario
  e.preventDefault();
  // Añadir una tarea
  if (e.target.matches(".todo-form")) {
    // Obtener el input
    const input = e.target.task;
    // Si el input no está vacío, añadir la tarea (con el id y el valor del input)
    if (input.value.trim().length !== 0) {
      addTask(input.value.trim());
    }
  }
});

// Evento click
document.addEventListener("click", (e) => {
  // Eliminar una tarea
  if (e.target.matches(".btn-delete")) {
    // Obtener el id de la tarea a eliminar (el id está en el elemento padre del botón)
    const id = e.target.parentElement.id;
    // Eliminar la tarea
    deleteTask(id);
    // Actualizar las estadísticas
    updateStatics();
  }
  // Marcar una tarea como completada
  if (e.target.matches('input[type="checkbox"]')) {
    // Obtener el id del papa (el li)
    const id = e.target.parentElement.parentElement.id;
    // Marcar la tarea como completada
    completeTask(id, e.target.checked);
    // Actualizar las estadísticas
    updateStatics();
  }
});
