const fetchAPIAsync = async () => {
  try {
    const jsonResponse = await fetch(
      "https://run.mocky.io/v3/c7cf8e24-b892-4a78-a94f-5401c2e775d3"
    );
    const response = await jsonResponse.json();
    console.log("response", response);
  } catch (error) {
    console.log("error", error);
  }
};

const fetchAPI2 = (url) => {
  // PROMISE HELL
  return new Promise(async (resolve, reject) => {
    try {
      const responseJson = await fetch(url);
      const data = await responseJson.json();
      console.log("new data", data);
      data.version = "V1";
      data.message = data.status === "okay" ? "THank you" : "Sorry";
      resolve(data);
    } catch (error) {
      reject("error", url);
    }
  });
};

// await fetchAPI2("https://run.mocky.io/v3/c7cf8e24-b892-4a78-a94f-5401c2e775d3")

document
  .getElementById("button-async")
  .addEventListener("click", fetchAPIAsync);
