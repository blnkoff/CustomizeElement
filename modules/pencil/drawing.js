let viewing_area = document.querySelector('.viewing-area');
let workspace = document.querySelector('.workspace');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
//Поправить с рисованием во время скролла

let config = {
    lineWidth: 5,
    color:
        'rgba(0, 0, 0, 1)',
    colorJSON: '{"r":0,"g":0,"b":0,"a":1}'
}
let pencilLog = {
    currentAction: 0,
    actions: [],
    pencilProperties: []
}

canvas.setAttribute('width', viewing_area.getBoundingClientRect().width - 12) ;
canvas.setAttribute('height', viewing_area.getBoundingClientRect().height - 12);

function changeCanvasSize () {
    console.log(viewing_area.scrollWidth - 12);
    console.log(viewing_area.scrollHeight - 12);
    canvas.style.top = '0';
    canvas.style.left = '0';
}

canvas.addEventListener("elemChange", changeCanvasSize);

function pencilValidation () {
    let pencil = document.querySelector('.pencil');
    return pencil.style.background === 'rgb(152, 97, 188)';
}

function draw() {
    if (!pencilValidation()) return;

    let pencilSizeInput = document.querySelector('.pencilSize');
    let pencilOpacityInput = document.querySelector('.pencilOpacity');
    let undoActionBtn = document.querySelector('.undoAction');
    let clearBtn = document.querySelector('.clear');

    pencilColorPicker.on('color:change', function (color) {
        config.color = color.rgbaString;
    });

    function changePencilSize(event) {
        if (!pencilValidation()) return;
        config.lineWidth = pencilSizeInput.value;
        document.querySelector('.size-field').querySelector('.size').textContent = pencilSizeInput.value + 'px';
    }

    function changePencilOpacity(event) {
        if (!pencilValidation()) return;
        ctx.globalAlpha = pencilOpacityInput.value;
        let value = pencilOpacityInput.value * 100 + '%';
        if (value.length <= 4) {
            document.querySelector('.opacity-field').querySelector('.size').textContent = value;
        }
    }

    pencilSizeInput.addEventListener('input', changePencilSize);
    pencilOpacityInput.addEventListener('input', changePencilOpacity);

    function startDraw (event) {
        if (!pencilValidation()) return;

        ctx.lineWidth = config.lineWidth;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = config.color;
        ctx.fillStyle = config.color;
        ctx.beginPath();
        pencilLog.actions.push([]);
        pencilLog.pencilProperties.push([config.color, config.lineWidth, ctx.globalAlpha]);
        canvas.onmousemove = (event) => recordMousePos(event);
    }

    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mouseup", stopDrawing);

    function recordMousePos(event) {
        if (!pencilValidation()) return;

        let posX, posY;
        posX = event.clientX - viewing_area.getBoundingClientRect().left;
        posY = event.clientY - viewing_area.getBoundingClientRect().top - 6;
        pencilLog.actions[pencilLog.currentAction].push([posX, posY]);
        console.log("record");
        console.log((posX) + '-' + (posY));
        console.log(window.scrollY);
        drawLine(posX, posY);
    }

    function drawLine(x, y) {
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    function stopDrawing() {
        if (!pencilValidation()) return;

        canvas.onmousemove = null;
        pencilLog.currentAction++;
    }

    function undoAction() {
        if (!pencilValidation()) return;
        if (pencilLog.currentAction !== 0) {
            pencilLog.actions.pop();
            pencilLog.pencilProperties.pop();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pencilLog.currentAction--;

            pencilLog.actions.forEach(function (item, i) {
                let properties = pencilLog.pencilProperties[i];
                ctx.strokeStyle = properties[0];
                ctx.fillStyle = properties [0];
                ctx.lineWidth = properties [1];
                ctx.globalAlpha = properties [2];
                ctx.beginPath();
                item.forEach(function (pos, i) {
                    if (i === 0) {
                        ctx.moveTo(pos[0], pos[1]);
                    }
                    drawLine(pos[0], pos[1]);
                })
            })
        }
    }

    function clear() {
        if (!pencilValidation()) return;
        pencilLog.actions = [];
        pencilLog.pencilProperties = [];
        console.log(pencilLog.currentAction);
        pencilLog.currentAction = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    clearBtn.addEventListener('click', clear);
    undoActionBtn.addEventListener('click', undoAction);

}