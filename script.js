const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const list = document.createElement("ul");
document.body.appendChild(list);

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completed
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "10px";
  delBtn.addEventListener("click", () => {
    list.removeChild(li);
  });

  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = "";
});