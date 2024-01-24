import { fetchData } from "./utils.js";

export const renderData = (elementId, data) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.innerHTML = JSON.stringify(data, null, 2);
    } else {
      console.error(`Element with ID ${elementId} not found.`);
    }
  };
  
  export default renderData;
