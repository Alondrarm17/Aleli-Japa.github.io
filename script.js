const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const langBtn = document.getElementById("langBtn");
const zoomables = document.querySelectorAll(".zoomable");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const revealItems = document.querySelectorAll(".reveal");

if (menuBtn && mainNav) {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  });
}

function closeLightbox() {
  if (lightbox) {
    lightbox.classList.remove("show");
    document.body.style.overflow = "";
  }
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealItems.forEach((item) => observer.observe(item));
