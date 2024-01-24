// import { renderData } from './src/utils/render.js'
import { renderData } from './render'

export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`Fetch failed. ${response.status} ${response.statusText}`)
    }
    
    const isJson = (response.headers.get('content-type') || '').includes('application/json')
    let data = isJson ? await response.json() : await response.text()
    
    return [data, null];
  }
  catch (error) {
    console.error(error.message);
    return [null, error];
  }
}


const apiUrl1 = 'https://dog.ceo/api/breeds/list/all';
const apiUrl2 = 'https://dog.ceo/api/breeds/image/random';

const fetchDataEx = async () => {

  // const [data1, error1] = await fetchData(apiUrl1);
  // if (data1) renderData('data1', data1);
  // try {
  //   console.log(data1.message)
   
    
    const [data2, error2] = await fetchData(apiUrl2);
    if (data2)  renderData('data2', data2);
    console.log(data2)
  //
  // //   }
  // } catch (error) {
  //   console.error('Unexpected error:', error);
  // }
};

fetchDataEx();
