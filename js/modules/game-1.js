import htmlToElement from './../htmlToElement';
import game2 from './game-2';
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
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
  </div>`;

let res = `unknown`;

export default function (central, gameState) {

  htmlToElement(central, template, gameState);
  const question1 = document.getElementsByName(`question1`);
  const question2 = document.getElementsByName(`question2`);
  const headerBack = central.querySelector(`.header__back`);

  const switchToGreeting = () => {
    unsubscribe();
    greeting(central);
  };

  const radioButtonClick = () => {
    if ((question1[0].checked || question1[1].checked) &&
        (question2[0].checked || question2[1].checked)) {
      unsubscribe();
      game2(central);
    }
  };

  const unsubscribe = () => {
    question1.forEach((rb) => rb.removeEventListener(`click`, radioButtonClick));
    question2.forEach((rb) => rb.removeEventListener(`click`, radioButtonClick));
    headerBack.removeEventListener(`click`, switchToGreeting);
  };

  question1.forEach((rb) => rb.addEventListener(`click`, radioButtonClick));
  question2.forEach((rb) => rb.addEventListener(`click`, radioButtonClick));
  headerBack.addEventListener(`click`, switchToGreeting);
}

export const result = res;
