
// Фильтр на мобильных устройсвах
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuICon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// Клик по кнопке для скрытия/показа фильтра
sidebarToggleBtn.onclick = function(){
    menuICon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
}

// Показать еще 3 карточки
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card__link--hidden');

btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card__link--hidden');
    })
})

// Показать/скрыть контент внутри виджетов
const widgets = document.querySelectorAll('.widget');
widgets.forEach(function (widget) {
    widget.addEventListener('click', function (e) {
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    })
})

// LOcation - кнопка Любая 
const checkBoxAny =  document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

// Выбор кнопки Любая и отключение других чекбоксов
checkBoxAny.addEventListener('change', function() {
    if (checkBoxAny.checked) {
        topLocationCheckboxes.forEach(function (item) {
            item.checked = false;
        });
    }
})

// Отключение кнопки Любая и нажатии на другие кнопки
topLocationCheckboxes.forEach(function (item) {
    item.addEventListener('change', function() {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false;
        }
    })
})

// Показать еще в "Дополнительные опции"
const showMoreOptions = document.querySelector('.widget__show-hidden');
const hiddenCheckboxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function () {

    // Если блоки были скрыты - значит показываем
    if (showMoreOptions.dataset.options == 'hidden') {
        hiddenCheckboxes.forEach(function (item) {
            item.style.display = 'block';
        });
        showMoreOptions.innerText = 'Скрыть';
        showMoreOptions.dataset.options = 'visible';
    }

    // Если блоки были видны - значит скрываем
    else if (showMoreOptions.dataset.options == 'visible') {
        hiddenCheckboxes.forEach(function (item) {
            item.style.display = 'none';
        });
        showMoreOptions.innerText = 'Показать еще';
        showMoreOptions.dataset.options = 'hidden';
    }
    return false;
}
