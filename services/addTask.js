import { updateStatics } from "./updateStatics";

const todoList = document.querySelector("#todo-list");
const input = document.querySelector("#task");
const template = document.querySelector("#task-template").content;
const fragment = document.createDocumentFragment();

export function addTask(title) {
  fetch("http://localhost:3000/tasks", {
    method: "POST",
    body: JSON.stringify({ title }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Ha ocurrido un error al añadir la tarea");
      }
      return response.json();
    })
    .then((data) => {
      // clonar el template
      const clone = template.cloneNode(true);
      // Añadir el id a la tarea
      clone.querySelector("li").id = data.body.id_task;
      // Añadir el título de la tarea
      clone.querySelector("span").textContent = data.body.title;
      // Añadir el template clonado al fragmento
      fragment.appendChild(clone);
      // Añadir el fragmento al DOM
      todoList.appendChild(fragment);
      // Limpiar el input
      input.value = "";
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
