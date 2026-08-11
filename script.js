(function () {
  "use strict";
  var CONSENT_KEY = "bookyear_cookie_consent";
  var banner = document.getElementById("cookieBanner");
  var acceptBtn = document.getElementById("cookieAccept");
  var declineBtn = document.getElementById("cookieDecline");

  function getStoredConsent() {
    try { return window.localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function storeConsent(value) {
    try { window.localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* ignore */ }
  }

  if (banner) {
    if (!getStoredConsent()) banner.classList.add("show");
    if (acceptBtn) acceptBtn.addEventListener("click", function () {
      storeConsent("accepted"); banner.classList.remove("show");
    });
    if (declineBtn) declineBtn.addEventListener("click", function () {
      storeConsent("declined"); banner.classList.remove("show");
    });
  }
})();
