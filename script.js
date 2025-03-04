$(document).ready(function(){
    $('#resumeModal').modal({
      backdrop: 'static',  
      keyboard: true       
    });
  });

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let formData = new FormData(this);

    fetch(this.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            document.getElementById("formResponse").innerHTML = "✅ Message sent successfully!";
            document.getElementById("formResponse").style.display = "block";
            this.reset(); // Clear form fields
        } else {
            document.getElementById("formResponse").innerHTML = "❌ Error sending message. Try again.";
            document.getElementById("formResponse").style.display = "block";
        }
    })
    .catch(error => {
        document.getElementById("formResponse").innerHTML = "⚠️ Network error. Please try again.";
        document.getElementById("formResponse").style.display = "block";
    });
});