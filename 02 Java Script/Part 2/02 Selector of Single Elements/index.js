
// ------------------------Basic--------------------------
// print the full content of the specified id
console.log(document.getElementById('head-text'))
// <h1 id="head-text">Alvas Collge</h1>

// print the id 
console.log(document.getElementById('head-text').id)
// head-text

// print class name
console.log(document.getElementById('head-text').className)
// heading


// ------------------------How to change the styling--------------------------
const Head_Text = document.getElementById('head-text')

//change the background color
Head_Text.style.backgroundColor = 'yellow';

// change the text color
Head_Text.style.color = 'red';

// adding padding
Head_Text.style.padding = '20px';


// ------------------------How to change the content--------------------------
Head_Text.innerText = 'Alvas college';
Head_Text.textContent = 'soraba';
Head_Text.innerHTML = '<h4>Shimoga</h4>';

// ********************Query selector**********************
// By using Query selector we can select the multiple element

// how to get text
console.log(document.querySelector('#head-text'));
// <h1 id="head-text" class="heading" style="background-color: yellow; color: red; padding: 20px;">…</h1>

// select using class
console.log(document.querySelector('.heading'));
// <h1 id="head-text" class="heading" style="background-color: yellow; color: red; padding: 20px;">…</h1>

// select using tag - return first 'h1'
console.log(document.querySelector('h1'));
// <h1 id="head-text" class="heading" style="background-color: yellow; color: red; padding: 20px;">…</h1>

// access the list element
document.querySelector("li").style.color = "red";
// color the last-child
document.querySelector("li:last-child").style.color = "yellow";
//color the nth child
document.querySelector("li:nth-child(2)").style.color = "aqua";

