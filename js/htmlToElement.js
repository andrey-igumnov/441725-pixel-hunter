/*
 * Trasforms HTML string to DOM elemnt
*/
export function transform(htmlString) {
  let template = document.createElement(`template`);
  template.innerHTML = htmlString;
  return template;
}
