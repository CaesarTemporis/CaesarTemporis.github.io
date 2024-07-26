document.addEventListener("DOMContentLoaded", () => {
    const fetchDataButton = document.getElementById("fetch-data");
    const dataContainer = document.getElementById("data-container");

    fetchDataButton.addEventListener("click", () => {
        fetch("/data")
            .then(response => response.json())
            .then(data => {
                dataContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            alert(result.message);
        })
        .catch(error => {
            console.error("Error submitting form:", error);
        });
    });
});
