let insert_image = document.forms.insert_image;
let url_input = document.querySelector('.url-input');
let file_input = document.querySelector('.file-input');
let submit = document.querySelector('.submit');
let viewing_area = document.querySelector('.viewing-area');
let submit2 = document.querySelector('.submit2');

function  dragImage (event) {
    let image = event.target;
    let shiftX = event.clientX - image.getBoundingClientRect().left;
    let shiftY = event.clientY - image.getBoundingClientRect().top;

    image.style.position = 'absolute';

    function moveAt (event) {
        let posX = event.clientX;
        let posY = event.clientY;

        image.style.top = posX + 'px';
        image.style.left = posY + 'px';
    }

    image.addEventListener('mousemove', moveAt);

    function finishDrag () {
        image.removeEventListener('mousemove', moveAt);
    }

    image.addEventListener('mouseup', finishDrag);
}

function insertByUrl(event) {
    let image = document.createElement('img');
    image.src = url_input.value;
    viewing_area.append(image);
    image.ondragstart = function () {
        return false;
    };

    image.addEventListener('mousedown', dragImage);
}

function insertByFile() {
    let image = document.createElement('img');
    let file = file_input.files[0];
    let fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = function () {
        image.src = fileReader.result;
    }

    viewing_area.append(image);

    image.ondragstart = function () {
        return false;
    }
}




submit.addEventListener('click', insertByUrl);
submit2.addEventListener('click', insertByFile);