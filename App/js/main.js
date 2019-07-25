const writerText = document.querySelector(".writer .writer__text");

// Type Writer
const typewriter = new Typewriter(writerText, {
  loop: true
});

typewriter
  .typeString("Hello, I'm Amin Taghipour")
  .pauseFor(2000)
  .deleteAll()
  .typeString("I'm a Front-end developer")
  .pauseFor(2000)
  .deleteAll()
  .typeString("In this project, I use <a href='https://gulpjs.com/'>Gulp</a>")
  .pauseFor(1000)
  .deleteChars(4)
  .typeString("<a href='https://yarnpkg.com/'>Yarn</a>")
  .pauseFor(1000)
  .deleteChars(4)
  .typeString("<a  href='https://getbootstrap.com/'>Bootstrap</a>")
  .pauseFor(1000)
  .deleteChars(9)
  .typeString("<a  href='https://sass-lang.com/'>Sass</a>")
  .pauseFor(1000)
  .deleteChars(4)
  .typeString("<a  href='https://safi.me.uk/typewriterjs/'>Typewriter</a>")
  .pauseFor(1000)
  .deleteChars(10)
  .typeString("<a  href='https://git-scm.com/'>Git</a>")
  .pauseFor(1000)
  .deleteAll()
  .typeString(
    "<a href='https://codepen.io/amin-ta/'>Codepen</a> & <a href='https://github.com/Am-Ta'>Github</a>"
  )
  .pauseFor(2000)
  .start();

// Hamburger Menu
const hamburgerIcon = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
let icon = document.querySelector(".icon");

hamburgerIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
  icon.classList.toggle("active");
});
