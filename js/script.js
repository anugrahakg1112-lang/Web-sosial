document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");

    /*
     * Intro berjalan sekitar 6 detik.
     * Setelah halaman utama selesai muncul,
     * intro dilepas dari layar.
     */

    setTimeout(() => {

        if (intro) {
            intro.remove();
        }

    }, 7200);


    /* ======================================
       KLIK LINK SOSIAL
    ====================================== */

    const cards = document.querySelectorAll(".social-card");

    cards.forEach((card) => {

        card.addEventListener("pointerdown", () => {
            card.style.transform = "scale(.96)";
        });

        card.addEventListener("pointerup", () => {
            card.style.transform = "";
        });

        card.addEventListener("pointercancel", () => {
            card.style.transform = "";
        });

    });


    /* ======================================
       PARALLAX HALUS
    ====================================== */

    window.addEventListener("scroll", () => {

        const profile =
            document.querySelector(".profile");

        if (!profile) return;

        const scroll =
            window.scrollY;

        profile.style.transform =
            `translateY(${scroll * 0.04}px)`;

    });


    /* ======================================
       TOMBOL KEMBALI KE POSISI NORMAL
    ====================================== */

    window.addEventListener("pageshow", () => {

        document.querySelectorAll(".social-card")
            .forEach((card) => {

                card.style.transform = "";

            });

    });

});
