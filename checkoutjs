// Function to load the checkout form based on the provided URL
function loadCheckoutForm(url, options = {}) {
    const settings = {
        width: "100%",
        height: "auto",
        id: "ecf-" + Date.now(),
        spinner: true,
        animation: "animate__fadeIn",
        hideFooter: true,
        insertPosition: "afterend",
        insertInto: ""
    };

    Object.assign(settings, options);

    const insertionPoint = settings.insertInto ? document.querySelector(settings.insertInto) : document.currentScript;
    
    // Create the iframe element for the checkout form
    const iframe = document.createElement("iframe");
    iframe.id = settings.id;
    iframe.src = url;
    iframe.allow = "payment";
    iframe.style.cssText = `width: ${settings.width}; border: 0; display: none; min-width: 330px;`;
    iframe.setAttribute("data-animation", settings.animation);
    insertionPoint.insertAdjacentElement(settings.insertPosition, iframe);

    // Set up iframe resizer if needed, handle loading events
    if (settings.spinner) {
        const spinner = document.createElement("div");
        spinner.id = `${settings.id}-spinner`;
        spinner.innerHTML = `<div style="text-align:center;">
            <svg height="32px" width="32px" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M0 64a64 64 0 11128 0 64 64 0 11-128 0z" fill="#ccc"/>
                </g>
            </svg>
        </div>`;
        insertionPoint.insertAdjacentElement(settings.insertPosition, spinner);
    }

    iframe.onload = function() {
        if (settings.spinner) {
            document.getElementById(`${settings.id}-spinner`).style.display = "none";
        }
        iframe.style.display = "block";
    };

    // Add any required animations
    if (settings.animation !== "none") {
        iframe.classList.add("animate__animated", settings.animation);
    }
}

// Set up event listeners for buttons with data-url attributes
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("button[data-url]").forEach(button => {
        button.addEventListener("click", function() {
            const url = this.getAttribute("data-url");
            loadCheckoutForm(url);
        });
    });
});
