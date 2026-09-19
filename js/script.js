document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const cards = document.querySelectorAll(".social-card");

    /*
     * Intro benar-benar dihapus setelah
     * seluruh animasi selesai.
     */

    setTimeout(() => {

        if (intro) {
            intro.remove();
        }

    }, 7900);


    /*
     * Efek tekan kartu sosial
     */

    cards.forEach((card) => {

        card.addEventListener("pointerdown", () => {
            card.style.transform = "scale(.97)";
        });

        card.addEventListener("pointerup", () => {
            card.style.transform = "";
        });

        card.addEventListener("pointercancel", () => {
            card.style.transform = "";
        });

        card.addEventListener("pointerleave", () => {
            card.style.transform = "";
        });

    });


    /*
     * Efek gerak papan mengikuti sedikit scroll.
     * Tidak mengganggu animasi naik-turun CSS.
     */

    const board =
        document.querySelector(".home-board");

    let scrolling = false;

    window.addEventListener("scroll", () => {

        if (scrolling) return;

        scrolling = true;

        requestAnimationFrame(() => {

            if (board) {

                const amount =
                    Math.min(
                        window.scrollY * 0.02,
                        10
                    );

                board.style.setProperty(
                    "--scroll-y",
                    `${amount}px`
                );
            }

            scrolling = false;

        });

    });


    /*
     * Reset ketika halaman dibuka kembali
     */

    window.addEventListener("pageshow", () => {

        cards.forEach((card) => {
            card.style.transform = "";
        });

    });

});
