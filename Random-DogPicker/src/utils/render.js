import { fetchData, fetchAll} from "./utils.js";


export const renderData1 = (elementId, data) => {


    const body = document.getElementsByTagName('body')
    const div = document.getElementById('render')
    document.querySelector(`#${elementId}`).src=data.message;

     
  };

  export const renderData2 = async () => {
    const [data, err] = await fetchAll()
    const list = Object.keys(data.message);
    console.log(list);
    list.forEach(el => {
      const li = document.createElement("li")
      li.textContent = el 
      document.querySelector("ul").append(li)
      
    })
  }

  export const getRandom = async (breed) =>{
    const array = await fetchData(`https://dog.ceo/api/breed/${breed}/images`)
  //  console.log(array);
    let randomIndex ;
    
    while (typeof randomIndex === 'undefined' || randomIndex >= array.length) {
        randomIndex = Math.floor(Math.random() * array.length);
    }
    // console.log(randomIndex)
    console.log(array[0].message[randomIndex]);
    const div = document.createElement('div')
    div.innerHTML = `
    <img src=${array[0].message[randomIndex]}>
    `
    document.querySelector('#app').append(div);
    }

  