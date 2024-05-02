document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task__input");
    const taskList = document.getElementById("tasks__list");
    const form = document.getElementById("tasks__form");
  
    function addTask(taskContent) {
      const task = document.createElement("div");
      task.classList.add("task");
  
      task.innerHTML = `
        <div class="task__title">${taskContent}</div>
        <a href="#" class="task__remove">&times;</a>
      `;
  
      const removeButton = task.querySelector(".task__remove");
      removeButton.addEventListener("click", removeTask);
  
      taskList.appendChild(task);
    }
  
    function removeTask(event) {
      event.preventDefault();
      const task = event.target.closest(".task");
      task.remove();
    }
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const taskContent = taskInput.value.trim();
      if (taskContent !== "") {
        addTask(taskContent);
        taskInput.value = "";
      }
    });
  });
  