let actionButton = document.getElementById('actionButton');
console.log(actionButton);

let infoElements = document.getElementsByClassName('info');
for (let i = 0; i < infoElements.length; i++) {
    console.log(infoElements[i]);
}

let paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
}

let highlightedSpans = document.querySelectorAll('span.highlight');
highlightedSpans.forEach(span => console.log(span));
