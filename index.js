const activity = document.getElementById("activity");
const title = document.getElementById("title");

function findActivity() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      title.textContent = "🦾 HappyBot🦿";
      activity.innerText = data.activity;
      document.body.classList.add("fun");
    });
}
