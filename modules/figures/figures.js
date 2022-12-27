let figures = document.querySelector('.figures');
let currentTarget = null;

function figurePreset (element) {
    element.style.border = '1px solid black';
    element.style.position = 'absolute';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.justifyContent = 'center';
    element.style.textAlign = 'center';
    element.style.fontFamily = document.querySelector('.fontSelectionInput').value;
    element.style.fontSize = document.querySelector('.sizeSelectionInput').value + 'px';

    element.addEventListener('mousedown', dragTarget);
    element.addEventListener('contextmenu', chooseTarget);
    viewing_area.append(element);
}

function createRectangle() {
    let figure = document.createElement('div');
    figure.style.width = '300px';
    figure.style.height = '150px';
    figurePreset(figure);
}

function createEllipse() {
    let figure = document.createElement('div');
    figure.style.width = '200px';
    figure.style.height = '200px';
    figure.style.borderRadius = '100px';

    figurePreset(figure);
}

