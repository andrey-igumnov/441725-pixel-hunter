import intro from './modules/intro';

document.addEventListener(`DOMContentLoaded`, () => {
  let central = document.querySelector(`main.central`);
  central.innerHTML = intro.innerHTML;
});
