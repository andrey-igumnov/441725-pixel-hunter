import htmlToElement from './../htmlToElement';
import greeting from './greeting';

export default function (central) {
  htmlToElement(central, `  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`);

  central.querySelector(`.intro__asterisk`).addEventListener(`click`, () => greeting(central));
}
