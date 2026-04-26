document.addEventListener("DOMContentLoaded", function () {
  iphoneOnlyStyle();
  const langButton = document.querySelector("#switchLangLink");
  const engElements = document.querySelectorAll(".eng");
  const arabicElements = document.querySelectorAll(".arabic");
  const menuLang = document.querySelector(".menu-lang");

  let currentLang = "en"; // default state (English shown first)
  engElements.forEach((el) => (el.style.display = ""));
  arabicElements.forEach((el) => (el.style.display = "none"));

  langButton.textContent = "ترجمة";

  const langToggle = function () {
    if (currentLang === "en") {
      // Switch to Arabic
      engElements.forEach((el) => (el.style.display = "none"));
      arabicElements.forEach((el) => (el.style.display = "block"));
      langButton.textContent = "Translate";
      currentLang = "ar";
    } else {
      // Switch to English
      engElements.forEach((el) => (el.style.display = ""));
      arabicElements.forEach((el) => (el.style.display = "none"));
      langButton.textContent = "ترجمة";
      currentLang = "en";
    }
  };
  menuLang.addEventListener("click", function (e) {
    e.preventDefault();
    langToggle();
  });
  langButton.addEventListener("click", function (e) {
    e.preventDefault();

    langToggle();
  });
  modalFunc(engElements, arabicElements, langButton);
});

// modal script
const modalFunc = function (engElements, arabicElements, langButton) {
  const modal = document.getElementById("welcomeModal");
  const englishBtn = document.getElementById("englishBtn");
  const arabicBtn = document.getElementById("arabicBtn");
  const withMusicBtn = document.getElementById("withMusic");
  const withoutMusicBtn = document.getElementById("withoutMusic");
  const form2 = document.querySelector(".form2");
  const form1 = document.querySelector(".form1");
  const audio = new Audio("assets/music.mp3");
  audio.loop = true;
  form2.classList.add("fade-out");

  // Open the modal automatically on page load
  modal.style.display = "block";

  // Close the modal when clicking (X)
  englishBtn.addEventListener("click", function (e) {
    e.preventDefault();
    engElements.forEach((el) => (el.style.display = ""));
    arabicElements.forEach((el) => (el.style.display = "none"));
    langButton.textContent = "ترجمة";
    form1.classList.add("fade-out");
    form2.classList.remove("fade-out");
  });
  arabicBtn.addEventListener("click", function (e) {
    e.preventDefault();
    engElements.forEach((el) => (el.style.display = "none"));
    arabicElements.forEach((el) => (el.style.display = "block"));
    langButton.textContent = "Translate";
    form1.classList.add("fade-out");
    form2.classList.remove("fade-out");
  });
  withMusicBtn.addEventListener("click", function (e) {
    e.preventDefault();

    audio.play().catch((err) => console.log(err));
    modal.classList.add("fade-out");
  });
  withoutMusicBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.add("fade-out");
  });

  // Close the modal if the user clicks anywhere outside of the modal box
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.add("fade-out");
    }
  };
};
const iphoneOnlyStyle = function () {
  // iphone handeling
  const isIphone = /iPhone/.test(navigator.userAgent);
  //iphone fix for background-attachment: fixed; issue
  const myElement = document.querySelector(".the-heart-welcome-section");
  const footerEl = document.querySelector(".the-heart-footer-section");
  console.log(isIphone);
  if (isIphone) {
    // Change 'my-element' to the ID of the HTML item you want to target

    if (myElement) {
      myElement.classList.remove("jarallax");
      myElement.classList.add("iphone-only-style");
    }
    if (footerEl) {
      footerEl.classList.remove("jarallax");
      footerEl.classList.add("iphone-only-style");
    }
  } else {
    if (myElement) {
      myElement.classList.add("jarallax");
    }
    if (footerEl) {
      footerEl.classList.add("jarallax");
    }
  }
};
