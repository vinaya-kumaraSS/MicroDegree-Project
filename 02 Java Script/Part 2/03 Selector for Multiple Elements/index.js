// How to select multile elements
const items = document.getElementsByClassName('heading')

console.log(items);
// 0: div.heading
// 1: div.heading
// 2: div.heading
// length: 3
// [[Prototype]]: HTMLCollection﻿


// how to change the color
items[0].style.color = 'red';

// how to change color of all the class items 
for (let i = 0; i < items.length; i++) {
    items[i].style.color = "blue";
}


// How to change the text content
items[2].textContent = "Night";

// ***********************getElementsByTagName**************************
const contents = document.getElementsByTagName('h3');
contents[0].style.color = "yellow";
contents[2].textContent = "Night";

// *****************querySelectorAll - it will return NodeList[] - no need to convert to an array********************

const listd_elements = document.querySelectorAll('li.fruits_list');

console.log(listd_elements)

// change the color of the odd position elements
const color_list = document.querySelectorAll("li:nth-child(odd)");

color_list.forEach(function (li) {
    li.style.backgroundColor = "#ccc";
});