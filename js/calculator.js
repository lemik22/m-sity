const squareRange = document.getElementById('squareRange');
const squareValue = document.getElementById('squareValue');

squareRange.addEventListener('input', () => {
  squareValue.textContent = squareRange.value;
  calculatePrice()
});


// const cornerValue = document.querySelector('.corner-value');
// const cornerMinusBtn = document.querySelector('.corner-minus');
// const cornerPlusBtn = document.querySelector('.corner-plus');

// let cornerStartingValue = 0; // Начальное значение

// cornerMinusBtn.addEventListener('click', () => {
//   if (cornerStartingValue > 0) {
//     cornerStartingValue--;
//     cornerValue.textContent = cornerStartingValue;
//     calculatePrice()
//   }
// });

// cornerPlusBtn.addEventListener('click', () => {
//   cornerStartingValue++;
//   cornerValue.textContent = cornerStartingValue;
//   calculatePrice()
// });

const lightValue = document.querySelector('.light-value');
const lightMinusBtn = document.querySelector('.light-minus');
const lightPlusBtn = document.querySelector('.light-plus');

let lightStartingValue = 0; // Начальное значение

lightMinusBtn.addEventListener('click', () => {
  if (lightStartingValue > 0) {
    lightStartingValue--;
    lightValue.textContent = lightStartingValue;
    calculatePrice()
  } 
});

lightPlusBtn.addEventListener('click', () => {
  lightStartingValue++;
  lightValue.textContent = lightStartingValue;
  calculatePrice()
});

const lampValue = document.querySelector('.lamp-value');
const lampMinusBtn = document.querySelector('.lamp-minus');
const lampPlusBtn = document.querySelector('.lamp-plus');

let lampStartingValue = 0; // Начальное значение

lampMinusBtn.addEventListener('click', () => {
  if (lampStartingValue > 0) {
    lampStartingValue--;
    lampValue.textContent = lampStartingValue;
    calculatePrice()
  } 
});

lampPlusBtn.addEventListener('click', () => {
  lampStartingValue++;
  lampValue.textContent = lampStartingValue;
  calculatePrice()
});

// function newPrice(thisElem, price) {
//   const buttons = document.querySelectorAll('.calculator__tab-button')
//   var ceilingPrice = price
//   buttons.forEach(e => {
//     e.classList.remove('active')
//   });
//   thisElem.classList.add('active')
// }

function calculatePrice() {
  const ceilingPrice = 450
  const priceElem = document.querySelector('.calculator__price-value')
  const squareElem = document.getElementById('squareValue').value
  
  const lightPrice = 500
  const lampPrice = 350
  // const cornerPrice = 350
  
  priceElem.innerHTML = ( ceilingPrice * Number(squareElem) + (lightStartingValue * lightPrice) + (lampStartingValue * lampPrice) ) + '₽'
}

calculatePrice()
