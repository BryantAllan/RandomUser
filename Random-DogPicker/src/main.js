import './style.css';
import { getRandom, renderData1, renderData2 } from './utils/render.js';

const main = () => {
    console.log("hello world");

    // Create a container div element
    const container = document.createElement('div');
    container.classList.add('container'); // Add a class for styling (optional)

    // Create an h1 element
    const h1Element = document.createElement('h1');
    h1Element.textContent = 'Dog Randomizer';

    // Append the h1 element to the container
    container.appendChild(h1Element);

    // Append the container to the element with ID 'app'
    const appElement = document.querySelector("#app");
    appElement.appendChild(container);

    renderData2();
    getRandom('borzoi');
}

main();

