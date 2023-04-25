const addBtn = document.getElementById('add');
const main = document.getElementById('main');
const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach(noteLS => {
        addNote(noteLS);
    })
}

addBtn.addEventListener('click', addNote);

function addBtnListeners(note) {
    const editBtn = note.firstElementChild.firstElementChild;
    const deleteBtn = note.firstElementChild.lastElementChild;

    editBtn.addEventListener('click', () => {
        const textarea = getTextarea(editBtn);

        if (textarea.readOnly == false) {
            textarea.readOnly = true;
        }
        else {
            textarea.readOnly = false;
        }
    });

    deleteBtn.addEventListener('click', () => {
        deleteBtn.parentElement.parentElement.remove();
        updateLS();
    });
}

function addTextEventLinstener(textbox) {
    textbox.addEventListener('input', () => {
        updateLS();
    })
}

function getTextarea(child) {
    return child.parentElement.parentElement.lastElementChild;
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');

    const notes = [];

    notesText.forEach(note => notes.push(note.value));

    localStorage.setItem('notes', JSON.stringify(notes));
}

function addNote(text = '') {
    const noteInnerHTML = `
                    <div class="note-header">
                        <i class="fa-solid fa-pen-to-square icon edit"></i>
                        <i class="fa-sharp fa-solid fa-trash icon delete"></i>
                    </div>
                    <textarea class="notefield" id="notefield" name="notefield" rows="20" cols="40"></textarea>`;
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = noteInnerHTML;

    addBtnListeners(note);
    addTextEventLinstener(note.lastElementChild);

    if (typeof text == 'object') {
        text = '';
    }

    note.lastElementChild.value = text;
    main.appendChild(note);
}