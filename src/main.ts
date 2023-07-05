import './style.css';

const sneakerImg: HTMLImageElement = document.querySelector("#sneakerImg")!;
const container: HTMLDivElement = document.querySelector("#container")!;
const card: HTMLDivElement = document.querySelector("#card")!;
const pageTitle: HTMLHeadingElement = document.querySelector("#pageTitle")!;


container.addEventListener("mousemove", (evt) => {
  let xAxis = (window.innerWidth / 2 - evt.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - evt.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", () => {
  card.style.transition = "none";
  //Popout
  pageTitle.style.transform = "translateZ(150px)";
  sneakerImg.style.transform = "translateZ(200px) rotateZ(-15deg)";
});

container.addEventListener("mouseleave", () => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  
  //Popout
  pageTitle.style.transform = "translateZ(0px)";
  sneakerImg.style.transform = "translateZ(0px) rotateZ(0deg)";
});