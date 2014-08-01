window.onload = function() {
  var sEl = document.querySelector(".screen-size");
  var pEl = document.querySelector(".page-size");

  document.body.addEventListener("mousemove", function(e) {
    var px = e.pageX;
    var py = e.pageY;
    var sx = e.screenX;
    var sy = e.screenY;

    sEl.innerHTML = sx+" x "+sy;
    pEl.innerHTML = px+" x "+py;
  }, false);
};
