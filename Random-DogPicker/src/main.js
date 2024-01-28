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

  // Add the event listener here
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
  // Clear any existing timer
  if (timer) {
    clearInterval(timer);
    timer = null;
  }

  // Start at the first image
  currentPosition = 0;

  // Display the first image
  const container = document.getElementById("slideshow");
  container.innerHTML = `<img src="${images[currentPosition]}" />`;

  // Set a timer to change the image every 3 seconds
  timer = setInterval(() => {
    currentPosition++;
    if (currentPosition >= images.length) {
      currentPosition = 0;
    }
    container.innerHTML = `<img src="${images[currentPosition]}" />`;
  }, 3000);
}

function nextSlide() {
  document
    .getElementById("slideshow")
    .insertAdjacentHTML(
      "beforeend",
      `<div class="slide" style="background-image: url('${images[currentPosition]}')"></div>`
    );
  deleteFirstPhotoDelay = setTimeout(function () {
    document.querySelector(".slide").remove();
  }, 1000);
  if (currentPosition + 1 >= images.length) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }
}
