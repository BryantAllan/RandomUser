import { fetchData } from "./utils.js";


export const renderData = (elementId, data) => {
    // const targetElement = document.getElementById(elementId);
    // if (targetElement) {
    //   targetElement.innerHTML = data;

    // } 

    const body = document.getElementsByTagName('body')
    const div = document.getElementById('render')
    div.innerText = data.message
    document.querySelector(`#${elementId}`).src=data.message;
    
    // else {
    //   console.error(`Element with ID ${elementId} not found.`);
    // }
  };
  

