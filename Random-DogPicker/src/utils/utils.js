// import { renderData } from './src/utils/render.js'
import { renderData1 } from './render'

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

    
    const [data2, error2] = await fetchData(apiUrl2);
    if (data2)  renderData1('data2', data2);
  
    console.log(data2)

};

fetchDataEx();

export const fetchAll =  async () => {
  return await fetchData(apiUrl1)
}
