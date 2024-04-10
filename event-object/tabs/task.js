// Получаем все наборы вкладок на странице
const tabGroups = document.querySelectorAll('.tab__navigation');

// Перебираем каждый набор вкладок
tabGroups.forEach(tabGroup => {
    // Получаем все вкладки и содержимое вкладок в текущем наборе
    const tabs = tabGroup.querySelectorAll('.tab');
    const tabContents = tabGroup.nextElementSibling.querySelectorAll('.tab__content');

    // Для каждой вкладки устанавливаем обработчик события клика
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Удаляем активный класс у всех вкладок и содержимого вкладок
            tabs.forEach(t => t.classList.remove('tab_active'));
            tabContents.forEach(tc => tc.classList.remove('tab__content_active'));

            // Добавляем активный класс текущей вкладке и соответствующему содержимому
            tab.classList.add('tab_active');
            tabContents[index].classList.add('tab__content_active');
        });
    });
});
