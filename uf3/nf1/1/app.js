
function synthVoice(text, lang) {
  const synth = window.speechSynthesis;  
  const utterance = new SpeechSynthesisUtterance();
  utterance.lang = lang;
  utterance.text = $(".en").val();
  synth.speak(utterance);
}

document.querySelector('.speak').addEventListener('click', () => {
  let i = document.querySelector('.en');
  let text = i.value || i.placeholder;
  synthVoice(text,'es-Es');
});

