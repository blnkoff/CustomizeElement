class Toolbar {
    static querySelector = document.querySelector('.toolbar');
    static currentElement = document.querySelector('.element');
    static openHide = {
        toolbar: {
            querySelector: document.querySelector('.toolbar').firstElementChild,
            chevron: {
                querySelector: document.querySelector('.toolbar-btn > .chevron'),
            },
            action() {
                if (Toolbar.openHide.toolbar.querySelector.classList.contains('open')) {
                    Toolbar.openHide.toolbar.open();
                } else {
                    Toolbar.openHide.toolbar.hide()
                }
            },
            open() {
                Toolbar.querySelector.style.height = '660px';
                Toolbar.openHide.toolbar.querySelector.style.order = '10';
                Toolbar.openHide.toolbar.classSwap();
            },
            hide() {
                Toolbar.querySelector.style.height = '60px';
                Toolbar.openHide.toolbar.querySelector.style.order = '0';
                Toolbar.openHide.toolbar.classSwap();
            },
            classSwap() {
                Toolbar.openHide.toolbar.chevron.querySelector.classList.toggle('chevron-down');
                Toolbar.openHide.toolbar.chevron.querySelector.classList.toggle('chevron-up');
                Toolbar.openHide.toolbar.querySelector.classList.toggle('open');
                Toolbar.openHide.toolbar.querySelector.classList.toggle('hide');
            }
        },
        resizePopUp: {
            querySelector: document.querySelector('.resizePopUp').lastElementChild.previousElementSibling,
            chevron: {
                querySelector: document.querySelector('.popUp-btn > .chevron'),
            },
            action() {
                if (Toolbar.openHide.resizePopUp.querySelector.classList.contains('open')) {
                    Toolbar.openHide.resizePopUp.open();
                } else {
                    Toolbar.openHide.resizePopUp.hide();
                }
            },
            open() {
                document.querySelector('.resizePopUp').style.width = '882px';
                Toolbar.openHide.resizePopUp.querySelector.style.order = '2';
                Toolbar.openHide.resizePopUp.classSwap();
            },
            hide() {
                document.querySelector('.resizePopUp').style.width = '480px';
                Toolbar.openHide.resizePopUp.querySelector.style.order = '0';
                Toolbar.openHide.resizePopUp.classSwap();
            },
            classSwap() {
                Toolbar.openHide.resizePopUp.chevron.querySelector.classList.toggle('chevron-right');
                Toolbar.openHide.resizePopUp.chevron.querySelector.classList.toggle('chevron-left');
                Toolbar.openHide.resizePopUp.querySelector.classList.toggle('open');
                Toolbar.openHide.resizePopUp.querySelector.classList.toggle('hide');
            }
        }
    };
    static font = {
        querySelector: document.querySelector('.font'),
        action() {
            let fontPopUp = document.querySelector('.fontPopUp');
            let visibilityStatus = fontPopUp.style.opacity === '1';
            if (visibilityStatus) {
                fontPopUp.style.opacity = '0';
            } else {
                fontPopUp.style.opacity = '1';
            }
        }
    };
    static underline = {
        querySelector: document.querySelector('.underline'),
        action() {
            let textToUnderline = Toolbar.currentElement.querySelector('.text').style.textDecoration;
            if (textToUnderline === 'underline') {
                Toolbar.currentElement.querySelector('.text').style.textDecoration = 'none';
                Toolbar.underline.querySelector.style.background = '';
            } else {
                Toolbar.currentElement.querySelector('.text').style.textDecoration = 'underline';
                Toolbar.underline.querySelector.style.background = '#9861BC';
            }
        }
    };
    static italic = {
        querySelector: document.querySelector('.italic')
    };
    static color = {
        querySelector: document.querySelector('.color'),
        action() {
            let colorPicker = document.querySelector('.colorPicker');
            let visibilityStatus = colorPicker.style.opacity === '1';
            if (visibilityStatus) {
                colorPicker.style.opacity = '0';
            } else {
                colorPicker.style.opacity = '1';
            }
        }
    };
    static pencil = {
        querySelector: document.querySelector('.pencil'),
        action() {
            let color = `rgb(152, 97, 188)`;
            if (Toolbar.pencil.querySelector.style.background !== color)
                Toolbar.pencil.querySelector.style.background = color;
            else
                Toolbar.pencil.querySelector.style.background = '';

            draw();
        },
    };
    static resize = {
        querySelector: document.querySelector('.resize'),
        action() {
            let popUp = document.querySelector('.resizePopUp');
            let visibilityStatus = popUp.style.opacity === '1';
            console.log(visibilityStatus);
            if (visibilityStatus) {
                popUp.style.opacity = '0';
            } else {
                popUp.style.opacity = '1';
                console.log(popUp.style.opacity);
            }
        }
    };
    static download = {
        querySelector: document.querySelector('.download')
    };

    static onClick(event) {
        let dataAction = event.target.dataset.action;
        console.log(event.target.dataset.action);
        if (dataAction) {
            if (dataAction !== "openHide") {
                Toolbar[dataAction].action();
            } else {
                let nodeType = event.target.parentElement;
                let type = nodeType.classList[0];

                if (nodeType.classList.contains('toolbar-btn')) {
                    nodeType = nodeType.parentElement;
                }

                if (nodeType.classList[1] !== "toolbar-btn") {
                    type = nodeType.classList[1];
                }
                console.log(type);
                Toolbar.openHide[type].action();
            }
        }
    };

    static getBtnSelectors() {
        let selectors = [];

        for (let property in Toolbar) {
            selectors.push(Toolbar[property].querySelector);
        }

        return selectors;
    }
}

Object.defineProperties(Toolbar, {
    'querySelector': {
        enumerable: false,
        writable: true,
        configurable: true
    },
    'currentElement': {
        enumerable: false,
        writable: true,
        configurable: true
    },
});

Toolbar.querySelector.addEventListener("click", Toolbar.onClick);
Toolbar.openHide.resizePopUp.querySelector.addEventListener("click", Toolbar.openHide.resizePopUp.action);
//Исправить строку выше