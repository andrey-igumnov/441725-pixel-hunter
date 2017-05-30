import htmlToElement from './../htmlToElement';
import greeting from './greeting';

const template = `  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`;

let element = null;

export default function (central) {
  if (element === null) {
    element = htmlToElement(central, template);
    central.querySelector(`.intro__asterisk`).addEventListener(`click`, () => greeting(central));
  }
}
