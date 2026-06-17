// ======================================
// RAMESH CAB SERVICES - SCRIPT.JS
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // BOOKING FORM TO WHATSAPP
    // ===============================

    const forms = document.querySelectorAll("form");

    forms.forEach(form => {

        form.addEventListener("submit", function(e){

            e.preventDefault();

            const inputs = form.querySelectorAll("input, textarea, select");

            let values = [];

            inputs.forEach(input => {
                values.push(input.value);
            });

            const message =
`🚖 RAMESH CAB SERVICES BOOKING

Name: ${values[5] || values[0]}

Phone: ${values[6] || values[2]}

Pickup: ${values[0] || "Not Provided"}

Drop: ${values[1] || "Not Provided"}

Date: ${values[2] || "Not Provided"}

Time: ${values[3] || "Not Provided"}

Vehicle: ${values[4] || "Not Provided"}

Message: ${values[3] || values[4] || "None"}

`;

            const whatsappURL =
            `https://wa.me/919902536970?text=${encodeURIComponent(message)}`;

            alert("✅ Booking Submitted Successfully!");

            window.open(whatsappURL, "_blank");

            form.reset();

        });

    });

    // ===============================
    // NAVBAR ACTIVE LINK
    // ===============================

    const navLinks =
    document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(l =>
                l.classList.remove("active"));

            link.classList.add("active");

        });

    });

    // ===============================
    // COUNTER ANIMATION
    // ===============================

    const counters =
    document.querySelectorAll(".stat-box h2");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target =
            +counter.innerText.replace(/\D/g,'');

            let count =
            +counter.getAttribute("data-count") || 0;

            const increment =
            target / 100;

            if(count < target){

                count += increment;

                counter.innerText =
                Math.ceil(count) + "+";

                counter.setAttribute(
                    "data-count",
                    count
                );

                setTimeout(updateCounter,20);

            }

            else{

                if(target === 48){

                    counter.innerHTML =
                    "4.8★";

                }

                else{

                    counter.innerHTML =
                    target + "+";

                }

            }

        };

        updateCounter();

    });

    // ===============================
    // FADE IN ANIMATION
    // ===============================

    const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    });

    const hiddenElements =
    document.querySelectorAll(
        ".service-card, .fleet-card, .route-card, .vision-card, .feature-box"
    );

    hiddenElements.forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

    // ===============================
    // SCROLL TO TOP BUTTON
    // ===============================

    const scrollBtn =
    document.createElement("button");

    scrollBtn.innerHTML = "⬆";

    scrollBtn.style.position = "fixed";
    scrollBtn.style.bottom = "90px";
    scrollBtn.style.right = "20px";
    scrollBtn.style.width = "50px";
    scrollBtn.style.height = "50px";
    scrollBtn.style.border = "none";
    scrollBtn.style.borderRadius = "50%";
    scrollBtn.style.background = "gold";
    scrollBtn.style.color = "black";
    scrollBtn.style.fontSize = "20px";
    scrollBtn.style.cursor = "pointer";
    scrollBtn.style.display = "none";
    scrollBtn.style.zIndex = "9999";

    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", () => {

        if(window.scrollY > 300){

            scrollBtn.style.display = "block";

        }

        else{

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

    // ===============================
    // FLOATING EFFECT
    // ===============================

    const floatingCards =
    document.querySelectorAll(
        ".fleet-card, .service-card, .route-card"
    );

    floatingCards.forEach(card => {

        card.addEventListener("mousemove",(e)=>{

            const x =
            (window.innerWidth/2 - e.pageX)/30;

            const y =
            (window.innerHeight/2 - e.pageY)/30;

            card.style.transform =
            `rotateY(${x}deg) rotateX(${y}deg)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform =
            "rotateY(0deg) rotateX(0deg)";

        });

    });

});

// ======================================
// END SCRIPT
// ======================================