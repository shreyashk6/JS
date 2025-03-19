const todoList = [{
  name: 'Sample name',
  dueDate:'yyyy-mm-dd'
}];
renderTodoList();
//render means print on the screen
function renderTodoList() {
    let todoListHtml = '';
    todoList.forEach(function(todoObject,index){
      const name = todoObject.name;
      const dueDate = todoObject.dueDate;
      //Or you can write it like this
      //const {name, dueDate} = todoList[i];
      const html =`
          <div>${name}</div>
          <div>${dueDate}</div>
            <button
            class="delete-todo-button js-delete-todo-button">
            Delete</button>
          
          `;
      todoListHtml += html;
    });
  //console.log(todoListHtml);
  document.querySelector('.js-todo-list').innerHTML = todoListHtml;
  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index)=>{
    deleteButton.addEventListener('click', function(){
      todoList.splice(index, 1);
      renderTodoList();
  });
});
}
//add a new todo to the list
function addTodo() {
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;

 const dateInputElement= document.querySelector('.js-date-input');  
 const dueDate= dateInputElement.value;

 //add the name to the list
 todoList.push({
  name: name,
  dueDate: dueDate
 });
 //empty the input
 inputElement.value = '';
 renderTodoList();
}

