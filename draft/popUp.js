class popUp {
    static currentElement = document.querySelector('.element');
    static font = {
        querySelector: document.querySelector('.fontPopUp'),
        fontSelection: {
            querySelector: document.querySelector('.fontSelectionInput'),
            action () {
                console.log(popUp.font.fontSelection.querySelector.value);
                popUp.currentElement.style.fontFamily = popUp.font.fontSelection.querySelector.value;
            }
        },
        sizeSelection: {
            querySelector: document.querySelector('.sizeSelectionInput'),
            action () {
                console.log(popUp.font.sizeSelection.querySelector.value);
                popUp.currentElement.style.fontSize = popUp.font.sizeSelection.querySelector.value + 'px';
            }
        }
    };
    static color = {};
    static resize = {
        querySelector: document.querySelector('.resizePopUp'),
        width: {
            querySelector: document.querySelector('.width'),
            action() {
                if (popUp.opacityValidation(popUp.resize.querySelector)) {
                    let currentValue = popUp.resize.width.querySelector.value+'px';
                    popUp.currentElement.style.width = currentValue;
                    popUp.resize.width.size.querySelector.textContent = currentValue;
                }
            },
            size: {
                querySelector: document.querySelector('.width-field > .size')
            }
        },
        height: {
            querySelector: document.querySelector('.height'),
            action() {
                let currentValue = popUp.resize.height.querySelector.value+'px';
                popUp.currentElement.style.height = currentValue;
                popUp.resize.height.size.querySelector.textContent = currentValue;
            },
            size: {
                querySelector: document.querySelector('.height-field > .size')
            }
        }
    };
    static download = {};
    static opacityValidation(popUp) {
        return popUp.style.opacity === '1';
    };
    //Добавить валидацию в colorPicker.js из этого класса
}

popUp.resize.width.querySelector.addEventListener('input', popUp.resize.width.action);
popUp.resize.height.querySelector.addEventListener('input', popUp.resize.height.action);
popUp.font.fontSelection.querySelector.addEventListener('showList', popUp.font.fontSelection.action);
popUp.font.sizeSelection.querySelector.addEventListener('showList', popUp.font.sizeSelection.action);