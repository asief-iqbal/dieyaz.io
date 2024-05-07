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

document.addEventListener("mousemove", function (e) {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)`;
});
