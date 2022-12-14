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
                Toolbar.querySelector.style.height = '720px';
                Toolbar.openHide.toolbar.querySelector.style.order = '8';
                Toolbar.openHide.toolbar.classSwap();
            },
            hide() {
                Toolbar.querySelector.style.height = '80px';
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
                document.querySelector('.resizePopUp').style.width = '902px';
                Toolbar.openHide.resizePopUp.querySelector.style.order = '2';
                Toolbar.openHide.resizePopUp.classSwap();
            },
            hide() {
                document.querySelector('.resizePopUp').style.width = '500px';
                Toolbar.openHide.resizePopUp.querySelector.style.order = '0';
                Toolbar.openHide.resizePopUp.classSwap();
            },
            classSwap () {
                Toolbar.openHide.resizePopUp.chevron.querySelector.classList.toggle('chevron-right');
                Toolbar.openHide.resizePopUp.chevron.querySelector.classList.toggle('chevron-left');
                Toolbar.openHide.resizePopUp.querySelector.classList.toggle('open');
                Toolbar.openHide.resizePopUp.querySelector.classList.toggle('hide');
            }
        }
    };
    static font = {
        querySelector: document.querySelector('.font')
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
                Toolbar.underline.querySelector.style.background = '#464545';
            }
        }
    };
    static italic = {
        querySelector: document.querySelector('.italic')
    };
    static color = {
        querySelector: document.querySelector('.color'),
        action() {
            let wrapper = document.querySelector('.wrapper');
            let visibilityStatus = wrapper.style.opacity === '1';
            if (visibilityStatus) {
                wrapper.style.opacity = '0';
            } else {
                wrapper.style.opacity = '1';
            }
        }
    };
    static resize = {
        querySelector: document.querySelector('.resize'),
        action() {
            let popUp = document.querySelector('.resizePopUp');
            let visibilityStatus = popUp.style.opacity === '1';
            if (visibilityStatus) {
                popUp.style.opacity = '0';
            } else {
                popUp.style.opacity = '1';
            }
        }
    };
    static download = {
        querySelector: document.querySelector('.download')
    };
    static lock = {
        querySelector: document.querySelector('.lock'),
        action() {
            let lockBtn = Toolbar.lock.querySelector;
            if (lockBtn.classList.contains('unlocked')) {
                lockBtn.classList.remove('unlocked');
                lockBtn.classList.add('locked');
                Toolbar.querySelector.removeEventListener("click", Toolbar.onClick);
            } else {
                lockBtn.classList.remove('locked');
                lockBtn.classList.add('unlocked');
                Toolbar.querySelector.addEventListener("click", Toolbar.onClick);
            }
        }
    };
    static onClick(event) {
        let dataAction = event.target.dataset.action;
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
Toolbar.lock.querySelector.addEventListener("click", Toolbar.lock.action);
Toolbar.openHide.resizePopUp.querySelector.addEventListener("click", Toolbar.openHide.resizePopUp.action);
//Исправить строку выше




