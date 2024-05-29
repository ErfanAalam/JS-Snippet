const leftDiv = document.querySelector(".left");
const rightDiv = document.querySelector(".right");
const data = [
  { key: "c", image: "crash.png", audio: "crash.mp3" },
  { key: "t", image: "tom.png", audio: "tom.mp3" },
  { key: "k", image: "kick.png", audio: "kick.mp3" },
  { key: "s", image: "snare.png", audio: "snare.mp3" },
];

window.addEventListener("load", createBand);
window.addEventListener("keypress", playMusicViaKeystroke);

function createBand(e) {
  data.forEach((obj) => {
    const div = document.createElement("div");
    div.classList.add("band");
    const audio = document.createElement("audio");

    div.style.backgroundImage = "url(assets/" + obj.image + ")";
    div.addEventListener("click", playMusic);

    audio.src = "assets/" + obj.audio;

    div.append(audio);
    rightDiv.append(div);
  });
}

function playMusic(e) {
  e.target.children[0].play();
}

function playMusicViaKeystroke(e) {
  const obj = data.find((obj) => {
    return obj.key === e.key;
  });
  if (obj) {
    new Audio("assets/" + obj.audio).play();
    animateBand(obj);
  }
}

function animateBand(obj) {
  const bandDivs = document.querySelectorAll(".band");
  const divToPaint = Array.from(bandDivs).find((bandDiv) => {
    return bandDiv.children[0].src.includes(obj.audio);
  });

  if (divToPaint) {
    divToPaint.style.backgroundColor = "yellow";
    const keyDiv = showKey(obj.key);
    divToPaint.append(keyDiv);
    setTimeout(() => {
      divToPaint.style.backgroundColor = "transparent";
      keyDiv.remove();
    }, 500);
  }
}

function showKey(key) {
  const keyDiv = document.createElement("div");
  keyDiv.classList.add("keyDiv");
  keyDiv.innerText = key;
  return keyDiv;
}
