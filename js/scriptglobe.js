function closePopUp() {
    var x = document.getElementsByClassName("we-pp");
    if (x.style.opacity === "1") {
      x.style.opactiy = "0";
    } else {
      x.style.opacity = "1";
    }
  }