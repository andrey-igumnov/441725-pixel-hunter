import footer from './controls/footer';
import stats from './controls/stats';

export default function htmlToElement(central, htmlString, gameState) {
  while (central.firstChild) {
    central.removeChild(central.firstChild);
  }

  const template = document.createElement(`div`);
  template.innerHTML = htmlString;

  template.appendChild(footer());

  while (template.firstChild) {
    central.appendChild(template.firstChild);
  }

  if (gameState) {
    central.appendChild(stats(gameState));
  }
}
