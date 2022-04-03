var title = "''Climate Change is no longer some far-off problem; it is happening here, it is happening now.'' - Barack Obama";
var titleLenght = title.length;
var text = "";
var counter = 0;
var timer = setInterval(updateTitle, 250);

function updateTitle() {
  text = text+title[counter];
  document.getElementById("title").innerHTML = text+'<span class="blinking">_</span>';
  counter++;
  if (counter >= titleLenght) {
    counter = 0;
    clearInterval(timer);
  }
    
}

