let config = {
    'lineSize': 5,
    'color': 'black'
}

window.onload = () => {

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    canvas.setAttribute('width', 1000);
    canvas.setAttribute('height', 800);

    ctx.lineWidth = config.lineSize;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = config.color;
    ctx.fillStyle = config.color;

    let coords = {
        posX: [],
        posY: []
    }

    canvas.addEventListener("mousedown", function (event) {
        document.querySelector("body").style.overflow = 'hidden';
        ctx.beginPath();
        canvas.onmousemove = (event) => recordMousePos(event);
    });

    canvas.addEventListener("mouseup", stopDrawing);

    function recordMousePos(event) {
        coords.posX.push(event.clientX);
        coords.posY.push(event.clientY);
        drawLine(event.clientX + window.pageXOffset, event.clientY + window.pageYOffset);
    }

    function drawLine(x, y) {
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    function stopDrawing() {
        document.querySelector("body").style.overflow = 'visible';
        canvas.onmousemove = null;
        coords.posX.push(undefined);
        coords.posY.push(undefined);
    }
}