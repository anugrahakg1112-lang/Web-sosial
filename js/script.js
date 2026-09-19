document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const home = document.getElementById("home");
    const cards = document.querySelectorAll(".social-card");


    /*
     * Setelah intro selesai,
     * intro benar-benar dilepas agar tidak menutupi halaman.
     */
    setTimeout(() => {

        if (intro) {
            intro.remove();
        }

        if (home) {
            home.classList.add("ready");
        }

    }, 8000);


    /*
     * Efek klik pada tombol sosial
     */
    cards.forEach(card => {

        card.addEventListener("click", () => {

            card.style.transform = "scale(.96)";

            setTimeout(() => {
                card.style.transform = "";
            }, 180);

        });

    });


    /*
     * Mencegah animasi aneh ketika halaman
     * kembali dari tab/background.
     */
    document.addEventListener("visibilitychange", () => {

        if (!document.hidden && home) {
            home.style.animationPlayState = "running";
        }

    });

});
