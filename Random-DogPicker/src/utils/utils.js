 export const allBreedUrl= "https://dog.ceo/api/breeds/list/all";
 export const randomImgUrl = "https://dog.ceo/api/breeds/image/random";


export const fetchData = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) throw Error(response.status);
    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

