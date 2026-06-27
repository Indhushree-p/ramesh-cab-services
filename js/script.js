// ===============================
// RAMESH  CAB SERVICES
// Booking tabs + fare + WhatsApp
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bookingForm");
    const tripType = document.getElementById("tripType");
    const vehicle = document.getElementById("vehicle");
    const priceDisplay = document.getElementById("priceDisplay");
    const tripRadios = document.querySelectorAll('input[name="tripChoice"]');

    function updatePrice() {
        let fare = "Please Select Vehicle";

        if (tripType.value === "Airport Transfer") {
            if (vehicle.value === "Etios Sedan") fare = "₹1099";
            else if (vehicle.value === "Ertiga") fare = "₹1599";
            else if (vehicle.value === "Innova Crysta") fare = "₹2099";
            else if (vehicle.value === "Innova Hybrid") fare = "₹2499";
            else if (vehicle.value === "Ciaz") fare = "Not Available";
        }

        if (tripType.value === "Round Trip") {
            if (vehicle.value === "Etios Sedan") fare = "₹13 / KM";
            else if (vehicle.value === "Ertiga") fare = "₹16 / KM";
            else if (vehicle.value === "Innova Crysta") fare = "₹19 / KM";
            else fare = "Not Available";
        }

        if (tripType.value === "Local Package") {
            if (vehicle.value === "Etios Sedan") fare = "₹1199 (4 Hours)";
            else if (vehicle.value === "Ciaz") fare = "₹1499 (4 Hours)";
            else if (vehicle.value === "Ertiga") fare = "₹2900 (8 Hours)";
            else if (vehicle.value === "Innova Crysta") fare = "₹3599 (8 Hours)";
            else fare = "Not Available";
        }

        priceDisplay.value = fare;
    }

    tripRadios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            tripType.value = radio.value;

            document.querySelectorAll(".tab-btn").forEach(function (tab) {
                tab.classList.remove("active");
            });

            radio.parentElement.classList.add("active");
            updatePrice();
        });
    });

    vehicle.addEventListener("change", updatePrice);
    updatePrice();

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const trip = tripType.value;
        const selectedVehicle = vehicle.value;
        const fare = priceDisplay.value;

        const pickup = document.getElementById("pickup").value;
        const drop = document.getElementById("drop").value;

        const date = form.querySelector('input[type="date"]').value;
        const time = form.querySelector('input[type="time"]').value;

        const name = form.querySelector('input[placeholder="Enter your full name"]').value;
        const email = form.querySelector('input[placeholder="Enter your email"]').value;
        const phone = form.querySelector('input[placeholder="Enter your phone number"]').value;
        const details = form.querySelector("textarea").value;

        if (!selectedVehicle) {
            alert("Please select a vehicle.");
            return;
        }

        if (fare === "Not Available") {
            alert("This vehicle is not available for the selected trip type.");
            return;
        }

        const message =
`🚖 *NEW CAB BOOKING*

👤 Name : ${name}

📞 Phone : ${phone}

📧 Email : ${email}

🚕 Trip Type : ${trip}

🚘 Vehicle : ${selectedVehicle}

💰 Fare : ${fare}

📍 Pickup : ${pickup}

🏁 Drop : ${drop}

📅 Date : ${date}

🕒 Time : ${time}

📝 Details :
${details}

Thank you for choosing Ramesh Cab Services.`;

        window.open(
            "https://wa.me/919902536970?text=" + encodeURIComponent(message),
            "_blank"
        );
    });

});