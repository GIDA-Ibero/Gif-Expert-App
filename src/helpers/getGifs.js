export const getGifs = async ( category ) => {
  console.log(process.env);
  const apiKey = process.env.REACT_APP_GIFS_API_KEY;
  console.log(apiKey);
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${ apiKey }`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(( gif ) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized.url,
    }
  });
  return gifs;
};