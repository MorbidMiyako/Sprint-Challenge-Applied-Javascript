/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {
  const carousel = document.createElement("div"),
    leftbutton = document.createElement("div"),
    mountain = document.createElement("img"),
    computer = document.createElement("img"),
    trees = document.createElement("img"),
    turntable = document.createElement("img"),
    rightbutton = document.createElement("div");

  carousel.classList.add("carousel");
  leftbutton.classList.add("left-button");
  mountain.classList.add("visible")
  mountain.classList.add("mountain")
  computer.classList.add("computer")
  trees.classList.add("trees")
  turntable.classList.add("turntable")
  rightbutton.classList.add("right-button");

  carousel.append(leftbutton, mountain, computer, trees, turntable, rightbutton);

  leftbutton.textContent = "<"
  mountain.src = "./assets/carousel/mountains.jpeg"
  computer.src = "./assets/carousel/computer.jpeg"
  trees.src = "./assets/carousel/trees.jpeg"
  turntable.src = "./assets/carousel/turntable.jpeg"
  rightbutton.textContent = ">"

  leftbutton.addEventListener("click", () => { turnCarousel(-1) })
  rightbutton.addEventListener("click", () => { turnCarousel(1) })


  return carousel
}

document.querySelector(".carousel-container").append(createCarousel())

let show = 0

function turnCarousel(value) {
  const imgmountain = document.querySelector(".mountain")
  const imgcomputer = document.querySelector(".computer")
  const imgtrees = document.querySelector(".trees")
  const imgturntable = document.querySelector(".turntable")
  let carouselArray = [imgmountain, imgcomputer, imgtrees, imgturntable]


  console.log(carouselArray)

  carouselArray[show].classList.toggle("visible")

  show += value
  console.log(value)
  console.log(show)

  if (show < 0) {
    show += 4
  }
  else if (show > 3) {
    show -= 4
  }



  carouselArray[show].classList.toggle("visible")
}


