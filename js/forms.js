/* ============================================================
   AIVANTA — forms.js
   Client-side validation for the Quote Request modal and the
   Contact page form. No backend exists: valid submissions are
   confirmed to the user and optionally mirrored to LocalStorage
   purely as a frontend demonstration — nothing is sent anywhere.
   ============================================================ */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-\s()]{7,16}$/;

function setFieldError(fieldEl, message) {
  const wrapper = fieldEl.closest(".field");
  if (!wrapper) return;
  wrapper.classList.toggle("invalid", Boolean(message));
  const errorEl = wrapper.querySelector(".error-msg");
  if (errorEl) errorEl.textContent = message || "";
}

function validateRequired(fieldEl, label) {
  const value = fieldEl.value.trim();
  if (!value) {
    setFieldError(fieldEl, `${label} is required.`);
    return false;
  }
  setFieldError(fieldEl, "");
  return true;
}

function validateEmail(fieldEl) {
  const value = fieldEl.value.trim();
  if (!value) {
    setFieldError(fieldEl, "Email is required.");
    return false;
  }
  if (!EMAIL_RE.test(value)) {
    setFieldError(fieldEl, "Enter a valid email address.");
    return false;
  }
  setFieldError(fieldEl, "");
  return true;
}

function validatePhone(fieldEl, required = false) {
  const value = fieldEl.value.trim();
  if (!value) {
    if (required) {
      setFieldError(fieldEl, "Phone number is required.");
      return false;
    }
    setFieldError(fieldEl, "");
    return true;
  }
  if (!PHONE_RE.test(value)) {
    setFieldError(fieldEl, "Enter a valid phone number.");
    return false;
  }
  setFieldError(fieldEl, "");
  return true;
}

function validateMinLength(fieldEl, label, min) {
  const value = fieldEl.value.trim();
  if (value.length < min) {
    setFieldError(fieldEl, `${label} needs at least ${min} characters.`);
    return false;
  }
  setFieldError(fieldEl, "");
  return true;
}

function saveToLocalStorage(key, entry) {
  try {
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    existing.push({ ...entry, submittedAt: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(existing));
  } catch (err) {
    // LocalStorage may be unavailable (private browsing, storage full, etc).
    // This is a demo convenience only, so fail silently.
    console.warn("Could not save to LocalStorage:", err);
  }
}

/* ---------- Quote Request Form (Services page modal) ---------- */
function initQuoteForm() {
  const form = document.getElementById("quote-form");
  if (!form) return;

  const successBox = form.querySelector(".form-success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#quote-name");
    const email = form.querySelector("#quote-email");
    const phone = form.querySelector("#quote-phone");
    const websiteType = form.querySelector("#quote-website-type");
    const budget = form.querySelector("#quote-budget");
    const description = form.querySelector("#quote-description");

    const validations = [
      validateRequired(name, "Full name"),
      validateEmail(email),
      validatePhone(phone, true),
      validateRequired(websiteType, "Website type"),
      validateRequired(budget, "Budget range"),
      validateMinLength(description, "Project description", 20),
    ];

    const isValid = validations.every(Boolean);
    if (!isValid) {
      showToast("Please fix the highlighted fields.", "error");
      return;
    }

    saveToLocalStorage("aivanta_quote_requests", {
      name: name.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      company: form.querySelector("#quote-company")?.value.trim() || "",
      websiteType: websiteType.value,
      budget: budget.value,
      description: description.value.trim(),
    });

    if (successBox) successBox.classList.add("show");
    form.reset();
    showToast("Your request has been prepared successfully.", "success");

    setTimeout(() => {
      const overlay = form.closest(".modal-overlay");
      if (overlay) closeModal(overlay);
      if (successBox) successBox.classList.remove("show");
    }, 2200);
  });
}

/* ---------- Contact Form (Contact page) ---------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const successBox = form.querySelector(".form-success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#contact-name");
    const email = form.querySelector("#contact-email");
    const subject = form.querySelector("#contact-subject");
    const message = form.querySelector("#contact-message");

    const validations = [
      validateRequired(name, "Name"),
      validateEmail(email),
      validateRequired(subject, "Subject"),
      validateMinLength(message, "Message", 10),
    ];

    const isValid = validations.every(Boolean);
    if (!isValid) {
      showToast("Please fix the highlighted fields.", "error");
      return;
    }

    saveToLocalStorage("aivanta_contact_messages", {
      name: name.value.trim(),
      email: email.value.trim(),
      subject: subject.value.trim(),
      message: message.value.trim(),
    });

    if (successBox) successBox.classList.add("show");
    form.reset();
    showToast("Your message has been prepared successfully.", "success");
  });

  form.querySelectorAll("input, textarea").forEach((el) => {
    el.addEventListener("blur", () => {
      if (el.hasAttribute("required") && !el.value.trim()) {
        setFieldError(el, `${el.previousElementSibling?.textContent.replace("*", "").trim() || "This field"} is required.`);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initQuoteForm();
  initContactForm();
});
