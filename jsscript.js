var nm = "I'm Shaikat Chandra Paul";
var snd = "Professional Digital Marketer and Web Developer.";

var i = 0, j=0;

var speed = 200;

(function typeWriter() {
  if (i < nm.length) {
    document.getElementById("name").innerHTML += nm.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

    if(i==nm.length && j<snd.length)
        {
            document.getElementById("bio").innerHTML += snd.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
        }
}());