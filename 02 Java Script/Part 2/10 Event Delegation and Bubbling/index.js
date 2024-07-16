document.querySelector('.AddTask').addEventListener('click',AddTask);
function AddTask(){
    const new_list = document.createElement('li');
    const ToDo_Content = document.querySelector('.ToDo_Content');
    new_list.className = "todo_list";
    const value = document.getElementById('ToDo').value;
    ToDo_Content.append(document.createTextNode(value));
}