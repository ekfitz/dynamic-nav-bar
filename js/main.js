
// will be the names of the container divs for nav options;
var navBox = ["navbox1", "navbox2", "navbox3", "navbox4"];

// will be the names of the text span;
var navSpan = ["nt1", "nt2", "nt3"];

// will be the innerHTML appended to navText span
var navText = ["NEWS", "STUDIO", "CONTACT"];

//["left%"];
var nb1 = "0%";
var nb2 = "25%";
var nb3 = "50%";
var nb4 = "75%";

//set nav bar
setBar();
var navBar = document.getElementById("navBar");

//set boxes in nav bar
setBox(0, nb1);
setBox(1, nb2);
setBox(2, nb3);
setBox(3, nb4);
var navbox1 = document.getElementById("navbox1");

//set span with innerHTML appended
setText(0, navbox1, 0);
setText(1, navbox2, 1);
setText(2, navbox3, 2);

function setBar() {
  var nba = document.createElement("div");
  nba.className = "header";
  nba.id = "navBar";
  document.body.appendChild(nba);
}

// (x = 0 (index of navBox)), z = nb1;
function setBox(x, z) {
  var nb = document.createElement("div");
  nb.className = "headerbox";
  nb.id = navBox[x];
  nb.style.left = z;
  navBar.appendChild(nb);
}

// (x = 0 (index of navText), y = navbox1, z = 0 (index of navText));
function setText(x, y, z) {
  var nt = document.createElement("span");
  nt.className = "navtext";
  nt.id = navSpan[x];

  var ntxt = document.createTextNode(navText[z]);
  nt.appendChild(ntxt);
  y.appendChild(nt);
}
