// document.getElementById("submit").addEventListener("click", (event) => {
// Method 1
//   document.getElementById("submit").style.backgroundColor = "red";
// Method 2
//   event.target.style.backgroundColor = "green";
// });
// document.getElementById("submit2").addEventListener("click", (event) => {
// Method 1
//   document.getElementById("submit2").style.backgroundColor = "red";
// Method 2
//   event.target.style.backgroundColor = "yellow";
// });

// document.querySelectorAll(".btn").forEach((button) => {
//   button.addEventListener("mouseout", (event) => {
//     console.log("event", event);
//     event.target.style.backgroundColor = "red";
//   });
// });

// document.addEventListener("mousemove", (event) => {
//   console.log("event", event);
// });

// Event Delegation
document.getElementById("buttons").addEventListener("click", (event) => {
  if (event.target.id === "submit2") {
    event.target.style.backgroundColor = "red";
  }
  if (event.target.id === "submit") {
    event.target.style.backgroundColor = "green";
  }
});
