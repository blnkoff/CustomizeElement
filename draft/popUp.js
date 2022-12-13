class popUp {
    static currentElement = document.querySelector('.element');
    static font = {};

    static color = {};
    static resize = {
        querySelector: document.querySelector('.resizePopUp'),
        width: {
            querySelector: document.querySelector('.width'),
            action() {
                if (popUp.opacityValidation(popUp.resize.querySelector)) {
                    let currentValue = String(popUp.resize.width.querySelector.value)+'px';
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
                let currentValue = String(popUp.resize.height.querySelector.value)+'px';
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
        if (popUp.style.opacity === '1') {
            return true;
        } else {
            return false;
        }
    };
    //Добавить валидацию в colorPicker.js из этого класса
}

popUp.resize.width.querySelector.addEventListener('input', popUp.resize.width.action);
popUp.resize.height.querySelector.addEventListener('input', popUp.resize.height.action);