document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const home = document.getElementById("home");

    const socialCards =
        document.querySelectorAll(".social-card");


    /*
     * Intro selesai setelah animasi.
     */

    setTimeout(() => {

        if (intro) {
            intro.remove();
        }

    }, 8200);


    /*
     * Efek tombol sosial
     */

    socialCards.forEach(card => {

        card.addEventListener("pointerdown", () => {

            card.style.transform =
                "scale(.97)";

        });


        card.addEventListener("pointerup", () => {

            card.style.transform = "";

        });


        card.addEventListener("pointercancel", () => {

            card.style.transform = "";

        });

    });


    /*
     * Jika user kembali ke halaman
     * setelah berpindah aplikasi.
     */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (!document.hidden && home) {

                home.style.animationPlayState =
                    "running";

            }

        }
    );

});
