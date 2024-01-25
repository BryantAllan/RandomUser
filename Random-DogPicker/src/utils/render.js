import { fetchData, fetchAll} from "./utils.js";


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


  export const renderData2 = async () => {
    const [data, err] = await fetchAll()
    const list = Object.keys(data.message);
    console.log(list);
    list.forEach(el => {
      data.textcontent
      
    })
  }

