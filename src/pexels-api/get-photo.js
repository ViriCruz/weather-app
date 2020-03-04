import elements from '../dom-stuff';

const getPhoto = async () => {
  const query = elements().description.textContent.toLowerCase();
  const pexelsApi = '563492ad6f91700001000001225e19125d534b7cbffbeecbe2524470';
  const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`, {
    mode: 'cors',
    headers: {
      Authorization: pexelsApi,
    },
  });
  const data = await response.json();
  console.log(data);

  elements().bgImage.style.backgroundImage = `url('${data.photos[0].src.large}')`;
  elements().pexels.textContent = 'Photos provided by Pexels. Photo by';
  elements().photographer.textContent = data.photos[0].photographer;
  elements().photographer.href = data.photos[0].url;
};

export default getPhoto;
