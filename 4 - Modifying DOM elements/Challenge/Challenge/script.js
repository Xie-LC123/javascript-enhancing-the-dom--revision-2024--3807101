function changeStyle() {
    let isBold = false;
    let dynamicText = document.getElementById('dynamicText');

    dynamicText.style.backgroundColor = 'lightblue';

    dynamicText.style.fontSize = '18px';

    dynamicText.style.fontWeight = isBold ? 'normal' : 'bold';
    isBold = !isBold;

    dynamicText.style.color = 'green';
}
