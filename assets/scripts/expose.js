// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const expose_section = document.querySelector("#expose");
  const img = expose_section.querySelector("img");
  const horn_select = expose_section.querySelector("#horn-select");
  const audio = expose_section.querySelector("audio");
  const button = expose_section.querySelector("button");
  const volume = expose_section.querySelector("#volume-controls");
  const volume_img = volume.querySelector("img");
  const volume_range = volume.querySelector("#volume");

  const jsConfetti = new JSConfetti({ expose_section });
  let current_horn;

  horn_select.addEventListener("change", (event) => {
    img.src = `./assets/images/${event.target.value}.svg`;
    audio.src = `./assets/audio/${event.target.value}.mp3`;
    current_horn = event.target.value;
  });

  button.addEventListener("click", (e) => {
    audio.play();
    if (current_horn == "party-horn") {
      jsConfetti.addConfetti();
    }
  });

  volume_range.addEventListener("change", (e) => {
    let level = 1;
    if (volume_range.value == 0) {
      level = 0;
    } else if (volume_range.value >= 1 && volume_range.value < 33) {
      level = 1;
    } else if (volume_range.value >= 33 && volume_range.value < 67) {
      level = 2;
    } else if (volume_range.value >= 67 && volume_range.value <= 100) {
      level = 3;
    } else {
    }
    volume_img.src =  `./assets/icons/volume-level-${level}.svg`;
    audio.volume = (volume_range.value) / 100;
  });
}
