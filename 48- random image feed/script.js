const API = 'https://api.unsplash.com/photos/random/?client_id=PRnkEIfYX6Di0gREXrhlUUfFXKq3VW5wLwiMsRV6xuo&count=15';
const imgContainer = document.querySelector('img-container');

getImg();

async function getImg() {
  const res = await fetch(API);
  const data = await res.json();

  console.log(data[0].links.html);

  data.forEach(imgData => {
    const imgEl = document.createElement('img');
    imgEl.src = imgData.links.html;
    imgContainer.appendChild(imgEl);
  });
}
