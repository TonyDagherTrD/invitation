document.addEventListener("DOMContentLoaded", function () {
  const isIphone = /iPhone/.test(navigator.userAgent);
//iphone fix for background-attachment: fixed; issue
  const myElement = document.querySelector('.the-heart-welcome-section'); 
        const footerEl = document.querySelector('.the-heart-footer-section');
console.log(isIphone);
    if (isIphone) {      
        // Change 'my-element' to the ID of the HTML item you want to target
      
        if (myElement) {
            myElement.classList.remove('jarallax');
            myElement.classList.add('iphone-only-style');
        }
        if (footerEl) {
            footerEl.classList.remove('jarallax');
            footerEl.classList.add('iphone-only-style');
        }
    }else{
        if (myElement) {
            myElement.classList.add('jarallax');
        }
        if (footerEl) {
            footerEl.classList.add('jarallax');
        }
    }


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