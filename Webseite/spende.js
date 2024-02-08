document.getElementById("spendenButton").addEventListener("click", function() {
    var dankesNachricht = document.getElementById("dankesNachricht");
    dankesNachricht.style.display = "block";

    setTimeout(function() {
        dankesNachricht.style.display = "none";
    }, 5000);
});
