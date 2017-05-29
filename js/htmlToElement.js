import footer from './controls/footer';

export default function transform(central, htmlString) {
  const template = document.createElement(`div`);
  template.innerHTML = htmlString;

  template.appendChild(footer());
  central.innerHTML = template.innerHTML;
}
