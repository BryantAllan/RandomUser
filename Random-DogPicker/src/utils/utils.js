
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

const fetchDataExample = async () => {
  try {
    const [data1, error1] = await fetchData(apiUrl1);
    if (error1) {
      console.error('Error in fetching data from apiUrl1:', error1);
    } else {
      
      renderData('data1', data1);
    }

    const [data2, error2] = await fetchData(apiUrl2);
    if (error2) {
      console.error('Error in fetching data from apiUrl2:', error2);
    } else {
      
      renderData('data2', data2);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
};


fetchDataExample();
