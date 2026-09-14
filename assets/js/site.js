(() => {
  const menuButton = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navigation.classList.remove("open"));
    });
  }

  const cookieNotice = document.querySelector(".cookie");
  const consent = localStorage.getItem("kcm_cookie_consent");

  function loadAds() {
    if (window.__kcmGtag) return;
    window.__kcmGtag = true;
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "AW-796358028");
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-796358028";
    document.head.appendChild(script);
  }

  if (consent === "accepted") {
    loadAds();
  } else if (!consent && cookieNotice) {
    cookieNotice.classList.add("show");
  }

  document.querySelectorAll("[data-cookie]").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.cookie;
      localStorage.setItem("kcm_cookie_consent", value);
      if (cookieNotice) cookieNotice.classList.remove("show");
      if (value === "accepted") loadAds();
    });
  });

  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.action = "https://knox-contact-form.zhibo-xu-work.workers.dev/";

  const submitField = form
    .querySelector('button[type="submit"]')
    ?.closest(".field");
  if (submitField) {
    const turnstileField = document.createElement("div");
    turnstileField.className = "field full";
    turnstileField.innerHTML =
      '<div class="cf-turnstile" data-sitekey="0x4AAAAAAEziZF1rWNaa5dwP" data-action="contact" data-size="flexible"></div>';
    submitField.before(turnstileField);

    const turnstileScript = document.createElement("script");
    turnstileScript.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js";
    turnstileScript.async = true;
    turnstileScript.defer = true;
    document.head.appendChild(turnstileScript);
  }

  const started = form.querySelector('[name="form_started"]');
  if (started) started.value = Math.floor(Date.now() / 1000);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    const submitButton = form.querySelector('button[type="submit"]');
    status.textContent = form.dataset.sending || "Sending…";
    status.className = "form-status";
    submitButton.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Unable to send");
      }
      status.textContent =
        form.dataset.success || "Thank you. Your message has been sent.";
      status.className = "form-status ok";
      form.reset();
    } catch {
      status.textContent =
        form.dataset.error ||
        "Unable to send your message. Please call or email the clinic.";
      status.className = "form-status err";
    } finally {
      submitButton.disabled = false;
      if (started) started.value = Math.floor(Date.now() / 1000);
      if (window.turnstile) window.turnstile.reset();
    }
  });
})();
