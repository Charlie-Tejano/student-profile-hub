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

    // Toggle content blocks
    contentEn?.classList.toggle("hidden", !isEn);
    contentEs?.classList.toggle("hidden", isEn);

    // Toggle link blocks
    linksEn?.classList.toggle("hidden", !isEn);
    linksEs?.classList.toggle("hidden", isEn);

    // Toggle button active state
    btnEn?.classList.toggle("active", isEn);
    btnEs?.classList.toggle("active", !isEn);

    document.documentElement.lang = lang;
  }

  btnEn?.addEventListener("click", () => setLanguage("en"));
  btnEs?.addEventListener("click", () => setLanguage("es"));

  // Default language on load
  setLanguage("en");
});





