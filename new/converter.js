const text = document.getElementById('text');
const speakButton = document.getElementById('speak');

if ('speechSynthesis' in window) {
  const synth = window.speechSynthesis;

  speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(text.value);
    synth.speak(utterance);
  });
} else {
  alert('Sorry, your browser doesn\'t support the Web Speech API');
}