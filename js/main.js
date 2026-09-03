/* ============================================================
   AIVANTA — main.js
   Shared behaviour across every page: nav, scroll effects,
   reveal-on-scroll, toast notifications, back-to-top.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initActiveNavLink();
  initRevealOnScroll();
  initBackToTop();
  initYear();
});

/* ---------- Mobile hamburger navigation ---------- */
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      links.classList.remove("open");
      toggle.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
}

/* ---------- Highlight the current page's nav link ---------- */
function initActiveNavLink() {
  const current = (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll(".nav-links a[data-page]").forEach((link) => {
    if (link.dataset.page === current) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

/* ---------- Reveal-on-scroll for elements with .reveal ---------- */
function initRevealOnScroll() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((t) => observer.observe(t));
}

/* ---------- Back-to-top button ---------- */
function initBackToTop() {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 480);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Footer year ---------- */
function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Toast notifications (used across pages) ---------- */
let toastTimer = null;
function showToast(message, type = "success") {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = `toast ${type === "error" ? "error" : ""}`;

  requestAnimationFrame(() => toast.classList.add("show"));

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 4200);
}

/* ---------- Generic modal open/close helpers ---------- */
function openModal(overlayEl) {
  if (!overlayEl) return;
  overlayEl.classList.add("open");
  document.body.style.overflow = "hidden";
  const firstField = overlayEl.querySelector("input, textarea, select, button");
  if (firstField) firstField.focus();
}

function closeModal(overlayEl) {
  if (!overlayEl) return;
  overlayEl.classList.remove("open");
  document.body.style.overflow = "";
}

/* Close any open modal on Escape, or by clicking the overlay / close button */
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-modal-open]")) {
    e.preventDefault();
    const targetId = e.target.getAttribute("data-modal-open");
    openModal(document.getElementById(targetId));
  }
  if (e.target.matches("[data-modal-close]") || e.target.classList.contains("modal-overlay")) {
    const overlay = e.target.closest(".modal-overlay");
    closeModal(overlay);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.open").forEach(closeModal);
  }
});
