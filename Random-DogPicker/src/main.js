async function start() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    createBreedList(data.message);
  } catch (e) {
    console.log("There was a problem fetching the breed list.");
  }
}

start();

function createBreedList(breedList) {
  const select = document.createElement("select");
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Choose a dog breed";
  select.appendChild(defaultOption);

  Object.keys(breedList).forEach((breed) => {
    const option = document.createElement("option");
    option.textContent = breed;
    select.appendChild(option);
  });

  document.getElementById("breed").appendChild(select);

 
  select.addEventListener("change", function (event) {
    loadByBreed(event.target.value);
  });
}

async function loadByBreed(breed) {
  if (breed != "Choose a dog breed") {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    createSlideshow(data.message);
  }
}


let currentPosition = 0;
let timer = null;

function createSlideshow(images) {

  if (timer) {
    clearInterval(timer);
    timer = null;
  }


  currentPosition = 0;


  const container = document.getElementById("slideshow");
  container.innerHTML = `<img src="${images[currentPosition]}" />`;

  timer = setInterval(() => {
    currentPosition++;
    if (currentPosition >= images.length) {
      currentPosition = 0;
    }
    container.innerHTML = `<img src="${images[currentPosition]}" />`;
  }, 4000);
}

function nextSlide() {
 
  const currentSlide = document.querySelector(".slide");
  if (currentSlide) {
    currentSlide.classList.add("fade-out");
  }


  document
    .getElementById("slideshow")
    .insertAdjacentHTML(
      "beforeend",
      `<div class="slide" style="background-image: url('${images[currentPosition]}')"></div>`
    );


  deleteFirstPhotoDelay = setTimeout(function () {
    if (currentSlide) {
      currentSlide.remove();
    }
  }, 1000);

  if (currentPosition + 1 >= images.length) {
    
  }
} 