export const checkStart = (point, isAdd, text) => {
  document.querySelectorAll('.answers__item').forEach((el) => {
    el.style = `pointer-events: ${point}`;
    el.classList.remove('item_active');
  });
  if (isAdd) {
    document.querySelector('.hints-translation').classList.add('hidden');
    document.querySelector('.hints-input').classList.remove('hidden');
    document.querySelector('.hints-translation').textContent = '';
    document.querySelector('#results-speak').textContent = 'Закончить игру';
  } else {
    document.querySelector('.hints-translation').classList.remove('hidden');
    document.querySelector('.hints-input').classList.add('hidden');
    document.querySelector('.hints-input').value = '';
    document.querySelector('#results-speak').textContent = 'Результат';
  }

  document.querySelector('#start-speak').textContent = text;
};
