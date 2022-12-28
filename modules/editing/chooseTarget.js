let currentElement = null;

function chooseTarget (event) {
    if (currentElement) {
        currentElement.style.outline = 'none';
        currentElement.style.resize = '';
        currentElement.style.overflow = '';
        console.log("Done");
    }
    event.preventDefault();

    currentElement = event.target
    currentElement.style.outline = '5px solid lightblue';
    currentElement.style.resize = 'both';
    currentElement.style.overflow = 'auto';

    Toolbar.currentElement = currentElement;
    popUp.currentElement = currentElement;

    restoreProperties(currentElement);
}
function restoreProperties (element) {
    if (element.style.textDecoration === 'underline') {
        Toolbar.underline.querySelector.style.background = '#9861BC';
    }
    else {
        Toolbar.underline.querySelector.style.background = '';
    }
    let width_input = document.querySelector('.width-field').querySelector('.width');
    let height_input = document.querySelector('.height-field').querySelector('.height')

    width_input.value = element.getBoundingClientRect().width;
    height_input.value = element.getBoundingClientRect().height;
    popUp.resize.width.size.querySelector.textContent = `${Math.round(element.getBoundingClientRect().width)}px`;
    popUp.resize.height.size.querySelector.textContent = `${Math.round(element.getBoundingClientRect().height)}px`;
}
function resetTarget (event) {
    if (event.target !== currentElement && event.target.parentElement === viewing_area) {
        event.preventDefault();
        currentElement.style.outline = 'none';
        popUp.currentElement = null;
        Toolbar.currentElement = null;
    }
}
viewing_area.addEventListener('contextmenu', resetTarget);
