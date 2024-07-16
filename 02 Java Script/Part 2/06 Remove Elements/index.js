// **********************raplace the content****************************
// create a new heading element
const newHeading = document.createElement("h1");
// add the id to the new heading
newHeading.id = "heading-text";
// append the data to the new heading
newHeading.appendChild(document.createTextNode("Enjoy"));
// get the old heading
const oldHeading = document.getElementById('heading-text');
// get the parent of the  old heading
const card = document.querySelector('.card');
// replace the tags
card.replaceChild(newHeading,oldHeading);


// *********************delete the content**************************
// get the whole list
const list = document.querySelector('ul');
// get all the elements of list
const lis = document.querySelectorAll('li')
// method 1
list.removeChild(lis[1])
// method 2
lis[2].remove()