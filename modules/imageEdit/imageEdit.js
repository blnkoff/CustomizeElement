let url_input = document.querySelector('.url-input');
let file_input = document.querySelector('.file-input');
let submit = document.querySelector('.submit');
let viewing_area = document.querySelector('.viewing-area');
let submit2 = document.querySelector('.submit2');
let currentTarget = null;

function dragTarget(event) {
    if (currentTarget !== null)
        return;

    currentTarget = event.target;

    currentTarget.style.cursor = 'grabbing';

    let shiftX = event.clientX - currentTarget.getBoundingClientRect().left;
    let shiftY = event.clientY - currentTarget.getBoundingClientRect().top;
    let width = currentTarget.getBoundingClientRect().width;
    let height = currentTarget.getBoundingClientRect().height;

    currentTarget.style.position = 'absolute';
    currentTarget.style.maxWidth = width + 'px';
    currentTarget.style.maxHeight = height + 'px';


    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        currentTarget.style.left = pageX - shiftX + 'px';
        currentTarget.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        if (event.clientX > viewing_area.getBoundingClientRect().right ||
            event.clientY > viewing_area.getBoundingClientRect().bottom) {
            stopDrag();
            return;
        }

        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    function stopDrag() {
        document.removeEventListener('mousemove', onMouseMove);
        if (currentTarget !== null) {
            currentTarget.style.cursor = 'grab';
            currentTarget.onmouseup = null;
        }
        currentTarget = null;
    }

    document.onmouseup = stopDrag;
}

function insertByUrl(event) {
    let image = document.createElement('img');
    image.src = url_input.value;
    viewing_area.append(image);
    image.ondragstart = function () {
        return false;
    };

    image.ondragend = function () {
        return false;
    };

    image.addEventListener('mousedown', dragTarget);
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
    };

    image.ondragend = function () {
        return false;
    };

    image.addEventListener('mousedown', dragTarget);
}

submit.addEventListener('click', insertByUrl);
submit2.addEventListener('click', insertByFile);

//исправить курсор