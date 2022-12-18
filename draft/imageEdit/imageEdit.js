let insert_image = document.forms.insert_image;
let url_input = document.querySelector('.url-input');
let file_input = document.querySelector('.file-input');
let submit = document.querySelector('.submit');
let viewing_area = document.querySelector('.viewing-area');

function insert (event) {
    if (event.target.name === 'file') {

    }

    if (event.target.name === 'url') {

    }

    if (event.target.name === 'submit') {
        let image = document.createElement('img');
        image.src = url_input.value;
        viewing_area.append(image);
        image.ondragstart = function() {
            return false;
        };
    }
}

insert_image.addEventListener('click', insert);
