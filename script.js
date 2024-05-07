var i = 0;
var j = 0;
var txt = [" Creator...", "n Aspirant...", " Web Dev...", " Student..."];
var speed = 100;

function typeWriter() {
  if (i < txt[j].length) {
    document.getElementById("cli").innerHTML += txt[j].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    if (document.getElementById("cli").innerHTML.length > 11) {
      document.getElementById("cli").innerHTML = document
        .getElementById("cli")
        .innerHTML.slice(0, -1);
      setTimeout(typeWriter, speed);
    } else {
      i = 0;
      j = (j + 1) % txt.length;
      setTimeout(typeWriter, 2000);
    }
  }
}

typeWriter();

var element = document.getElementById("your-element-id"); // replace 'your-element-id' with your element's id

function updateBackground(e) {
  const x = (e.clientX / element.offsetWidth) * 100;
  const y = (e.clientY / element.offsetHeight) * 100;
  element.style.background = `radial-gradient(circle at ${x}% ${y}%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)`;
}

element.addEventListener("mousemove", updateBackground);
element.addEventListener("touchmove", function (e) {
  var touch = e.touches[0];
  var touchLocation = touch.target.getBoundingClientRect();
  e.clientX = touch.clientX - touchLocation.left;
  e.clientY = touch.clientY - touchLocation.top;
  updateBackground(e);
});
