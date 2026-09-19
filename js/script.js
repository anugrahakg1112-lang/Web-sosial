document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");

    /*
     * Intro selesai setelah animasi spanduk.
     * Setelah itu elemen intro dihapus dari tampilan
     * supaya halaman utama bisa digunakan normal.
     */

    setTimeout(() => {
        if (intro) {
            intro.style.display = "none";
        }
    }, 6500);


    /* =================================
       EFEK KLIK TOMBOL SOSIAL
    ================================= */

    const socialCards =
        document.querySelectorAll(".social-card");

    socialCards.forEach((card) => {

        card.addEventListener("click", () => {

            card.style.transform = "scale(0.96)";

            setTimeout(() => {
                card.style.transform = "";
            }, 150);

        });

    });


    /* =================================
       EFEK PARALLAX RINGAN DI HP
    ================================= */

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll) {
            document.body.classList.add("scrolling-down");
        } else {
            document.body.classList.remove("scrolling-down");
        }

        lastScroll = currentScroll;

    });


    /* =================================
       PREVENT DOUBLE TAP ZOOM
    ================================= */

    let lastTouchEnd = 0;

    document.addEventListener(
        "touchend",
        (event) => {

            const now = Date.now();

            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }

            lastTouchEnd = now;

        },
        false
    );

});
