// Создаем кнопку
var button = document.createElement('a');
button.className = 'ticket-button';
button.textContent = 'Билеты';
button.href = '#'; // Замените '#' на ссылку, куда должна вести кнопка

// Добавляем кнопку в контейнер
var buttonContainer = document.getElementById('button-container');
buttonContainer.appendChild(button);