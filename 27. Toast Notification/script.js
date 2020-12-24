const btn = document.getElementById("btn");
const toasts = document.getElementById("toasts");

const messages = ["Warning", "Error", "Are you sure?", "Completed"];

btn.addEventListener("click", () => createNotification());

function createNotification() {
  const notification = document.createElement("div");
  notification.classList.add("toast");
  notification.innerText =
    messages[Math.floor(Math.random() * messages.length)];
  toasts.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("remove");
    setTimeout(() => {
      notification.remove();
    }, 750);
  }, 3000);
}
