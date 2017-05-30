import htmlToElement from './../htmlToElement';
import game1 from './game-1';
import greeting from './greeting';

const template = `  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">NN</h1>
    <div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    </div>
  </header>
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;

export default function (central) {

  htmlToElement(central, template);

  const submitButton = central.querySelector(`.rules__button`);
  const inputTextBox = central.querySelector(`.rules__input`);
  const headerBack = central.querySelector(`.header__back`);

  const inputTextBoxKeyup = (data) => {
    submitButton.disabled = data.srcElement.value === ``;
  };

  const switchToGame1 = () => {
    unsubscribe();
    game1(central);
  };

  const switchToGreeting = () => {
    unsubscribe();
    greeting(central);
  };

  const unsubscribe = () => {
    submitButton.removeEventListener(`click`, switchToGame1);
    inputTextBox.removeEventListener(`keyup`, inputTextBoxKeyup);
    headerBack.removeEventListener(`click`, switchToGreeting);
  };

  inputTextBox.addEventListener(`keyup`, inputTextBoxKeyup);
  submitButton.addEventListener(`click`, switchToGame1);
  headerBack.addEventListener(`click`, switchToGreeting);
}
