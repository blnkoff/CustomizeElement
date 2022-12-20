let url_input = document.querySelector('.url-input');
let file_input = document.querySelector('.file-input');
let submit = document.querySelector('.submit');
let viewing_area = document.querySelector('.viewing-area');
let submit2 = document.querySelector('.submit2');

function dragImage(event) {
    let image = event.target;
    let shiftX = event.clientX - image.getBoundingClientRect().left;
    let shiftY = event.clientY - image.getBoundingClientRect().top;
    let width = image.getBoundingClientRect().width;
    let height = image.getBoundingClientRect().height;

    image.style.position = 'absolute';
    image.style.maxWidth = width + 'px';
    image.style.maxHeight = height + 'px';


    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        image.style.left = pageX - shiftX + 'px';
        image.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        if (event.clientX > viewing_area.getBoundingClientRect().right) {
            viewing_area.scroll(10, 0);
        }

        if (event.clientY > viewing_area.getBoundingClientRect().top) {
            viewing_area.scroll(0, 10);
        }

        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    function stopDrag() {
        document.removeEventListener('mousemove', onMouseMove);
        image.onmouseup = null;
    }

    image.onmouseup = stopDrag;

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
    };
    image.addEventListener('mousedown', dragImage);
}


submit.addEventListener('click', insertByUrl);
submit2.addEventListener('click', insertByFile);