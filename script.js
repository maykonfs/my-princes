card.addEventListener("click", () => {
  card.classList.toggle("open");

  if (card.classList.contains("open")) {
    music.volume = 0.4;
    music.play(); // precisa de clique para funcionar no mobile
  } else {
    music.pause();
    music.currentTime = 0;
  }
});
