const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yesssssss, see you on the 13th of January at any time you want!";
  gif.src =
    "<div class="tenor-gif-embed" data-postid="13937626585479535666" data-share-method="host" data-aspect-ratio="1.66" data-width="100%"><a href="https://tenor.com/view/fruitchive-eliosgifs-fruitchivegif-gif-13937626585479535666">Fruitchive Eliosgifs GIF</a>from <a href="https://tenor.com/search/fruitchive-gifs">Fruitchive GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
