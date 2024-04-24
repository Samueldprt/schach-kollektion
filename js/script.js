//////////////////////////INDEX.HTML//////////////////////////
///////////////////////////////////////////////////////////////////


//////////////////////////KOLLEKTION.HTML//////////////////////////
///////////////////////////////////////////////////////////////////

function filterStyleDropDown() {
  var x = document.getElementById("styleDropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function filterMaterialDropDown(){
  var x = document.getElementById("materialDropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function closeMaterial(){
  var x = document.getElementById("materialDropdown");
  var y = document.getElementById("styleDropdown");
  if (x.style.display ==="block") {
    x.style.display = "none"
  }
}

function closeStyle(){
  var x = document.getElementById("materialDropdown");
  var y = document.getElementById("styleDropdown");
  if (y.style.display ==="block") {
    y.style.display = "none"
  }
}

function sortDropDown(){
  var x = document.getElementById("sortDropdown");
  if (x.style.display === "block"){
    x.style.display = "none";
  }else {
    x.style.display = "block";
  }
}


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
document.addEventListener("DOMContentLoaded", function() {
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("style-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
});

document.addEventListener("DOMContentLoaded", function() {
  var btnContainer = document.getElementById("materialBtnContainer");
  var btns = btnContainer.getElementsByClassName("material-btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  });



//////////////////////////SORT//////////////////////////

//Sort by ABC//
document.addEventListener("DOMContentLoaded", function() {
  sortABC();
});
 document.getElementById("sortABCButton").addEventListener("click", sortABC);
  function sortABC(){
    let container = document.getElementById("kollektionItemsContainer"),
    divs = container.children,
// `[...divs]` converts `divs` to an Array so we can use the `.map` and `.sort` methods
divsArray = [...divs];
// `.map(div => div.id )` makes a new Array of all the `id` strings, and
// `.sort()` sorts the new Array alphabetically
idList = divsArray.map(div => div.id).sort();

//console.log(idList); // logs ["a", "b", "c", "d" ]

// `idList` and `divsArray` are Arrays, so we can also use 
//    the `.forEach` method to loop through them
idList.forEach(id => {
  // As we process each `id` alphabetically, we check each `div`'s id for a match 
  divsArray.forEach(div => {
    if(div.id == id){ // Finds div with matching id
      container.appendChild(div); // Moves the matching div to bottom of `mainDiv`
    }
  });
});
}
//Sort by CBA//
document.getElementById("sortCBAButton").addEventListener("click", sortCBA);
  function sortCBA(){
    let container = document.getElementById("kollektionItemsContainer"),
    divs = container.children,
// `[...divs]` converts `divs` to an Array so we can use the `.map` and `.sort` methods
divsArray = [...divs];
// `.map(div => div.id )` makes a new Array of all the `id` strings, and
// `.sort()` sorts the new Array alphabetically
idList = divsArray.map(div => div.id).sort().reverse();

//console.log(idList); // logs ["a", "b", "c", "d" ]

// `idList` and `divsArray` are Arrays, so we can also use 
//    the `.forEach` method to loop through them
idList.forEach(id => {
  // As we process each `id` alphabetically, we check each `div`'s id for a match 
  divsArray.forEach(div => {
    if(div.id == id){ // Finds div with matching id
      container.appendChild(div); // Moves the matching div to bottom of `mainDiv`
    }
  });
});
}

//Sort by Old>New//
document.getElementById("sortOldButton").addEventListener("click", sortOld);
function sortOld() {
  var kollektionItemsContainer = document.getElementById( 'kollektionItemsContainer' );

  [].map.call( kollektionItemsContainer.children, Object ).sort( function ( a, b ) {
      return +a.id.match( /\d+/ ) - +b.id.match( /\d+/ );
  }).forEach( function ( elem ) {
    kollektionItemsContainer.appendChild( elem );
  });
}

//Sort by New>Old//
document.getElementById("sortNewButton").addEventListener("click", sortNew);
function sortNew() {
  var kollektionItemsContainer = document.getElementById( 'kollektionItemsContainer' );

  [].map.call( kollektionItemsContainer.children, Object ).sort( function ( a, b ) {
      return -(+a.id.match( /\d+/ ) - +b.id.match( /\d+/ ));
  }).forEach( function ( elem ) {
    kollektionItemsContainer.appendChild( elem );
  });
}


//Show picked sorting option red//

var btnContainer = document.getElementById("sortDropdown");
var btns = btnContainer.getElementsByClassName("sort-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("selected");
    current[0].className = current[0].className.replace(" selected", "");
    this.className += " selected";
  });
}

//////////////////////////KOLLEKTION.HTML//////////////////////////
///////////////////////////////////////////////////////////////////
