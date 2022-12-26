let viewing_area = document.querySelector('.viewing-area');
let figures = document.querySelector('.figures');
let currentTarget = null;

function dragTarget(event) {
    if (currentTarget !== null)
        return;

    currentTarget = event.target;

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
        currentTarget.onmouseup = null;
        currentTarget = null;
    }
    document.onmouseup = stopDrag;
}
function createRectangle () {
    let figure = document.createElement('div');
    figure.style.width = '300px';
    figure.style.height = '150px';
    figure.style.border = '1px solid black';
    figure.style.position = 'absolute';

    figure.addEventListener('mousedown', dragTarget);
    viewing_area.append(figure);
}
function createEllipse () {
    let figure = document.createElement('div');

    figure.style.width = '200px';
    figure.style.height = '200px';
    figure.style.border = '1px solid black';
    figure.style.borderRadius = '100px';
    figure.style.position = 'absolute';

    figure.addEventListener('mousedown', dragTarget);
    viewing_area.append(figure);
}

document.querySelector('.rectangle').addEventListener('click', createRectangle);
document.querySelector('.ellipse').addEventListener('click', createEllipse);

