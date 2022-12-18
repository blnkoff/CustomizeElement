window.onload = () => {
    let config = {
        lineWidth: 5,
        color: 'rgba(0, 0, 0, 1)',
        colorJSON: '{"r":0,"g":0,"b":0,"a":1}'
    }

    let pencilSizeInput = document.querySelector('.pencilSize');
    let pencilOpacityInput = document.querySelector('.pencilOpacity');
    let undoActionBtn = document.querySelector('.undoAction');
    let clearBtn = document.querySelector('.clear');

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    colorPicker.on('color:change', function(color) {
            config.color = color.rgbaString;
    });

    function changePencilSize (event) {
        config.lineWidth = pencilSizeInput.value;
    }
    function changePencilOpacity (event) {
        ctx.globalAlpha = pencilOpacityInput.value;
    }
    pencilSizeInput.addEventListener('change', changePencilSize);
    pencilOpacityInput.addEventListener('change', changePencilOpacity);

    canvas.setAttribute('width', 1000);
    canvas.setAttribute('height', 800);
    let pencilLog = {
        currentAction: 0,
        actions: [],
        pencilProperties: []
    }

    canvas.addEventListener("mousedown", function (event) {
        document.querySelector("body").style.overflow = 'hidden';
        ctx.lineWidth = config.lineWidth;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = config.color;
        ctx.fillStyle = config.color;
        ctx.beginPath();
        pencilLog.actions.push([]);
        pencilLog.pencilProperties.push([config.color, config.lineWidth, ctx.globalAlpha]);
        canvas.onmousemove = (event) => recordMousePos(event);
    });

    canvas.addEventListener("mouseup", stopDrawing);
    function recordMousePos(event) {
        pencilLog.actions[pencilLog.currentAction].push([event.pageX, event.pageY]);
        drawLine(event.pageX, event.pageY);
    }
    function drawLine(x, y) {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    function stopDrawing() {
        document.querySelector("body").style.overflow = 'visible';
        canvas.onmousemove = null;
        pencilLog.currentAction++;
    }
    function undoAction () {
        if (pencilLog.currentAction !== 0) {
            pencilLog.actions.pop();
            pencilLog.pencilProperties.pop();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pencilLog.currentAction--;

            pencilLog.actions.forEach(function(item, i) {
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

    function clear () {
        pencilLog.actions = [];
        pencilLog.pencilProperties = [];
        pencilLog.currentAction = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    clearBtn.addEventListener('click', clear);
    undoActionBtn.addEventListener('click', undoAction);
}