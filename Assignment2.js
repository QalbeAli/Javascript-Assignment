// Question No 1

function addNumberClosure(num) {
  return function (n) {
    return n + num;
  };
}

// Question No 2

function searchArray(arr, val) {
  if (arr.length === 0) {
    return false;
  }
  if (arr[0] === val) {
    return true;
  }
  return searchArray(arr.slice(1), val);
}

// Quesetion No 3

function addParagraph(text) {
  const p = document.createElement("p");
  const content = document.createTextNode(text);
  p.appendChild(content);
  document.body.appendChild(p);
}

// Question No 4

function addListItem(text) {
  const ul = document.querySelector("ul"); // assuming there is only one unordered list in the document
  const li = document.createElement("li");
  const content = document.createTextNode(text);
  li.appendChild(content);
  ul.appendChild(li);
}

// Question No 5

function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

// Question No 6

function saveObjectToLocalStorage(key, obj) {
  const objString = JSON.stringify(obj);
  localStorage.setItem(key, objString);
}

const Object = { name: "Wajid", age: 25 };
saveObjectToLocalStorage("Object", Object);

const myObjectString = localStorage.getItem("Object");
const myObject = JSON.parse(myObjectString);
console.log(myObject);

// Question No 7

function getObjectFromLocalStorage(key) {
  const objString = localStorage.getItem(key);
  const obj = JSON.parse(objString);
  return obj;
}

// Quesetion No 8

function saveObjectPropertiesToLocalStorage(obj) {
  // Save each property to localStorage
  for (const key in obj) {
    const value = obj[key];
    localStorage.setItem(key, value);
  }

  const newObj = {};
  for (const key in obj) {
    const value = localStorage.getItem(key);
    newObj[key] = value;
  }

  return newObj;
}
