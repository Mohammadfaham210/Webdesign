document.getElementById("spendenButton").addEventListener("click", function() {
    var dankesNachricht = document.getElementById("dankesNachricht");
    dankesNachricht.style.display = "block"; // Zeigt die Dankesnachricht an

    // Verbirgt die Dankesnachricht nach 5 Sekunden wieder
    setTimeout(function() {
        dankesNachricht.style.display = "none";
    }, 5000);
});
