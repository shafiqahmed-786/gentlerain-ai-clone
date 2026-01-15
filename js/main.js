// ================= GSAP SETUP =================
gsap.registerPlugin(ScrollTrigger);

// ================= HERO PARALLAX =================
gsap.to(".layer-back", {
  y: 150,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".layer-middle", {
  y: 300,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// ================= ROTATING TEXT =================
const words = ["Practice", "Upskill", "Play", "Improve"];
let index = 0;
const text = document.getElementById("rotating-text");

if (text) {
  setInterval(() => {
    gsap.to(text, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      onComplete: () => {
        index = (index + 1) % words.length;
        text.textContent = words[index];

        gsap.fromTo(
          text,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4 }
        );
      }
    });
  }, 2000);
}


// ================= HORIZONTAL SCROLL =================
gsap.to(".horizontal-wrapper", {
  xPercent: -75,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-section",
    start: "top top",
    end: "+=3000",
    pin: true,
    scrub: true
  }
});
