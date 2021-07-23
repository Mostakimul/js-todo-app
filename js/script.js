const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const error = document.querySelector('.error');

// genrating function for create todo html
const generateTemplate = (newTodo) => {
  const html = `
  <li class="list-group-item d-flex justify-content-between   align-items-center text-light">
    <span>${newTodo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

  list.innerHTML += html;
};

// Add Todo
addTodo.addEventListener('submit', (e) => {
  e.preventDefault();
  // trim cut all white space
  const newTodo = addTodo.add.value.trim();
  // console.log(newTodo);

  if (newTodo.length) {
    // generate template
    generateTemplate(newTodo);
    error.classList.add('d-none');
    addTodo.reset();
  } else {
    error.classList.remove('d-none');
  }
});

// Remove Todo
// Don't attach eventlistener
// use event deligation
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});
