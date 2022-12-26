let url_input = document.querySelector('.url-input');
let add = document.querySelector('.add');
let currentTarget = null;

function dragTarget(event) {
    if (currentTarget !== null)
        return;

    if (document.querySelector('.pencil').style.background === 'rgb(152, 97, 188)')
        return;

    currentTarget = event.target;

    currentTarget.style.cursor = 'grabbing';

    let shiftX = event.clientX - currentTarget.getBoundingClientRect().left;
    let shiftY = event.clientY - currentTarget.getBoundingClientRect().top;
    console.log(shiftX);
    console.log(shiftY);
    let width = currentTarget.getBoundingClientRect().width;
    let height = currentTarget.getBoundingClientRect().height;

    currentTarget.style.maxWidth = width + 'px';
    currentTarget.style.maxHeight = height + 'px';

    function moveAt(posX, posY) {
        currentTarget.style.left = posX - shiftX + 'px';
        currentTarget.style.top = posY - shiftY + 'px';
    }

    function onMouseMove(event) {
        if (event.clientX > viewing_area.getBoundingClientRect().right ||
            event.clientY > viewing_area.getBoundingClientRect().bottom) {
            stopDrag();
            return;
        }

        let posX, posY;
        posX = event.clientX - viewing_area.getBoundingClientRect().left;
        posY = event.clientY - 44;

        moveAt(posX, posY);
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
    image.style.position = 'absolute';
    viewing_area.append(image);
    image.ondragstart = function () {
        return false;
    };

    image.ondragend = function () {
        return false;
    };

    console.log("insert");

    image.addEventListener('mousedown', dragTarget);
}

// function insertByFile() {
//     let image = document.createElement('img');
//     let file = file_input.files[0];
//     let fileReader = new FileReader();
//
//     fileReader.readAsDataURL(file);
//
//     fileReader.onload = function () {
//         image.src = fileReader.result;
//     }
//
//     viewing_area.append(image);
//
//     image.ondragstart = function () {
//         return false;
//     };
//
//     image.ondragend = function () {
//         return false;
//     };
//
//     image.addEventListener('mousedown', dragTarget);
// }

add.addEventListener('click', insertByUrl);

//исправить курсор