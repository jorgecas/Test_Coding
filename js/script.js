var a_button = document.getElementById("a_button");
var a_submit = document.getElementById("a_submit");

var coverControl = function (control_to_cover) {
  var div_over_button = document.createElement("div");
  var x = control_to_cover.offsetLeft;
  var y = control_to_cover.offsetTop;
  var width = control_to_cover.offsetWidth;
  var height = control_to_cover.offsetHeight;
  var container = control_to_cover.parentNode;

  div_over_button.style.top = y;
  div_over_button.style.left = x;
  div_over_button.style.width = width;
  div_over_button.style.height = height;
  div_over_button.style.zIndex = 1001;
  div_over_button.style.position = "absolute";
  div_over_button.style.backgroundColor = "#FFF";
  div_over_button.style.opacity = "0";
  div_over_button.style.filter = "alpha(opacity=0)";
      
  div_over_button.onclick = function () {
    alert("I'm over: " + control_to_cover.id);
  };
      
  container.appendChild(div_over_button);
};

coverControl(a_button);
coverControl(a_submit);