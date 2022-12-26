//Сделать класс dropdown с конструктором
function showList (args) {
    [...args].forEach(el => {
        el.addEventListener('click', e => {
            if (e.target.tagName === 'BUTTON') {
                el.querySelector('ul').classList.toggle('on')
            }
            if (e.target.tagName === 'LI') {
                el.querySelector('input').value = e.target.textContent;
                el.querySelector('ul').classList.toggle('on');
                const showList = new CustomEvent('showList', {'bubbles': true});

                el.querySelector('input').dispatchEvent(showList);
                console.log(document.dispatchEvent(showList));
            }
        })
    });
}

showList(document.querySelectorAll('.fontSelection'));
showList(document.querySelectorAll('.sizeSelection'));

function highlight (currentList) {
    let currentElem = null;
    function colorize(event) {
        if (currentElem) return;

        let target = event.target.closest('li');

        if (!target) return;

        if (!currentList.contains(target)) return;

        currentElem = target;
        target.style.background = '#EA1A65';
    }

    function uncolorize(event) {
        if (!currentElem) return;

        let relatedTarget = event.relatedTarget;

        while (relatedTarget) {
            if (relatedTarget == currentElem) return;

            relatedTarget = relatedTarget.parentNode;
        }

        currentElem.style.background = '';
        currentElem = null;
    }

    currentList.addEventListener("mouseover", colorize);
    currentList.addEventListener("mouseout", uncolorize);
}

highlight(document.querySelector('.fontSelection > ul'));
highlight(document.querySelector('.sizeSelection > ul'))

