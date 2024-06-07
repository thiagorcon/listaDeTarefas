
const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function createTaskItem(task) {
  const liElement = document.createElement('li');
  const divContainer = document.createElement('div');
  const spanElement = document.createElement('span');
  const pElement = document.createElement('p');
  const buttonElement = document.createElement('button');

  liElement.classList.add('task__item');
  divContainer.classList.add('task-info__container');
  spanElement.classList.add('task-type');
  


  spanElement.innerText = ''; 

  pElement.textContent = task.title;
  buttonElement.classList.add('task__button--remove-task');
   
console.log(task.type);
  if (task.type === 'Urgente') {
    spanElement.classList.add('span-urgent');
    
  } else if (task.type === 'Importante') {
    spanElement.classList.add('span-important');
    divContainer.appendChild(spanElement)
  } else if (task.type === 'Normal') {
    spanElement.classList.add('span-normal');
    divContainer.appendChild(spanElement)
  }


  buttonElement.addEventListener('click', () => {
    const index = tasks.indexOf(task);
    if (index > -1) {
      tasks.splice(index, 1); 
      renderElements(tasks);  
    }
  });

  divContainer.appendChild(spanElement);
  
  divContainer.appendChild(pElement); 
  divContainer.appendChild(buttonElement);
  liElement.appendChild(divContainer);

  return liElement;
}

function renderElements(tasks) {
  const ulElement = document.querySelector('ul');

  ulElement.innerHTML = ''; 

  tasks.forEach(task => {
    const taskItem = createTaskItem(task);
    ulElement.appendChild(taskItem);
  });
}


document.querySelector('.form__button--add-task').addEventListener('click', (event) => {
  event.preventDefault(); 

  const taskTitle = document.getElementById('input_title').value;
  const taskType = document.querySelector('.form__input--priority').value;

  if (taskTitle.trim() === "" || taskType === "") {
    alert("O título da tarefa e o tipo não podem estar vazios.");
    return;
  }

  const newTask = { title: taskTitle, type: taskType }; 

  tasks.push(newTask);

  renderElements(tasks);

  document.getElementById('input_title').value = '';
  document.querySelector('.form__input--priority').value = '';
});


renderElements(tasks);
