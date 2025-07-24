const toggleBtn = document.querySelector(".responsive-btn");
const navbarCollapse = document.querySelector(".navbar-collapse");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("open");
  navbarCollapse.classList.toggle("show");
});

// GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.from("header", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".navbar-nav", {
    y: -50,
    opacity: 0,
    duration: 1.1,
    ease: "power3.out",
  });

  gsap.from("#hero h6, #hero h1, #hero p", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
  });

  gsap.from(".hero-banner img", {
    scale: 0.7,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    stagger: 0.3,
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#hero .row.pb-5", {
    scrollTrigger: "#hero .row.pb-5",
    y: 40,
    opacity: 0,
    duration: 1,
  });

  // About Us
  gsap.from("#about-us picture img", {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#about-us",
      start: "top center",
    },
  });

  gsap.from("#about-us h6, #about-us h1, #about-us p", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#about-us",
      start: "top center",
    },
  });

  gsap.from("#about-us .inner-container", {
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#about-us",
      start: "top bottom",
    },
  });

  // Our Journey
  gsap.from(
    "#our-journey .sticky-content h6, #our-journey .sticky-content h1, #our-journey .sticky-content p, #our-journey .sticky-content a",
    {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#our-journey .sticky-content",
        start: "top center",
      },
    }
  );

  gsap.from(".journey-card", {
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".journey-cards",
      start: "top center",
    },
  });

  // Our Partners
  gsap.from("#our-partners h6, #our-partners h2, #our-partners p", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#our-partners .inner-container-top",
      start: "top center",
    },
  });

  gsap.from(".customers-grid > div", {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: "#our-partners .customers-grid",
      start: "top 80%",
    },
  });

  gsap.from("#press-news h6, #press-news h2", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#press-news .inner-container.mx-auto",
      start: "top center",
    },
  });

  gsap.from(".company-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#press-news .companies-grid",
      start: "top center",
    },
  });

  // Footer
  gsap.from("footer .footer-top, footer .footer-nav, footer .footer-bottom", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "footer",
      start: "top bottom",
    },
  });

  gsap.from("footer .btn.align-items-center", {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "footer .footer-top",
      start: "top bottom",
    },
  });

  gsap.from(".available-places > div", {
    opacity: 0,
    x: -20,
    duration: 0.6,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".available-places",
      start: "top bottom",
    },
  });

  gsap.from("footer .footer-bottom", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 0.3,
    ease: "power1.out",
    scrollTrigger: {
      trigger: "footer",
      start: "bottom bottom",
    },
  });
});
