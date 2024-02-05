function search() {
    var searchTerm = document.getElementById("search-input").value.trim(); // Leerzeichen entfernen
    var content = document.body.innerHTML;
    
    // Überprüfen, ob das Suchfeld leer ist
    if (searchTerm === "") {
        document.getElementById("search-results").innerHTML = '<span class="error">Bitte geben Sie einen Suchbegriff ein.</span>';
        return; // Beenden Sie die Funktion, wenn kein Suchbegriff eingegeben wurde
    }

    var searchRegex = new RegExp(searchTerm, "gi");
    
    // Entfernen Sie zuerst die gelbe Hervorhebung vom vorherigen Suchergebnis
    var unhighlightedContent = content.replace(/<span class="highlight">(.*?)<\/span>/gi, "$1");

    // Ersetzen Sie den HTML-Inhalt mit den neuen hervorgehobenen Ergebnissen
    document.body.innerHTML = unhighlightedContent;

    var highlightedContent = content.replace(searchRegex, '<span class="highlight">$&</span>');

    // Ersetzen Sie den HTML-Inhalt mit den neuen hervorgehobenen Ergebnissen
    document.body.innerHTML = highlightedContent;

    var matches = content.match(searchRegex);

    if (matches) {
        document.getElementById("search-results").innerHTML = "Suchergebnisse gefunden: " + matches.length;
    } else {
        document.getElementById("search-results").innerHTML = '<span class="error">Suchergebnis nicht gefunden.</span>';
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 4 seconds
}



