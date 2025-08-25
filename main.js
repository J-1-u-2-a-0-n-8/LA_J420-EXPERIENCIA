document.addEventListener('DOMContentLoaded', () => {
  const tracks = ['assets/mp3/track1.mp3'];
  const pick = tracks[Math.floor(Math.random() * tracks.length)];
  const audio = new Audio(pick);
  audio.loop = true;
  audio.volume = 0.2;
  audio.play().catch(err => console.log('Autoplay bloqueado', err));
});
