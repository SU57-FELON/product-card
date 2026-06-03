async function loadUsers() {
  const dataFromStorage = localStorage.getItem('storageUsers');
  if (dataFromStorage === null) {
    const loadingText = document.getElementById('loading-text'); 
    loadingText.textContent = 'Данные загружаются';
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch('users.json')
    if (!response.ok) {
      throw new Error('Не удалось загрузить данные');
    }
    const data = await response.json()
    localStorage.setItem('storageUsers', JSON.stringify(data.users));
    renderUsers(data.users);
    loadingText.textContent = '';
  } catch (error) {
    loadingText.textContent = 'Ошибка загрузки данных'; 
  }
  } else {
    const users = JSON.parse(dataFromStorage);
    renderUsers(users);
  }
} 
loadUsers()
function renderUsers(users) {
  const usersContainer = document.getElementById('cards-container');
  usersContainer.innerHTML = '';
  users.forEach((user) => {
  const card = document.createElement('div')
  card.innerHTML = `<p>${user.name}</p><p>${user.surname}</p><p>${user.email}</p><p>${user.age}</p>`;
  usersContainer.appendChild(card);
  })
} 
const deleteAllBtn = document.getElementById('delete-all');
deleteAllBtn.addEventListener('click', () => {
  const usersContainer = document.getElementById('cards-container');
  usersContainer.innerHTML = '';
  localStorage.setItem('storageUsers', JSON.stringify([]));
})
const allCardsBtn = document.getElementById('get-all-cards-btn');
allCardsBtn.addEventListener('click', () => {
  const usersContainer = document.getElementById('cards-container');
  if (usersContainer.children.length > 0) {
  alert('Все карточки уже отображены');
  } else {
  const fromStorage = localStorage.getItem('storageUsers');
  const users = JSON.parse(fromStorage);
  renderUsers(users);
  }
})   

const deleteSpecificBtn = document.getElementById('delete-specific');
deleteSpecificBtn.addEventListener('click', () => {
  const id = prompt("Введите id карточки для удаления");
  const idNumber = parseInt(id);
  const FromStorage = localStorage.getItem('storageUsers');
  const users = JSON.parse(FromStorage);
  const newUsers = users.filter((user) => user.id !== idNumber);
  localStorage.setItem('storageUsers', JSON.stringify(newUsers));
  renderUsers(newUsers);
})
