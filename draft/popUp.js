class popUp {
    static currentElement = document.querySelector('.element');
    static font = {};

    static color = {};

    static resize = {
        width: {
            querySelector: document.querySelector('.width'),
            action() {
                popUp.currentElement.style.width = String(popUp.resize.width.querySelector.value)+'px';
            },
        },
        height: {
            querySelector: document.querySelector('.height'),
            action() {
                popUp.currentElement.style.height = String(popUp.resize.height.querySelector.value)+'px';
            }
        }
    };

    static download = {};

    // static onInput(event) {
    //     let dataAction = event.target.dataset.action;
    //     if (dataAction) {
    //         popUp[dataAction].action();
    //     }
    // };

}

popUp.resize.width.querySelector.addEventListener('input', popUp.resize.width.action);
popUp.resize.height.querySelector.addEventListener('input', popUp.resize.height.action);