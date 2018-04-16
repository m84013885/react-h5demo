export function scrollAnimate({el, targetPosition, duringTime = 300, onComplete}) {
  if (typeof el === 'string') {
      el = document.getElementById(el);
  }
  if (!targetPosition) return;
  const startTime = (new Date()).getTime();
  function animate() {
      const nowTime = (new Date()).getTime();
      const elapsed = nowTime - startTime;
      const fraction = elapsed / duringTime;
      const position = targetPosition - el.scrollTop;
      if (fraction < 1) {
          el.scrollTop += fraction * position * Math.sin(Math.PI / 2);
          setTimeout(animate, Math.min(25, duringTime - elapsed));
      } else {
          el.scrollTop = targetPosition;
          if (onComplete) {
              onComplete();
          }
      }
  }
  animate();
}