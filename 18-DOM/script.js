let count = 0;
const handlePlus = () => {
  count += 1;
  document.getElementById("number").innerHTML = count;
};

const handleMinus = () => {
  count -= 1;
  document.getElementById("number").innerHTML = count;
};

const handleInput = () => {
  console.log(document.getElementById("search").value);
};

const handleChange = () => {
  console.log("handleChange");
  document.getElementById("message").innerHTML =
    document.getElementById("search").value;
};
const handleSearch = (event) => {
  document.querySelectorAll(".message")[1].innerHTML = event.target.value;
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
});
