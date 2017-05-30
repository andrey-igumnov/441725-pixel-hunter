import htmlToElement from './../htmlToElement';
import greeting from './greeting';

const template = `  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`;

export default function (central) {
  htmlToElement(central, template);

  const asterisk = central.querySelector(`.intro__asterisk`);
  const switchToGreeting = () => {
    asterisk.removeEventListener(`click`, switchToGreeting);
    greeting(central);
  };

  asterisk.addEventListener(`click`, switchToGreeting);
}
