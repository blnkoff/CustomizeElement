let insert_image = document.forms.insert_image;
let url_input = document.querySelector('.url-input');
let file_input = document.querySelector('.file-input');
let submit = document.querySelector('.submit');
let viewing_area = document.querySelector('.viewing-area');
let submit2 = document.querySelector('.submit2');

function insertByUrl(event) {
    let image = document.createElement('img');
    image.src = url_input.value;
    viewing_area.append(image);
    image.ondragstart = function () {
        return false;
    };

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
}


submit.addEventListener('click', insertByUrl);
submit2.addEventListener('click', insertByFile);