// explore.js

window.addEventListener('DOMContentLoaded', init);
window.addEventListener('DOMContentLoaded', populateVoiceList);

function init() {
  const explore_section = document.querySelector("#explore");
  const textbox = explore_section.querySelector("#text-to-speak");
  const button = explore_section.querySelector("button");
  const img = explore_section.querySelector("img");
  const voice_select = document.querySelector("#voice-select");


  button.addEventListener("click", (e)=> {
    let text = textbox.value;
    console.log(text);
    let utterance = new SpeechSynthesisUtterance(text);
    let voices = speechSynthesis.getVoices();
    const selectedOption = voice_select.selectedOptions[0].getAttribute("data-name");
    
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
        break;
      }
    }
    speechSynthesis.speak(utterance);
    let speaking = speechSynthesis.speaking;

    if (speaking) {
      img.src = "assets/images/smiling-open.png";
    }

    utterance.onend = (event) => {
      img.src = "assets/images/smiling.png";
    };
  });

}

function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const voices = speechSynthesis.getVoices();
  const voice_select = document.querySelector("#voice-select");
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voice_select.appendChild(option);
  }

  
}