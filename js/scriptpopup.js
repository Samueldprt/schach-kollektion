window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});

function closePopup() {
    document.querySelector(".popup").style.display = "none"
  }

function openPopup() {
    document.querySelector(".popup").style.display = "block"
  }