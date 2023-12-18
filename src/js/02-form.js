'use strict';

const localKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

// запис даних у localStorage
const saveToLocalStorage = () => {
  const email = input.value.trim();
  const message = textarea.value.trim();

  if (email || message) {
    localStorage.setItem(localKey, JSON.stringify({ email, message }));
  } else {
    localStorage.removeItem(localKey);
  }
};

// Перевірка наявності збережених даних у localStorage
const savedData = JSON.parse(localStorage.getItem(localKey)) || {};
input.value = savedData.email || '';
textarea.value = savedData.message || '';

// Обробка події input для форми
form.addEventListener('input', event => {
  const elementType = event.target.nodeName.toLowerCase();
  if (elementType === 'input' || elementType === 'textarea') {
    saveToLocalStorage();
  }
});

// Обробка події submit для форми
form.addEventListener('submit', event => {
  event.preventDefault();

  const email = input.value.trim();
  const message = textarea.value.trim();

  if (email && message) {
    console.log({ email, message });

    // Очистка localStorage та полів форми
    localStorage.removeItem(localKey);
    form.reset();
  }
});
