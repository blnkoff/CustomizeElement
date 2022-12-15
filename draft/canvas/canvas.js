function draw() {
    let canvas = document.querySelector('canvas');
    if (canvas.getContext){
        let ctx = canvas.getContext('2d');
        // Stroked triangle

        ctx.beginPath()
        ctx.moveTo(250,250);
        ctx.lineTo(350,250);
        ctx.lineTo(350,350);

        ctx.lineTo(375,375);
        ctx.lineTo(375,350);
        ctx.lineTo();
        ctx.closePath();
        ctx.stroke();
    }
}

draw();