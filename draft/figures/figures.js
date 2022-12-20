let viewing_area = document.querySelector('.viewing-area');
let figures = document.querySelector('.figures');

function createRectangle () {
    let figure = document.createElement('div');
    figure.style.width = '300px';
    figure.style.height = '150px';
    figure.style.border = '1px solid black';

    viewing_area.append(figure);
}

function createTriangle () {
    let figure = document.createElement('div');

    figure.style.width = '0px';
    figure.style.height = '0px';
    figure.style.borderLeft = '50px solid transparent';
    figure.style.borderRight = '50px solid transparent';
    figure.style.borderBottom = '100px solid red';

    viewing_area.append(figure);
}

function createEllipse () {
    let figure = document.createElement('div');

    figure.style.width = '300px';
    figure.style.height = '150px';
    figure.style.border = '1px solid black';
    figure.style.borderRadius = '300px';

    viewing_area.append(figure);
}

document.querySelector('.rectangle').addEventListener('click', createRectangle);
document.querySelector('.triangle').addEventListener('click', createTriangle);
document.querySelector('.ellipse').addEventListener('click', createEllipse);

// document.querySelector('.rectangle').onclick = createRectangle;