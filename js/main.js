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
    if (canSlideLeft()) {
      selectTemplate(templateIndex - 1);
    }
  };

  const slideRight = () => {
    if (canSlideRight()) {
      selectTemplate(templateIndex + 1);
    }
  };

  const canSlideLeft = () => {
    return templateIndex > 0;
  };

  const canSlideRight = () => {
    return templateIndex < templatesOrder.length - 1;
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
      if (canSlideLeft()) {
        event.preventDefault();
        slideLeft();
      }
    }

    if (event.altKey && event.code === `ArrowRight`) {
      if (canSlideRight()) {
        event.preventDefault();
        slideRight();
      }
    }
  });
})();
