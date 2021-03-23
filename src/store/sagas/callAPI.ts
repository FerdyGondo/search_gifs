import React from 'react';

const callAPI = async (gif)  => {
        try {
          const API_KEY = "LV69YxLmFF9AvD5NU5upirrhfmRNFS83";
          const BASE_URL = 'https://api.giphy.com/v1/gifs/search';
          const resJson =  await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${gif}`);
          console.log('callAPI resJson', resJson)
          const result =  await resJson.json();
          console.log('callAPI result', result)
            return result.data;
        } catch (error) {
          console.log(error);
        }
}
export default callAPI;