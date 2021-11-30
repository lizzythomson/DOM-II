import "./less/index.less";

const firstImage = document.querySelector("img");

let cursorOverFirstImg = 0;

firstImage.addEventListener("mouseover", function (event) {
  cursorOverFirstImg += 1;
  console.log(
    `You have moved your mouse of the top image ${cursorOverFirstImg} times!`
  );
});

const brokenLink = document.querySelector("a:nth-of-type(2)");

brokenLink.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Sorry! The About Us link is not working yet...Coming soon!");
});

const firstButton = document.querySelector(".btn:nth-of-type(1)");

firstButton.addEventListener("dblclick", function (event) {
  firstButton.style.color = "red";
  console.log(firstButton.style);
});

document.addEventListener("scroll", function (event) {
  console.log("you are scrolled #exciting");
});

// Your code goes here!
// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`
// * [ ] `drag / drop`
