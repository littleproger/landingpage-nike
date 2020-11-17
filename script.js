let flagMenu = false;
let flagLinks = false;
function slider(img, color1, color2, txt) {
  var html = document.getElementsByTagName("html")[0];
  document.querySelector("#main-img").src = img;
  document.querySelector("#chng-text").textContent = txt;
  html.style.setProperty("--main-color", color1);
  html.style.setProperty("--second-color", color2);
}
function menuToggle() {
  if (flagMenu != true) {
    document
      .querySelector(".circle2")
      .style.setProperty("background-color", "var(--main-color)");
    document.querySelector(".mn").style.setProperty("fill", "white");
    document.querySelector(".tgl-menu").style.setProperty("display", "block");
    flagMenu = true;
  } else {
    document
      .querySelector(".circle2")
      .style.setProperty("background-color", "");
    document.querySelector(".mn").style.setProperty("fill", "black");
    document.querySelector(".tgl-menu").style.setProperty("display", "");
    flagMenu = false;
  }
}
function linkToggle() {
  if (flagLinks != true) {
    console.log("3");
    document
      .querySelector(".circle3")
      .style.setProperty("background-color", "var(--second-color)");
    document
      .querySelector(".mn2")
      .style.setProperty("fill", "var(--main-color)");
    document.querySelector(".tgl-link").style.setProperty("display", "block");
    flagLinks = true;
  } else {
    console.log("4");
    document
      .querySelector(".circle3")
      .style.setProperty("background-color", "");
    document.querySelector(".mn2").style.setProperty("fill", "black");
    document.querySelector(".tgl-link").style.setProperty("display", "");
    flagLinks = false;
  }
}
