let url_input = document.querySelector('.url-input');
let add = document.querySelector('.add');
currentTarget = null;

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

    image.addEventListener('contextmenu', chooseTarget);
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