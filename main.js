let beats = {
  q: "./assets/Drum Sticks Hit 3.mp3",
  w: "./assets/PREL Musical 57.mp3",
  e: "./assets/Cymbal Suspended 2.mp3",
  r: "./assets/KSHMR_Impact_03.wav",
  a: "./assets/glimmer.mp3",
  s: "./assets/Piano Chord 331.mp3",
  d: "./assets/Piano Chord 209.mp3",
  f: "./assets/Piano Chord 208.mp3",
  z: "./assets/KSHMR_Impact_02.wav",
  x: "./assets/KSHMR_Impact_01.wav",
  c: "./assets/KSHMR_Impact_04.wav",
  v: "./assets/KSHMR_Impact_05.wav",
};
let box = document.getElementById("beats-box");
for (let beat in beats) {
  box.innerHTML +=
    "<div class='beat-small-box' id='beat-" + beat + "'>" + beat + "</div>";
}

window.addEventListener("keydown", (event) => {
  let key = event.key;
  play_audio(key);
  style_button(key);
  setTimeout(() => {
    unstyle_button(key);
  }, 1000);
});

play_audio = (keyPressed) => {
  if (keyPressed in beats) {
    console.log(keyPressed);
    const audio = new Audio(beats[keyPressed]);
    audio.play();
  }
};
style_button = (keyPressed) => {
  let active_button = document.getElementById("beat-" + keyPressed);
  active_button.classList.add("active");
};
unstyle_button = (keyPressed) => {
  let active_button = document.getElementById("beat-" + keyPressed);
  active_button.classList.remove("active");
};
