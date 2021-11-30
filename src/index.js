import "./less/index.less";

const firstImage = document.querySelector("img");

let cursorOverFirstImg = 0;

firstImage.addEventListener("mouseover", function () {
  cursorOverFirstImg += 1;
  console.log(
    `You have moved your mouse of the top image ${cursorOverFirstImg} times!`
  );
});

const brokenLink = document.querySelector("a:nth-of-type(2)");

brokenLink.addEventListener("click", function () {
  console.log("Sorry! The About Us link is not working yet...Coming soon!");
});

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  console.log("Sorry, can't use the down arrow at this time #notaccessable");
});

const firstButton = document.querySelector(".btn:nth-of-type(1)");

firstButton.addEventListener("dblclick", function () {
  firstButton.style.color = "red";
  console.log(firstButton.style);
});

document.addEventListener("scroll", function () {
  console.log("you are scrolled #exciting");
});

const lastImage = document.querySelector(".content-destination img");

lastImage.addEventListener("mouseenter", function () {
  lastImage.src =
    "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";
});

lastImage.addEventListener("mouseleave", function () {
  lastImage.src = "http://localhost:9000/img/destination.jpg";
});

document.addEventListener("resize", function () {
  console.log("You resized the page");
});

document.addEventListener("copy", function () {
  alert("You copied something! Sweet!");
});

const headerSection = document.querySelector("header");

headerSection.addEventListener("select", function () {
  console.log("You selected the header section!");
});
