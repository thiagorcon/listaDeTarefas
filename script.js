
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
  spanElement.innerText = 'sd'
  const buttonElement = document.createElement('button');

  liElement.classList.add('task__item');
  divContainer.classList.add('task-info__container');
  spanElement.classList.add('task-type');
  pElement.textContent = task.title;
  buttonElement.classList.add('task__button--remove-task');
  

  
  if(task.type === 'Urgente'){
    spanElement.classList.add('span-urgent')
  } else if(task.type === 'Importante'){
    spanElement.classList.add('span-important');
  } else if (task.type === 'Normal'){
    spanElement.classList.add('span-normal')
  }

  
  
  divContainer.appendChild(spanElement);
  divContainer.appendChild(pElement);
  divContainer.appendChild(buttonElement);
  liElement.appendChild(divContainer);
  //liElement.appendChild(buttonElement);

  
  return liElement;
}


function renderElements(tasks) {
  
  const ulElement = document.querySelector('ul'); 

  

  // Itera sobre o array de tarefas e adiciona cada item ao <ul>  
  tasks.forEach(task => {
    const taskItem = createTaskItem(task);
    ulElement.appendChild(taskItem);
  });  
  
}


renderElements(tasks);