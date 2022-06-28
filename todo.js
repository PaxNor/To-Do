
// get element references of interest
const button = document.querySelector('#button');
const textField = document.querySelector('#input');
const list = document.querySelector('#list');

// checkbox event handler
function checkboxClicked() {
    let li = this.parentElement;
    let element = li.querySelector('#todo');

    if(this.checked) {
        let text = element.innerText;
        element.innerHTML = `<del>${text}</del>`;
        li.style.color = "rgb(170, 170, 170";
    }
    else {
        let text = element.innerText;
        element.innerHTML = text;
        li.style.color = "rgb(0, 0, 0)";
    }
}

function remove() {
    let li = this.parentElement;
    li.remove();
}

function addListElement() {
    // create list item
    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item');

    li.innerHTML = `
                    <input type="checkbox" id="checkbox" class="mx-3"></button>
                    <span id="todo">${textField.value}</span>
                    <button type="button" id="removeButton",
                        class="btn btn-sm btn-outline-secondary mx-3">
                        Ta bort
                    </button>
                    `;

    // add event listeners
    li.querySelector(`#checkbox`).addEventListener('click', checkboxClicked);
    li.querySelector(`#removeButton`).addEventListener('click', remove);

    list.appendChild(li);
}

// add event listener
button.addEventListener('click', addListElement);
