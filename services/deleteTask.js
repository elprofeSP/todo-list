import { updateStatics } from "./updateStatics";

export function deleteTask(id) {
  // Seleccionar la tarea a eliminar
  const taskToDelete = document.getElementById(id);
  // Eliminar la tarea
  taskToDelete.remove();
  // Actualizar las estadísticas
  updateStatics();
}
