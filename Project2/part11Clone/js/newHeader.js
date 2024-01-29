var clip = document.querySelector("#RandomVideoSource");
var video = document.querySelector("#RandomVideo");

var randomVideoArray = [
  "../img/sample/Bird flying over the lake.mp4",
  "../img/sample/Road in California.mp4",
  "../img/sample/Drone footage of waves.mp4",
];

function randomVideoClicked() {
  clip.src =
    randomVideoArray[Math.floor(Math.random() * randomVideoArray.length)];
  video.style = "display: block";
  video.load();
}

// rot13-Algorithmus (für Entschlüsselung in JavaScript)
var map = new Array();
var s = "abcdefghijklmnopqrstuvwxyz";

for (var i = 0; i < s.length; i++) map[s.charAt(i)] = s.charAt((i + 13) % 26);

for (i = 0; i < s.length; i++)
  map[s.charAt(i).toUpperCase()] = s.charAt((i + 13) % 26).toUpperCase();

function rot13(str) {
  var rwert = "";
  for (i = 0; i < str.length; i++) {
    var b = str.charAt(i);
    if (b == "+") rwert += "@";
    else rwert += ("A" <= b && b <= "Z") || ("a" <= b && b <= "z") ? map[b] : b;
  }
  return rwert;
}

function showMail(eMailRemoved, eMailPlatzhalter, cssStyle1, cssStyle2) {
  var emailFieldRemove = document.getElementById(eMailRemoved);
  var emailFieldShow = document.getElementById(eMailPlatzhalter);
  var front = "uryyb";
  var at = "@";
  var back = "frphersyl.pbz";
  var mail = front + at + back;
  var okMail = rot13(mail);
  var mailTo = "mailto:" + okMail;
  emailFieldShow.setAttribute("href", mailTo);
  emailFieldRemove.style.display = "none";
  emailFieldShow.classList.add(cssStyle2);
  emailFieldShow.classList.add(cssStyle1);
  emailFieldShow.innerHTML = okMail;
}
