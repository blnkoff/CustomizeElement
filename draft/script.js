class Toolbar {
    static querySelector = document.querySelector('.toolbar');
    static currentElement = document.querySelector('.element');

    static openHide = {
        querySelector: document.querySelector('.toolbar').firstElementChild,
        chevron: {
            querySelector: document.querySelector('.toolbar-btn > .chevron'),
        },
        action () {
            if (Toolbar.openHide.querySelector.classList.contains('open')) {
                Toolbar.openHide.open();
            } else if (Toolbar.openHide.querySelector.classList.contains('hide')) {
                Toolbar.openHide.hide()
            }
        },
        open () {
            Toolbar.querySelector.style.height = '720px';
            Toolbar.querySelector.firstElementChild.style.order = '8';
            Toolbar.openHide.chevron.querySelector.classList.remove('chevron-down');
            Toolbar.openHide.chevron.querySelector.classList.add('chevron-up');

            Toolbar.openHide.querySelector.classList.remove('open');
            Toolbar.openHide.querySelector.classList.add('hide');
        },
        hide () {
            Toolbar.querySelector.style.height = '80px';
            Toolbar.querySelector.firstElementChild.style.order = '0';
            Toolbar.openHide.chevron.querySelector.classList.remove('chevron-up');
            Toolbar.openHide.chevron.querySelector.classList.add('chevron-down');

            Toolbar.openHide.querySelector.classList.remove('hide');
            Toolbar.openHide.querySelector.classList.add('open');
        }
    };

    static font = {
        querySelector: document.querySelector('.font')
    };

    static underline = {
        querySelector: document.querySelector('.underline'),
        action () {
            let textToUnderline = Toolbar.currentElement.querySelector('.text').style.textDecoration;
            if (textToUnderline === 'underline') {
                Toolbar.currentElement.querySelector('.text').style.textDecoration = 'none';
                Toolbar.underline.querySelector.style.background = '';
            }
            else    {
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
        action () {
            let wrapper = document.querySelector('.wrapper');
            let visibilityStatus = wrapper.style.opacity === '1';
            if (visibilityStatus) {
                wrapper.style.opacity = '0';
            }
            else {
                wrapper.style.opacity = '1';
            }
        }
    };

    static resize = {
        querySelector: document.querySelector('.resize')
    };

    static download = {
        querySelector: document.querySelector('.download')
    };

    static lock = {
        querySelector: document.querySelector('.lock')
    };

    static onClick (event) {
        let dataAction = event.target.dataset.action;
        if (dataAction) {
            Toolbar[dataAction].action();
        }
    };
    //Разобраться побольше в делигировании
    //Добавить bold
}

class JSONSave {

}

class fontFamily {

}

Toolbar.querySelector.addEventListener("click",Toolbar.onClick);



