/*
 * Trasforms HTML string to DOM element
*/
export default function transform(htmlString) {
  let template = document.createElement(`template`);
  template.innerHTML = htmlString;
  return template;
}
