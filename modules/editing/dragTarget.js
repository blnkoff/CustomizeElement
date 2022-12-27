function dragTarget(event) {
    if (currentTarget !== null)
        return;

    if (document.querySelector('.pencil').style.background === 'rgb(152, 97, 188)')
        return;

    currentTarget = event.target;

    currentTarget.style.cursor = 'grabbing';

    let shiftX = event.clientX - currentTarget.getBoundingClientRect().left;
    let shiftY = event.clientY - currentTarget.getBoundingClientRect().top;
    console.log(shiftX);
    console.log(shiftY);
    let width = currentTarget.getBoundingClientRect().width;
    let height = currentTarget.getBoundingClientRect().height;

    currentTarget.style.width = width + 'px';
    currentTarget.style.height = height + 'px';

    function moveAt(posX, posY) {
        currentTarget.style.left = posX - shiftX + 'px';
        currentTarget.style.top = posY - shiftY + 'px';
    }

    function onMouseMove(event) {
        if (event.clientX > viewing_area.getBoundingClientRect().right ||
            event.clientY > viewing_area.getBoundingClientRect().bottom) {
            stopDrag();
            return;
        }

        let posX, posY;
        posX = event.clientX - viewing_area.getBoundingClientRect().left;
        posY = event.clientY - 44;

        moveAt(posX, posY);
    }

    document.addEventListener('mousemove', onMouseMove);

    function stopDrag() {
        document.removeEventListener('mousemove', onMouseMove);
        if (currentTarget !== null) {
            currentTarget.style.cursor = 'grab';
            currentTarget.onmouseup = null;
        }
        currentTarget = null;
    }

    document.onmouseup = stopDrag;
}