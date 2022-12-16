window.onload = () => {
    let config = {
        lineSize: 5,
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
            // config.colorJSON = JSON.stringify(color.rgba);
            //console.log(JSON.stringify(color.rgba));
    });

    function changePencilSize (event) {
        config.lineSize = pencilSizeInput.value;
    }

    function changePencilOpacity (event) {
        // let rgbaColor;
        // rgbaColor = config.colorJSON;
        // rgbaColor = JSON.parse(rgbaColor);
        // let rgbaColorString;
        // rgbaColorString = `rgba(${rgbaColor.r}, ${rgbaColor.g}, ${rgbaColor.b}, ${pencilOpacityInput.value})`;
        //
        // config.color = rgbaColorString;
        // console.log(rgbaColorString);
        ctx.globalAlpha = pencilOpacityInput.value;
        //console.log(ctx.globalAlpha);
    }

    pencilSizeInput.addEventListener('change', changePencilSize);
    pencilOpacityInput.addEventListener('change', changePencilOpacity);

    canvas.setAttribute('width', 1000);
    canvas.setAttribute('height', 800);

    let pencilLog = {
        currentAction: 0,
        actions: []
    }

    canvas.addEventListener("mousedown", function (event) {
        document.querySelector("body").style.overflow = 'hidden';
        ctx.lineWidth = config.lineSize;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = config.color;
        ctx.fillStyle = config.color;
        ctx.beginPath();
        pencilLog.actions.push([]);
        canvas.onmousemove = (event) => recordMousePos(event);
    });

    canvas.addEventListener("mouseup", stopDrawing);

    function recordMousePos(event) {
        pencilLog.actions[pencilLog.currentAction].push([event.clientX, event.clientY]);
        drawLine(event.clientX + window.pageXOffset, event.clientY + window.pageYOffset);
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
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pencilLog.currentAction--;
            ctx.beginPath();

            pencilLog.actions.forEach(function(item) {
                item.forEach(function (pos, i) {
                    if (i === 0) {
                        ctx.moveTo(pos[0], pos[1]);
                    }
                    drawLine(pos[0] + window.pageXOffset, pos[1] + window.pageYOffset);
                })
            })
        }
    }

    function clear () {
        pencilLog.actions = [];
        pencilLog.currentAction = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    clearBtn.addEventListener('click', clear);
    undoActionBtn.addEventListener('click', undoAction);

}