export function resizeElementHeight(element: HTMLElement, extra: number = 0) {
  var height = 0;
  var body = window.document.body;
  if (window.innerHeight) {
    height = window.innerHeight;
  } else if (body.parentElement && body.parentElement.clientHeight) {
    height = body.parentElement.clientHeight;
  } else if (body && body.clientHeight) {
    height = body.clientHeight;
  }
  element.style.height = height - element.offsetTop + extra + 'px';
}
