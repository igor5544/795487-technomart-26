let modalOverlay = document.querySelector('.overlay');
let btnFeedback = document.querySelector('.header__links-order');
let modalFeedback = document.querySelector('.feedback');
let closeFeedback = modalFeedback.querySelector('.modal__close');
let formFeedback = modalFeedback.querySelector('.feedback__form');
let formFeedback__name = formFeedback.querySelector('#user-name');
let formFeedback__email = formFeedback.querySelector('#user-email');
let formFeedback__massage = formFeedback.querySelector('#user-message');

let isStorageSupport = true;
let storageLogin;
let storageEmail;

try {
    storageLogin = localStorage.getItem('UserName');
} catch (err) {
    isStorageSupport = false;
}

try {
    storageEmail = localStorage.getItem('email');
} catch (err) {
    isStorageSupport = false;
}

btnFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalFeedback.classList.add('modal-show');
    modalOverlay.classList.add('overlay-show');
    if (storageLogin) {
        formFeedback__name.value = storageLogin;
        formFeedback__email.focus();
    }
    if (storageEmail) {
        formFeedback__email.value = storageEmail;
        formFeedback__massage.focus();
    }
    if (!storageLogin) {
        formFeedback__name.focus();
    }
});

closeFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalFeedback.classList.remove('modal-show');
    modalFeedback.classList.remove('modal-error');
    modalOverlay.classList.remove('overlay-show');
});

formFeedback.addEventListener('submit', function (evt) {
    if (!formFeedback__name.value || !formFeedback__email.value || !formFeedback__massage.value) {
        evt.preventDefault();
        modalFeedback.classList.remove('modal-error');
        modalFeedback.offsetWidth = modalFeedback.offsetWidth;
        modalFeedback.classList.add('modal-error');
    } else if (isStorageSupport) {
        localStorage.setItem('UserName', formFeedback__name.value);
        localStorage.setItem('email', formFeedback__email.value);
    }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode == 27) {
        evt.preventDefault();
        if (modalFeedback.classList.contains('modal-show')) {
            modalFeedback.classList.remove('modal-show');
            modalFeedback.classList.remove('modal-error');
            modalOverlay.classList.remove('overlay-show');
        }
    }
});

modalOverlay.addEventListener('click', function () {
    modalFeedback.classList.remove('modal-show');
    modalFeedback.classList.remove('modal-error');
    modalAdding.classList.remove('modal-show');
    modalMap.classList.remove('modal-show');
    modalOverlay.classList.remove('overlay-show');
});


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

let btnMap = document.querySelector('.popup-map');
let modalMap = document.querySelector('.map');
let closeMap = modalMap.querySelector('.modal__close');

btnMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalMap.classList.add('modal-show');
    modalOverlay.classList.add('overlay-show');
});

closeMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalMap.classList.remove('modal-show');
    modalOverlay.classList.remove('overlay-show')
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode == 27) {
        evt.preventDefault();
        if (modalMap.classList.contains('modal-show')) {
            modalMap.classList.remove('modal-show');
            modalOverlay.classList.remove('overlay-show');
        }
    }
});