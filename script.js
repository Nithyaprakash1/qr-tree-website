// Fetch and display the tree details from the JSON file
fetch('details.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('title').textContent = data.title;
        const image = document.getElementById('treeImage');
        image.src = data.image;
        image.alt = data.title;
        document.getElementById('detailsTitle').textContent = data.detailsTitle;
        document.getElementById('detailsText').textContent = data.detailsText;
    });

document.getElementById('toggleDetails').addEventListener('click', function() {
    const details = document.getElementById('details');
    const image = document.getElementById('treeImage');
    const title = document.getElementById('title');

    if (details.style.opacity === '0' || details.style.opacity === '') {
        details.style.opacity = '1';
        details.style.height = 'auto';
        image.classList.add('small');
    } else {
        details.style.opacity = '0';
        details.style.height = '0';
        image.classList.remove('small');
    }
});
