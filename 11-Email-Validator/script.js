'use strict';

const emailRegex = new RegExp(
  '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
    '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
    '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
);

document.querySelectorAll('.email-input').forEach(container => {
  const input = container.querySelector('input');
  input.addEventListener('keyup', () => {
    container.classList.toggle('valid', emailRegex.test(input.value));
  });
});
