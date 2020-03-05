import domStuff from '../dom-stuff';

const loadJson = async () => {
  const query = domStuff.elements().description.textContent.toLowerCase();
  const pexelsApi = '563492ad6f91700001000001225e19125d534b7cbffbeecbe2524470';
  const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`, {
    mode: 'cors',
    headers: {
      Authorization: pexelsApi,
    },
  });

  if (response.ok) return await response.json();
 
  throw new Error(response.status);
};

const getPhoto = async () => {
  let data;
  try {
    data = await loadJson();
    const url = data.photos[0].src.large;
    const { photographer } = data.photos[0];
    const pexelsLink = data.photos[0].url;
    domStuff.showPexelsPhoto(url, photographer, pexelsLink);
  } catch (error) {
    domStuff.elements().pexels.textContent = error;
  }
};

export default getPhoto;
