//your JS code here. If required.
// levelFinder.js
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('level');
  var level = 0;

  if (el) {
    var curr = el.parentElement;
    while (curr) {
      level++;
      curr = curr.parentElement;
    }
  }

  alert('The level of the element is: ' + level);
});
