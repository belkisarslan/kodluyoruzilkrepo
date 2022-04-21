const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const message = document.querySelector('.message');

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}


form.addEventListener('submit', function (e) {
  e.preventDefault();
  const task = item.value;
  if(task === ''){
    showError('Film Girmediniz');
  }
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});

function showError(error){
  const messageError = document.createElement('p');
  messageError.textContent = error;
  messageError.classList.add('error');
  message.appendChild(messageError);
  setTimeout(() => {
      messageError.remove();
  },1000);
  message.style.color = "red"
}