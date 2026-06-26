document.addEventListener("DOMContentLoaded", function () {

    const tripType = document.getElementById("tripType");
    const vehicle = document.getElementById("vehicle");
    const priceDisplay = document.getElementById("priceDisplay");
    const tabButtons = document.querySelectorAll(".tab-btn");

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

    tabButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            tabButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");
            tripType.value = button.getAttribute("data-trip");

            updatePrice();
        });
    });

    vehicle.addEventListener("change", updatePrice);

    updatePrice();
});

// ===============================
// GOOGLE MAPS
// ===============================

window.initMapFeatures = function () {

    const pickup = document.getElementById("pickup");
    const drop = document.getElementById("drop");
    const distance = document.getElementById("distanceResult");

    if (!pickup || !drop || !distance) return;

    const options = {
        componentRestrictions: { country: "in" }
    };

    const pickupAuto = new google.maps.places.Autocomplete(pickup, options);
    const dropAuto = new google.maps.places.Autocomplete(drop, options);

    pickupAuto.addListener("place_changed", calculateDistance);
    dropAuto.addListener("place_changed", calculateDistance);

    function calculateDistance() {

        if (pickup.value === "" || drop.value === "") return;

        const service = new google.maps.DistanceMatrixService();

        service.getDistanceMatrix(
            {
                origins: [pickup.value],
                destinations: [drop.value],
                travelMode: "DRIVING",
                unitSystem: google.maps.UnitSystem.METRIC
            },
            function (response, status) {

                if (status !== "OK") {
                    distance.value = "";
                    return;
                }

                const result = response.rows[0].elements[0];

                if (result.status === "OK") {
                    distance.value = result.distance.text;
                }
            }
        );
    }
};