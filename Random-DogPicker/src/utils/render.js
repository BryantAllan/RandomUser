import { fetchData } from "./utils.js";


export const renderData1 = (elementId, data) => {


    const body = document.getElementsByTagName('body')
    const div = document.getElementById('render')
    document.querySelector(`#${elementId}`).src=data.message;
    
    
  };
  
  // export const renderData1 = (elementId, data ) => {
  //   const body = document.getElementsByTagName('body')
  //   const div = document.getElementById('render')
  //   document.querySelector(`#${elementId}`).
    
  // }

