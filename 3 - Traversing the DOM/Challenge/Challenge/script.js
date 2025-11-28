let catElement = document.querySelector('#animalFamilyTree li:nth-child(2)');
console.log('Parent of Cat:', catElement.parentNode);

let catsParent = catElement.parentNode;
Array.from(catsParent.children).forEach(child => {
    console.log('Child of Cat\'s Parent:', child.textContent);
});

let catsParentSibling = catsParent.nextElementSibling;
console.log('Cat\'s Parent Next Sibling:', catsParentSibling ? catsParentSibling.textContent : 'No next sibling');
