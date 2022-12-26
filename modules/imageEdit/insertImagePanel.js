let row = document.querySelector('.insertImagePanel').querySelector('.row');
let file_radio = document.querySelector('#insertByFile');
let url_radio = document.querySelector('#insertByUrl');

function urlMode () {
    row.style.overflow = '';
    row.style.width = '';
}

function fileMode () {
    row.style.overflow = 'hidden';
    row.style.width = '238.5px';
}

url_radio.addEventListener('change', urlMode);
file_radio.addEventListener('change', fileMode);

