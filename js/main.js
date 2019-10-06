let modalOverlay = document.querySelector('.overlay');
let btnFeedback = document.querySelector('.popup-feedback');
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


for (let i = 0; i < btnAddingSet.length; i++) {
    let btnAdding = btnAddingSet[i];
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

let btnMap = document.querySelector('.about__map');
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

let serviceTabsBtns = document.querySelectorAll('.service__btn');
let serviceTabContents = document.querySelectorAll('.service__item')

for (let i = 0; i < serviceTabsBtns.length; i++) {
    serviceTabsBtns[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        for (let i = 0; i < serviceTabsBtns.length; i++) {
            serviceTabsBtns[i].classList.remove('btn-active');
            serviceTabContents[i].classList.remove('service__tab-show');
        }
        serviceTabContents[i].classList.add('service__tab-show')
        serviceTabsBtns[i].classList.add('btn-active');
    });
}

function initMap() {
    let opt = {
        center: { lat: 59.939, lng: 30.316 },
        zoom: 16,
    }

    let map = new google.maps.Map(document.querySelector('.map__google'), opt);

    let marker = new google.maps.Marker({
        position: { lat: 59.938824, lng: 30.3231 },
        map: map,
        icon: '../img/map-marker.png',
        title: 'г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8',
    })
};