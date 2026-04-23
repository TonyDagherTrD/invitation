document.addEventListener("DOMContentLoaded", function () {
    const langButton = document.querySelector("#switchLangLink");
     const engElements = document.querySelectorAll(".eng");
        const arabicElements = document.querySelectorAll(".arabic");
        const menuLang = document.querySelector(".menu-lang");
    
    let currentLang = "en"; // default state (English shown first)
  engElements.forEach(el => el.style.display = "");
            arabicElements.forEach(el => el.style.display = "none");

            langButton.textContent = "ترجمة";

            const langToggle = function() {
                if (currentLang === "en") {
                    // Switch to Arabic
                    engElements.forEach(el => el.style.display = "none");
                    arabicElements.forEach(el => el.style.display = "block");
                    langButton.textContent = "Translate";
                    currentLang = "ar";
                } else {
                    // Switch to English
                    engElements.forEach(el => el.style.display = "");       
                    arabicElements.forEach(el => el.style.display = "none");
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
});