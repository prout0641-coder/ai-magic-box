const API_KEY = "AQ.Ab8RN6L-M2jrkUNWzoY32O-uqiyrF6XDEcS4houM7DbmbR43Zg";
const askButton = document.getElementById("askBtn");
const result = document.getElementById("result");
const promptInput = document.getElementById("prompt");
const loading = document.createElement("p");
loading.innerText = "⏳ Loading...";
loading.style.display = "none";
loading.style.textAlign = "center";
loading.style.color = "#555";

document.body.appendChild(loading);

askButton.addEventListener("click", async function () {
    const prompt = promptInput.value;

askButton.innerHTML = "⏳ Loading...";
askButton.disabled = true;
result.innerText = "";
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",{
        method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": API_KEY
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ]
            })
        }    
    );
    const data = await response.json();

console.log(data.candidates[0].content.parts[0].text);

askButton.innerHTML = "✨ Ask Gemini";
askButton.disabled = false;
    result.innerText = data.candidates[0].content.parts[0].text;
    
})


