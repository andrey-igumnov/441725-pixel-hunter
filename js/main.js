const templatesOrder = [`greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`];
let central;
let currentTemplate;
let templates;

document.addEventListener(`DOMContentLoaded`, () => {
  central = document.querySelector(`main.central`);
  templates = Array.prototype.slice.call(document.getElementsByTagName(`template`), 0);
  setMainCentral(templates.find((t) => t.id === `greeting`));
});

document.addEventListener(`keydown`, (event) => {
  if (event.altKey && event.code === `ArrowLeft`) {
    slideTemplate((index) => index > 0, (index) => index - 1);
  }

  if (event.altKey && event.code === `ArrowRight`) {
    slideTemplate((index) => index < templatesOrder.length - 1, (index) => index + 1);
  }
});

function setMainCentral(template) {
  currentTemplate = template;
  central.innerHTML = template.innerHTML;
}

function slideTemplate(test, modificator) {
  let index = templatesOrder.indexOf(currentTemplate.id);

  if (test(index)) {
    setMainCentral(templates.find((t) => t.id === templatesOrder[modificator(index)]));
  }
}
