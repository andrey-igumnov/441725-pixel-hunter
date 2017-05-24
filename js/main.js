(() => {
  const templatesOrder = [
    `greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`
  ];

  let central;
  let templates = {};
  let templateIndex;

  const getTemplateIndex = (id) => templatesOrder.indexOf(id);

  const selectTemplate = (index) => {
    templateIndex = index;
    central.innerHTML = templates[templatesOrder[index]].innerHTML;
  };

  const slideLeft = () => {
    if (templateIndex > 0) {
      selectTemplate(templateIndex - 1);
    }
  };

  const slideRight = () => {
    if (templateIndex < templatesOrder.length - 1) {
      selectTemplate(templateIndex + 1);
    }
  };

  document.addEventListener(`DOMContentLoaded`, () => {
    let templateElements =
      Array.from(document.getElementsByTagName(`template`));

    central = document.querySelector(`main.central`);
    templateElements.forEach((el) => (templates[el.id] = el));
    selectTemplate(getTemplateIndex(`greeting`));
  });

  document.addEventListener(`keydown`, (event) => {
    if (event.altKey && event.code === `ArrowLeft`) {
      event.preventDefault();
      slideLeft();
    }

    if (event.altKey && event.code === `ArrowRight`) {
      slideRight();
    }
  });
})();
