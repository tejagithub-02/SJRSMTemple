const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


document.getElementById("enquiryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let destination = document.getElementById("destination").value;

    if (name === "" || email === "" || phone === "" || destination === "") {
        alert("Please fill in all required fields.");
        return;
    }

    alert("Thank you! Your enquiry has been submitted.");
    this.reset();
});



function openModal(imgSrc) {
    document.getElementById("modalImage").src = imgSrc;
    document.getElementById("imageModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}