import footer from './controls/footer';

export default function htmlToElement(central, htmlString) {
  while (central.firstChild) {
    central.removeChild(central.firstChild);
  }

  const template = document.createElement(`div`);
  template.innerHTML = htmlString;

  template.appendChild(footer());

  while (template.firstChild) {
    central.appendChild(template.firstChild);
  }
}
