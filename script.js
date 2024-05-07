var i = 0;
var j = 0;
var txt = [" Creator...", "n Aspirant...", " Web Dev...", " Student..."];
var speed = 100;

function typeWriter() {
  if (i < txt[j].length) {
    document.querySelector("#cli").innerHTML += txt[j].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    if (document.querySelector("#cli").innerHTML.length > 11) {
      document.querySelector("#cli").innerHTML = document
        .querySelector("#cli")
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

var element = document.querySelector("#your-element-id"); // replace 'your-element-id' with your element's id

function updateBackground(e) {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)`;
}

document.addEventListener("mousemove", updateBackground);
document.addEventListener("touchmove", function (e) {
  e.clientX = e.touches[0].clientX;
  e.clientY = e.touches[0].clientY;
  updateBackground(e);
  e.clientY = e.touches[0].clientY;
  updateBackground(e);
});

