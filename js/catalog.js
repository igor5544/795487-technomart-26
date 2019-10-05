let modalOverlay = document.querySelector('.overlay');
let btnAddingSet = document.querySelectorAll('.price__buy');
let modalAdding = document.querySelector('.adding');
let closeAddink = modalAdding.querySelector('.modal__close');


for (i = 0; i < btnAddingSet.length; i++) {
    btnAdding = btnAddingSet[i];
    btnAdding.addEventListener('click', function (evt) {
        evt.preventDefault();
        modalAdding.classList.add('modal-show');
        modalOverlay.classList.add('overlay-show');
    });
}

closeAddink.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalAdding.classList.remove('modal-show');
    modalOverlay.classList.remove('overlay-show')
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode == 27) {
        evt.preventDefault();
        if (modalAdding.classList.contains('modal-show')) {
            modalAdding.classList.remove('modal-show');
            modalOverlay.classList.remove('overlay-show');
        }
    }
});

modalOverlay.addEventListener('click', function () {
    modalAdding.classList.remove('modal-show');
    modalOverlay.classList.remove('overlay-show');
});