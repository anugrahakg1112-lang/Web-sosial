document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const mainContent = document.getElementById("main-content");

    // Setelah animasi pembuka selesai,
    // intro benar-benar disembunyikan.
    setTimeout(() => {
        intro.style.display = "none";
    }, 6500);


    // Efek klik pada tombol sosial
    const socialCards = document.querySelectorAll(".social-card");

    socialCards.forEach(card => {

        card.addEventListener("click", () => {

            card.style.transform = "scale(0.96)";

            setTimeout(() => {
                card.style.transform = "";
            }, 150);

        });

    });

});
