let contentArea = document.getElementById('contentArea');
let addButton = document.createElement('button');
addButton.textContent = 'Add';
contentArea.appendChild(addButton);

let taskList = document.getElementById('taskList');
let newListItem = document.createElement('li');
newListItem.textContent = 'New Task';
taskList.appendChild(newListItem);

let clonedListItem = newListItem.cloneNode(true);
clonedListItem.textContent = 'Cloned Task';
taskList.appendChild(clonedListItem);

let oldParagraph = contentArea.querySelector('p');
let newParagraph = document.createElement('p');
newParagraph.textContent = 'New, more engaging paragraph!';
contentArea.replaceChild(newParagraph, oldParagraph);

let puppyImage = document.getElementById('puppyImage');
puppyImage.parentNode.removeChild(puppyImage);
