gsap.fromTo(
  ".left",
  { opacity: 0 },
  { duration: 2, opacity: 1, ease: "power2.out", delay: 1 }
);
gsap.fromTo(
  ".right",
  { opacity: 0 },
  { duration: 2.5, opacity: 1, ease: "power1.out" }
);

gsap.fromTo(
  ".first-three",
  { x: 70, opacity: 0 },
  { duration: 1, x: 0, opacity: 1, ease: "power2.out", delay: 0.2 }
);

gsap.fromTo(
  ".last-two",
  { x: -70, opacity: 0 },
  { duration: 1, x: 0, opacity: 1, ease: "power2.out", delay: 0.2 }
);
