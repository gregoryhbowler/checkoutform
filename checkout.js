// Function to load the checkout form based on the provided URL
function loadCheckoutForm(url, targetIframe) {
    targetIframe.src = url;
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// Adding event listeners to buttons with the "data-url" attribute
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("button[data-url]").forEach(button => {
        button.addEventListener("click", function() {
            const url = this.getAttribute("data-url");
            const modalId = this.getAttribute("data-modal");
            const iframe = document.getElementById(`${modalId}-checkout`);
            
            // Load the checkout form in the appropriate iframe
            loadCheckoutForm(url, iframe);

            // Show the modal
            document.getElementById(modalId).style.display = "block";
        });
    });
});
