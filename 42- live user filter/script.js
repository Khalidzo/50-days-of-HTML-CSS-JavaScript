const usersContainer = document.getElementById('result');
const input = document.getElementById('search');
const users = [];

getUser();

input.addEventListener('input', (e) => {
  users.forEach(user => {
    if (user.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
      user.classList.remove('hide');
    } else {
      user.classList.add('hide');
    }
  })
});


async function getUser() {
  const request = await fetch('https://randomuser.me/api?results=50');
  const {results} = await request.json();

  // Clear HTML
  usersContainer.innerHTML = '';

  results.forEach(result => {
    const userDiv = document.createElement('div');

    users.push(userDiv);
    userDiv.classList.add('user');

    // Append to the array
    
    userDiv.innerHTML = `
                          <img src="${result.picture.medium}" alt="${result.name.first}-img">
                          <div class="user-info">
                              <h4>${result.name.first} ${result.name.last}</h4>
                              <p class="location">${result.location.city}, ${result.location.country}</p>
                          </div>`;
  
    
    usersContainer.appendChild(userDiv);
  });
}
