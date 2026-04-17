const display = document.getElementById("display");
const alldrumPadKeys = document.querySelectorAll(".drum-pad");


alldrumPadKeys.forEach((pad) => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector("audio");
    audio.currentTime = 0;
    audio.play();
    display.innerText = pad.id;
  });
});


document.addEventListener("keydown", (event) => {
  const keyPressed = event.key.toUpperCase();
  const audioContent = document.getElementById(keyPressed);

  if (audioContent) {
    audioContent.currentTime = 0;
    audioContent.play();
    
   
    const parentPad = audioContent.parentElement;
    display.innerText = parentPad.id;
    
    
    parentPad.classList.add("active");
    setTimeout(() => {
      parentPad.classList.remove("active");
    }, 100);
  }
});