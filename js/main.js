document.addEventListener("DOMContentLoaded", () => {
  const btnEn = document.getElementById("btn-en");
  const btnEs = document.getElementById("btn-es");

  const contentEn = document.getElementById("content-en");
  const contentEs = document.getElementById("content-es");

  // These match the IDs in the HTML file
  const linksEn = document.getElementById("links");
  const linksEs = document.getElementById("links-es");

  function setLanguage(lang) {
    const isEn = lang === "en";

    /*
     Toggle content blocks...

     ==================================================================================
     When isEn is true - it shows English content, the opposite is applied for Spanish
     ==================================================================================

     */
    contentEn?.classList.toggle("hidden", !isEn);
    contentEs?.classList.toggle("hidden", isEn);

    /*
     Toggle link blocks...

     ================================================================================
     When isEn is true - it shows English links, the opposite is applied for Spanish
     ================================================================================

     */
    linksEn?.classList.toggle("hidden", !isEn);
    linksEs?.classList.toggle("hidden", isEn);

    // Toggles button active state
    btnEn?.classList.toggle("active", isEn);
    btnEs?.classList.toggle("active", !isEn);

    document.documentElement.lang = lang;
  }

  // When clicked, it sets the language
  btnEn?.addEventListener("click", () => setLanguage("en"));
  btnEs?.addEventListener("click", () => setLanguage("es"));

  // Default language when the page loads
  setLanguage("en");
});
