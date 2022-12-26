let addBtn = document.querySelector('.add.image');

function clickByVirus (event) {
    event.target.remove();

    let img = document.createElement('img');
    img.src = 'img/virus2.jpg';
    img.style.position = 'absolute';
    img.style.left = '50%';
    img.style.top = '0px';
    img.style.width = '100px';

    viewing_area.append(img)
}

function addVirus (event) {
    let img = document.createElement('img');
    img.style.position = 'absolute';
    img.style.top = '2000px';
    img.style.left = '0px';
    img.src = 'img/virus.jpg';
    img.style.width = '100px';

    img.addEventListener('click', clickByVirus);
    viewing_area.append(img);
}

addBtn.addEventListener('click', addVirus);