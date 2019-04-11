const switcher = document.querySelector('#cbx'),
    more = document.querySelector('.more'),
    modal = document.querySelector('.modal'),
    videos = document.querySelectorAll('.videos_item');
let player;

function bindSlideToggle(trigger, boxBoddy, content, openClass) {
    let button = {
        'element': document.querySelector(trigger),
        'active': false
    };
    const box = document.querySelector(boxBoddy),
        boxContent = document.querySelector(content);

    button.element.addEventListener('click', () => {
        if (button.active === false) { // Проверяем меню на неактивность
            button.active = true;      // если она не активна - то мы делаем ее активной
            box.style.height = boxContent.clientHeight + 'px';
            box.classList.add(openClass); // Активный класс для меню
        } esle {
            button.active = false;
            box.style.height = 0 + 'px';
            box.classList.remove(openClass);
        }
    });
}
bindSlideToggle('.hamburger', '[data-slide="nav"]', '.header__menu', 'slide-active');