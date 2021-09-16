const cl = console.log;
export default function hablarTexto(select, btn, input) {
  const $select = document.getElementById(select),
    $button = document.getElementById(btn),
    $textarea = document.getElementById(input),
    narrador = new SpeechSynthesisUtterance();
  let voices = [];
  document.addEventListener("DOMContentLoaded", (e) => {
    speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = speechSynthesis.getVoices();
      for (let i = 0; i < voices.length; i++) {
        const $option = document.createElement("option");
        $option.value = voices[i].name;
        $option.textContent = `${voices[i].name} - ${voices[1].lang}`;
        $select.appendChild($option);
      }
    });
  });
  document.addEventListener("change", (e) => {
    if (e.target === $select) {
      narrador.voice = voices.find((voice) => voice.name === $select.value);
    }
  });
  document.addEventListener("click", (e) => {
    if (e.target === $button) {
      narrador.text = $textarea.value;
      speechSynthesis.speak(narrador);
    }
  });
}
