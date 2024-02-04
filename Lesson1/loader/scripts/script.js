const loader = document.getElementById("loader");
const contents = document.getElementById("contents");

document.onreadystatechange = function () {
  let state = document.readyState;
  if (state == "interactive") {
    contents.style.visibility = "hidden";
    loader.style.visibility = "visible";
  } else if (state == "complete") {
    setTimeout(function () {
      loader.style.visibility = "hidden";
      contents.style.visibility = "visible";
    }, 2000);
  }
};
