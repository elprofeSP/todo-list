import { updateStatics } from "./updateStatics";

export function deleteTask(id) {
  fetch(`http://localhost:3000/tasks/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Ha ocurrido un error al eliminar la tarea");
      }
    })
    .then(() => {
      // Eliminar la tarea del DOM
      document.getElementById(id).remove();
      // Actualizar las estadísticas
      updateStatics();
      // Mostrar un mensaje de éxito
      alert("Tarea eliminada correctamente");
    })
    .catch((error) => {
      alert(error.message);
    });
}
