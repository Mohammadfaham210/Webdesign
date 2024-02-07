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



function openDataEntryModal() {
    var dataEntryModal = document.getElementById("dataEntryModal");
    dataEntryModal.style.display = "block";
}

var engagementButtons = document.querySelectorAll('.modal-button');
engagementButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        modal.style.display = "none"; 
        openDataEntryModal(); 
    });
});



document.getElementById("dataEntryForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    closeModal(); 
  
});


function closeModal() {
    document.querySelectorAll('.modal').forEach(function(modal) {
        modal.style.display = 'none';
    });
}

document.querySelectorAll('.close').forEach(function(closeButton) {
    closeButton.onclick = function() {
        closeModal();
    };
});


var modalBtns = document.querySelectorAll('.modal-button');
modalBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = document.getElementById('dataEntryModal');
        modal.style.display = "block";
    }
});

var closeBtns = document.querySelectorAll('.close');
closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = this.closest('.modal');
        modal.style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}



document.getElementById("dataEntryForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    closeModal(); 
    
    
    var notification = document.getElementById("notification");
    notification.style.display = "block";

    setTimeout(function() {
        notification.style.display = "none";
    }, 4000);
});
