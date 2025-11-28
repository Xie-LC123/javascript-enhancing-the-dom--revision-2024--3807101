document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('changeTextButton').addEventListener('click', () => {
        document.getElementById('para1').textContent = 'Text changed!';
    });

    let para1 = document.getElementById('para1');
    para1.addEventListener('mouseover', () => para1.style.color = 'blue');
    para1.addEventListener('mouseout', () => para1.style.color = 'black');

    document.getElementById('itemList').addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            alert('Clicked on: ' + e.target.textContent);
        }
    });

    document.getElementById('preventLink').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('para2').textContent = 'No no, not going there!';
    });
});
