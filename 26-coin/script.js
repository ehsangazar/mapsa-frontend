// CORS ERROR
const fetchCoins = async () => {
  const jsonResponse = await fetch(
    "https://www.linkedin.com/realtime/realtimeFrontendTimestamp",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CoinAPI-Key": "73034021-THIS-IS-SAMPLE-KEY",
      },
    }
  );
  const data = await jsonResponse.json();
  return data;
};

document.addEventListener("DOMContentLoaded", async () => {
  const coins = await fetchCoins();
  console.log(coins);
});
