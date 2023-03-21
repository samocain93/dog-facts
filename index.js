const dogBtn = document.getElementById('dog-search');
const imageEl = document.getElementById('img_container');
const factBtn = document.querySelector('fact-btn');
const factEl = document.querySelector('fact-container');

dogBtn.addEventListener('click', getDogImage);

function getDogImage() {
  const url = 'https://dog.ceo/api/breeds/image/random';

  fetch(url).then((response) => {
    return response.json().then((data) => {
      const img = document.createElement('img');
      img.src = data.message;
      img.alt = 'picture of a dog';
      imageEl.appendChild(img);
    });
  });
}
