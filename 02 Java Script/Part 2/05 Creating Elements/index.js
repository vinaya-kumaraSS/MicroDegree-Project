const list = document.createElement('li');

// print the content
console.log(list); // <li></li>

// adding the class(we have to give the same class name is alredy the class is created)
list.className = 'list-item';  // <li class="list-item"></li>

// adding the id
list.id = 'items';  // <li class="list-item" id="items"></li>

// adding the attribute
list.setAttribute('title','new item');  //<li class="list-item" id="items" title="new item"></li>


// *******************example 1***********************
// How to add the append the data to list
const list_items = document.querySelector('ul.collection-item');
list.append(document.createTextNode('Hello'));   //above
list_items.append(list);



// *******************example 2***********************
const item = document.createElement('li');
const ul_block = document.querySelector('ul.branch-content');
item.append(document.createTextNode = 'CSD');
ul_block.append(item);