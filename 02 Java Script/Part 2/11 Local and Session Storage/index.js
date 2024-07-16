// session storage --> the session storage is a type of the storage which to vanishes the data when we close the window.
// local storage --> the local storage is a type of the storage where we have to delete the data manualy.

sessionStorage.setItem("name","vinay");

localStorage.setItem("name","chandan");

// how to get the data from localStorage
const name1 = localStorage.getItem('name');
console.log(name1);

// how to get the data from sessionStorage
const name2 = sessionStorage.getItem('name');
console.log(name2);

// how to remove the data from local storage
localStorage.removeItem('name');

//clear all the data in localStorage
localStorage.clear();


document.getElementsByClassName('.task-list');