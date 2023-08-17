import { updateStatics } from "./updateStatics";

export function completeTask(id, checked) {
  // Seleccionar la tarea a completar
  const taskToComplete = document.getElementById(id);
  if (checked) {
    // Completar la tarea
    taskToComplete.classList.add("completed");
  } else {
    // Descompletar la tarea
    taskToComplete.classList.remove("completed");
  }
  // Actualizar las estadísticas
  updateStatics();
}
