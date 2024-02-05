   // JavaScript für das Modal
   var modal = document.getElementById("engagementModal");
   var btn = document.getElementById("openModal");
   var span = document.getElementsByClassName("close")[0];

   btn.onclick = function() {
       modal.style.display = "block";
   }

   span.onclick = function() {
       modal.style.display = "none";
   }

   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }



  // Funktion zum Öffnen des Daten-Eingabe-Modals
function openDataEntryModal() {
    var dataEntryModal = document.getElementById("dataEntryModal");
    dataEntryModal.style.display = "block";
}

// Event Listener hinzufügen
var engagementButtons = document.querySelectorAll('.modal-button');
engagementButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Verhindern der Standardaktion
        modal.style.display = "none"; // Schließen des aktuellen Modals
        openDataEntryModal(); // Öffnen des Daten-Eingabe-Modals
    });
});


// Formular-Event-Handler
document.getElementById("dataEntryForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindern, dass das Formular tatsächlich übermittelt wird
    closeModal(); // Schließen aller Modale
  
});


// Schließen aller Modale
function closeModal() {
    document.querySelectorAll('.modal').forEach(function(modal) {
        modal.style.display = 'none';
    });
}

// Event-Listener für das Schließen-Icon
document.querySelectorAll('.close').forEach(function(closeButton) {
    closeButton.onclick = function() {
        closeModal();
    };
});


// JavaScript, um das Modal zu öffnen
var modalBtns = document.querySelectorAll('.modal-button');
modalBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = document.getElementById('dataEntryModal');
        modal.style.display = "block";
    }
});

// Schließen des Modal-Fensters
var closeBtns = document.querySelectorAll('.close');
closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = this.closest('.modal');
        modal.style.display = "none";
    }
});

// Schließen des Modal-Fensters, wenn außerhalb des Modal-Inhalts geklickt wird
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}



document.getElementById("dataEntryForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindern, dass das Formular tatsächlich übermittelt wird
    closeModal(); // Schließen aller Modale
    
    // Anzeigen der Benachrichtigung
    var notification = document.getElementById("notification");
    notification.style.display = "block"; // Benachrichtigung anzeigen

    // Benachrichtigung nach 5 Sekunden automatisch ausblenden
    setTimeout(function() {
        notification.style.display = "none";
    }, 4000);
});
