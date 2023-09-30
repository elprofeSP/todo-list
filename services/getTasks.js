import { displayTasks } from "./displayTasks";
import { updateStatics } from "./updateStatics";

// Obtener las tareas de la API y mostrarlas en el DOM (paginadas)
export async function getTasks(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    // Mostrar las tareas en el DOM
    displayTasks(data);
    // Actualizar las estadísticas
    updateStatics();
  } catch (error) {
    console.log(error);
    alert("Ha ocurrido un error al obtener las tareas");
  }
}
