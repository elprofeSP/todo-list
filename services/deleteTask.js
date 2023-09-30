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
      return response.json();
    })
    .then((data) => {
      // Eliminar la tarea del DOM
      document.getElementById(id).remove();
      // Actualizar las estadísticas
      updateStatics();
      // Mostrar un mensaje de éxito
      alert(data.message);
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
}
