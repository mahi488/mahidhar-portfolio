document.addEventListener("DOMContentLoaded", () => {
    console.log("Mahidhar Reddy Cyber Security Portfolio Loaded Successfully");

    // 1. Navbar Scroll Effect
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 2. Active Section Tracker for Nav Links
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("text-glow");
            link.style.color = "";
            if (link.getAttribute("href").includes(current)) {
                link.style.color = "var(--primary)";
                link.classList.add("text-glow");
            }
        });
    });

    // 3. Mobile Navigation Menu Toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navLinksList = document.getElementById("nav-links");

    mobileMenuBtn.addEventListener("click", () => {
        const isVisible = navLinksList.style.display === "flex";
        if (isVisible) {
            navLinksList.style.display = "none";
        } else {
            navLinksList.style.display = "flex";
            navLinksList.style.flexDirection = "column";
            navLinksList.style.position = "absolute";
            navLinksList.style.top = "100%";
            navLinksList.style.left = "0";
            navLinksList.style.width = "100%";
            navLinksList.style.backgroundColor = "rgba(7, 10, 19, 0.95)";
            navLinksList.style.padding = "20px";
            navLinksList.style.borderBottom = "1px solid var(--border-color)";
        }
    });

    // Reset mobile menu on resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navLinksList.removeAttribute("style");
        }
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                navLinksList.style.display = "none";
            }
        });
    });

    // 4. Typewriter Effect
    const typewriter = document.getElementById("typewriter");
    const words = ["Cyber Security Student", "Python Developer", "Ethical Hacker", "Network Analyst"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typewriter.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriter.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            // Pause at the end of word
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Start Typewriter
    if (typewriter) {
        typeEffect();
    }

    // 5. Interactive Mock Terminal Input & Animation Effect
    // Let's print out lines sequentially inside the mock terminal
    const terminalBody = document.querySelector(".terminal-body");
    if (terminalBody) {
        // Let's add an animation effect or make it responsive to hovering
        terminalBody.addEventListener("mouseenter", () => {
            console.log("Entering interactive mock terminal zone...");
        });
    }

    // 6. Contact Form Frontend Validation & Simulation
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Simple validation
            const nameInput = document.getElementById("name").value.trim();
            const emailInput = document.getElementById("email").value.trim();
            const subjectInput = document.getElementById("subject").value.trim();
            const messageInput = document.getElementById("message").value.trim();

            if (!nameInput || !emailInput || !subjectInput || !messageInput) {
                formStatus.className = "form-status error";
                formStatus.textContent = "[!] Error: All fields are required for transmission.";
                return;
            }

            // Show sending status
            formStatus.className = "form-status";
            formStatus.style.display = "block";
            formStatus.style.color = "var(--secondary)";
            formStatus.textContent = "[*] Resolving host and sending secure packets...";

            // Simulate Network Delay and Response
            setTimeout(() => {
                formStatus.className = "form-status success";
                formStatus.textContent = "[+] Packet received successfully! Thank you, " + nameInput + ". I will respond shortly.";
                contactForm.reset();
            }, 1800);
        });
    }
});