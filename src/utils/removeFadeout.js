function removeFadeOut(el, speed) {
  var seconds = speed / 1000;
  el.style.transition = 'opacity ' + seconds + 's ease';

  el.style.opacity = 0;
  setTimeout(function () {
    el.style.display = 'none';
    el.style.opacity = 1;
  }, speed);
}

export default removeFadeOut;
