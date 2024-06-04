
 // Массив точек с ценами
 const dots = [
    { id: 1, price: 10 },
    { id: 2, price: 20 },
    { id: 3, price: 30 },
    { id: 4, price: 30 },
    { id: 5, price: 30 },
    { id: 6, price: 30 },
    { id: 7, price: 30 },
    { id: 8, price: 30 },
    { id: 9, price: 30 },
    { id: 10, price: 30 },
    { id: 11, price: 30 },
    { id: 12, price: 30 },
    { id: 13, price: 30 },
    { id: 14, price: 30 },
    { id: 15, price: 30 },
    { id: 16, price: 30 },
    { id: 17, price: 30 },
    { id: 18, price: 30 },
    { id: 19, price: 30 },
    { id: 20, price: 30 },
    { id: 21, price: 30 },
    { id: 22, price: 30 },
    { id: 23, price: 30 },
    { id: 24, price: 30 },
    { id: 25, price: 30 },
    { id: 26, price: 30 },
    { id: 27, price: 30 },
    { id: 28, price: 30 },
    { id: 29, price: 30 },
    // Добавьте больше точек с ценами по необходимости
  ];

  // Функция для добавления точек на страницу
  function addDotsToPage() {
    const dotContainer = document.getElementById('dot-container');
    dots.forEach(dot => {
      const dotElement = document.createElement('div');
      dotElement.className = 'dot';
      dotElement.dataset.id = dot.id;
      dotElement.dataset.price = dot.price;
      dotElement.addEventListener('click', handleDotClick);
      dotContainer.appendChild(dotElement);
    });
  }

  // Функция для обработки нажатия на точку
  function handleDotClick(event) {
    const dot = event.target;
    dot.classList.toggle('selected');
    updateCart(dot);
  }

  // Функция для обновления корзины и общей цены
  function updateCart(dot) {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price-value');
    const dotId = dot.dataset.id;
    const dotPrice = parseInt(dot.dataset.price, 10);
    let totalPrice = parseInt(totalPriceElement.textContent, 10);

    if (dot.classList.contains('selected')) {
      // Добавление элемента в корзину
      const cartItem = document.createElement('li');
      cartItem.textContent = `Точка ${dotId} - $${dotPrice}`;
      cartItems.appendChild(cartItem);

      // Увеличение общей цены
      totalPrice += dotPrice;
    } else {
      // Удаление элемента из корзины
      const cartItemToRemove = Array.from(cartItems.children).find(item =>
        item.textContent.includes(`Точка ${dotId}`)
      );
      if (cartItemToRemove) {
        cartItems.removeChild(cartItemToRemove);
      }

      // Уменьшение общей цены
      totalPrice -= dotPrice;
    }

    // Обновление общей цены на странице
    totalPriceElement.textContent = totalPrice;
  }

  // Добавление точек на страницу при загрузке
  addDotsToPage();









 var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  // Нарисуем кривую Безье
  context.beginPath();
  context.moveTo(1242, 812.5); // Стартовая точка
  context.bezierCurveTo(1450, 800, 1442, 592,1442.5, 592); // Конечная точка и две управляющие точки
  context.stroke();
 
  context.beginPath();
  context.moveTo(1242, 162); // Стартовая точка
  context.bezierCurveTo(1450,170.5, 1442, 350,1442.5, 392); // Конечная точка и две управляющие точки
  context.stroke();
 
 
  // Нарисуем вторую кривую Безье
  context.beginPath();
  context.moveTo(642, 812);
  context.bezierCurveTo(434,812.5, 442, 600, 442.5, 592);
  context.stroke();
  // Нарисуем вторую кривую Безье
  context.beginPath();
  context.moveTo(642, 162);
  context.bezierCurveTo(434,170.5, 442, 350, 442.5, 392);
  context.stroke();























// КНОПКИ КУПИТь
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("buyButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

