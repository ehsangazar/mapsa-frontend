const fetchAPI = () => {
  return fetch("https://run.mocky.io/v3/c7cf8e24-b892-4a78-a94f-5401c2e775d3");
};

const fetchAPI2 = (url) => {
  // PROMISE HELL
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        response.json().then((data) => {
          console.log("new data", data);
          data.version = "V1";
          data.message = data.status === "okay" ? "THank you" : "Sorry";
          resolve(data);
        });
      })
      .catch(() => {
        reject("error", url);
      })
      .finally(() => {
        console.log("finally");
      });
  });
};

document.getElementById("button").addEventListener("click", () => {
  // ASYNC -> DELAY
  const response = fetchAPI()
    .then((response) => {
      response.json().then((data) => {
        console.log("data", data);
      });
    })
    .catch((error) => {
      console.log("error", error);
    });

  fetchAPI2("https://run.mocky.io/v3/c7cf8e24-b892-4a78-a94f-5401c2e775d3")
    .then((data) => {
      console.log("data", data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

const setTimeOutWIthPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      name = "ehsan";
      resolve(name);
    }, 2000);
  });
};

const fetchAPIWithDelay = () => {
  let name = "ali";
  setTimeOutWIthPromise()
    .then((newName) => {
      name = newName;
      console.log("name", name);
    })
    .catch((newName) => {
      name = newName;
      console.log("name", name);
    });
};

document
  .getElementById("button-with-delay")
  .addEventListener("click", fetchAPIWithDelay);
