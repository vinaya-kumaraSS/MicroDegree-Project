

const list_fruits = document.querySelector("ul.fruits_name")
const fruits = document.querySelector('li.text_name')
console.log(list_fruits)

// space, semicolon and the collection is also calculated as an object
console.log(list_fruits.childNodes)    //13

// space, semicolon and the collectons are not considered
console.log(list_fruits.children);     //6


// how to change the text content
list_fruits.children[1].textContent = "Alvas Institute of Engineering and Technology";
// how to see the inner child(grand children)
console.log(list_fruits.children[3].children[0]) //<span>Hello</span>

// how to access the firstchild elements
console.log(list_fruits.firstChild)  //#text

// how to get parent node
console.log(fruits.parentNode);  //<ul class="fruits_name">…</ul>
console.log(fruits.parentElement);  //<ul class="fruits_name">…</ul>
// how to get grandparent
console.log(fruits.parentElement.parentElement) //<body>...</body>

// how to get nextSibling
console.log(fruits.nextSibling);   //#text

console.log(fruits.previousElementSibling) //null