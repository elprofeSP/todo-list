import { updateStatics } from "./updateStatics";

const todoList = document.querySelector("#todo-list");
const input = document.querySelector("#task");
const template = document.querySelector("#task-template").content;
const fragment = document.createDocumentFragment();

export function addTask(title) {
  // id de la tarea (random)
  const id = crypto.randomUUID();
  // clonar el template
  const clone = template.cloneNode(true);
  // Añadir el id a la tarea
  clone.querySelector("li").id = id;
  // Añadir el título de la tarea
  clone.querySelector("span").textContent = title;
  // Añadir el template clonado al fragmento
  fragment.appendChild(clone);
  // Añadir el fragmento al DOM
  todoList.appendChild(fragment);
  // Limpiar el input
  input.value = "";
  // Actualizar las estadísticas
  updateStatics();
}
