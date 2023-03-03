function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const loginApi = async ({ email, password }) => {
  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

document
  .getElementById("loginForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const response = await loginApi({ email, password });
    localStorage.setItem("token", response.token);
    document.cookie = `token=${response.token}; expires=Thu, 18 Dec 2023 12:00:00 UTC`;

    const user = {
      email: "test@email.com",
      name: "Test User",
      password: "password",
    };
    localStorage.setItem("user", JSON.stringify(user));
  });

document.addEventListener("DOMContentLoaded", () => {
  if (getCookie("token")) {
    window.location.href = "index.html";
  }

  const token = localStorage.getItem("token");
  if (token) {
    window.location.href = "index.html";
  }
});
