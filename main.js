function toggleMusic() {
  const spanElement = document.querySelector(".earphone-span");
  const imageElement = document.querySelector(".earphone-img");
  const music = document.getElementById("background-music");

  if (imageElement.src.includes("earphoneOff.png"))
  {
    imageElement.src = "/assets/earphoneOn.png"
    spanElement.innerHTML = "Sound On";
    music.play();
  } else {
    imageElement.src = "/assets/earphoneOff.png"
    spanElement.innerHTML = "Sound Off";
    music.pause();
  }
}
