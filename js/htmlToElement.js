import footer from './controls/footer';

export default function htmlToElement(central, htmlString) {
  while (central.firstChild) {
    central.removeChild(central.firstChild);
  }

  const template = document.createElement(`div`);
  template.innerHTML = htmlString;

  template.appendChild(footer());

  // template.childNodes.forEach((node) => central.appendChild(node));
  central.innerHTML = template.innerHTML;
}
