let introduction = document.querySelector('.introduction');
let footer = document.querySelector('footer');

let scrollDown = document.querySelector('.scroll-down');
let scrollUp = document.querySelector('.scroll-up');

scrollUp.onclick = () => {
    introduction.scrollIntoView(false);
}

scrollDown.onclick = () =>  {
    footer.scrollIntoView(false);
}

//Добавить дерганье.illustration при движении мыши
