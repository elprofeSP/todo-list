export function updateStatics() {
  // elemento del DOM tareas pendientes
  const pendingSpan = document.getElementById("pending-tasks");
  // elemento del DOM tareas completadas
  const completedSpan = document.getElementById("completed-tasks");
  // Obtener el número de tareas totales
  const totalTasks = document.querySelectorAll(".todo-item").length;
  // Obtener todas las tareas que están completadas
  const completedTasks = document.querySelectorAll(".completed").length;
  // Obtener todas las tareas que no están completadas
  const uncompletedTasks = totalTasks - completedTasks;
  // Actualizar el número de tareas pendientes
  pendingSpan.textContent = uncompletedTasks;
  completedSpan.textContent = completedTasks;
}
