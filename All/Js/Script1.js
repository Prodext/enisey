function redirectToTicketsPage() {
    // Замените 'tickets.html' на URL вашей страницы с билетами
    window.location.href = 'tickets.html';
}
function redirectToTicketsPage1() {
    // Замените 'tickets.html' на URL вашей страницы с билетами
    window.location.href = 'shop.html';
}
function redirectToTicketsPage2() {
    // Замените 'tickets.html' на URL вашей страницы с билетами
    window.location.href = 'tour.html';
}
// Функция для переключения состояния dropdown-content
function toggleDropdown() {
    event.preventDefault();
    var dropdownContent = document.getElementById("dropdownContent");
    var toggleButton = document.getElementById('toggleButton');
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        toggleButton.classList.remove('rotate'); // Удаляем класс для возврата кнопки в исходное состояние
    } else {
        dropdownContent.style.display = "block";
        toggleButton.classList.add('rotate'); // Добавляем класс для вращения кнопки
    }
}

// Привязываем функцию к кнопке "a"
document.getElementById("toggleButton").addEventListener("click", toggleDropdown);





function toggleDropdown1() {
    event.preventDefault();
    var mediaDropdownContent = document.getElementById('mediaDropdownContent');
    var toggleMediaButton = document.getElementById('toggleMediaButton');
    if (mediaDropdownContent.style.display === 'block') {
        mediaDropdownContent.style.display = 'none';
        toggleMediaButton.classList.remove('rotate'); // Удаляем класс для возврата кнопки в исходное состояние
    } else {
        mediaDropdownContent.style.display = 'block';
        toggleMediaButton.classList.add('rotate'); // Добавляем класс для вращения кнопки
    }
}
document.getElementById("toggleMediaButton").addEventListener("click", toggleDropdown1);









function toggleDropdown2() {
    event.preventDefault();
    var contactsDropdownContent = document.getElementById('contactsDropdownContent');
    var toggleContactsButton = document.getElementById('toggleContactsButton');
    if (contactsDropdownContent.style.display === 'block') {
        contactsDropdownContent.style.display = 'none';
        toggleContactsButton.classList.remove('rotate'); // Удаляем класс для возврата кнопки в исходное состояние
    } else {
        contactsDropdownContent.style.display = 'block';
        toggleContactsButton.classList.add('rotate'); // Добавляем класс для вращения кнопки
    }
}
document.getElementById("toggleContactsButton").addEventListener("click", toggleDropdown2);










 // Получаем ссылку на кнопку
 var button = document.getElementById("changeTextButton");
  
 // Функция, которая будет вызываться при нажатии на кнопку
 function changeText() {
   if (button.innerText === "ENG") {
     button.innerText = "RUS";
   } else {
     button.innerText = "ENG";
   }
 }

 // Добавляем обработчик события на кнопку
 button.addEventListener("click", changeText);