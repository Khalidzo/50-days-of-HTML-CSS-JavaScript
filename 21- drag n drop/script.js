const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragstart', function (e) {
        const img = document.createElement('img');
        e.dataTransfer.setDragImage(img, 0, 0);
        console.log(img);
    })

    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    })

    box.addEventListener('dragenter', () => {
        box.classList.add('hoovered');
    })

    box.addEventListener('dragleave', () => {
        box.classList.remove('hoovered');
    })

    box.addEventListener('drop', () => {
        removeSelection();
        box.classList.add('selected');
        box.classList.remove('hoovered');
        box.setAttribute('draggable', true);
    })

});

function removeSelection() {
    boxes.forEach(box => {
        box.classList.remove('selected');
        box.setAttribute('draggable', false);
    })
}
