let radioBtns = document.querySelectorAll('.radio-input');

function toggle (event) {
    if (event.target.checked) {
        event.target.parentElement.querySelector('.circle').classList.add('on');
    }

    radioBtns.forEach(btn => {
        if (!btn.checked) {
            btn.parentElement.querySelector('.circle').classList.remove('on');
        }
    })
}

radioBtns.forEach(btn => {
    btn.addEventListener('change', toggle);
});
