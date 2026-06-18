// ===============================
// RAMESH CAB SERVICES BOOKING FORM
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("bookingForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            form.querySelector('input[placeholder="Your Name"]')?.value.trim() || "";

        const phone =
            form.querySelector('input[placeholder="Phone Number"]')?.value.trim() || "";

        const email =
            form.querySelector('input[placeholder="Email Address"]')?.value.trim() || "";

        const pickup =
            form.querySelector('input[placeholder="Pickup Location"]')?.value.trim() || "";

        const drop =
            form.querySelector('input[placeholder="Drop Location"]')?.value.trim() || "";

        const date =
            form.querySelector('input[type="date"]')?.value || "";

        const vehicle =
            form.querySelector('select')?.value || "";

        const details =
            form.querySelector('textarea')?.value.trim() || "";

        if (!name || !phone || !pickup || !drop) {
            alert("⚠ Please fill all required fields.");
            return;
        }

        const message =
`🚖 NEW CAB BOOKING REQUEST

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}

📍 Pickup: ${pickup}
🏁 Drop: ${drop}

📅 Date: ${date}
🚘 Vehicle: ${vehicle}

📝 Details:
${details}`;

        window.open(
            `https://wa.me/919902536970?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    });

});