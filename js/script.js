document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");

    const cards =
        document.querySelectorAll(".social-card");


    /* =========================
       INTRO
    ========================== */

    setTimeout(() => {

        if (intro) {
            intro.remove();
        }

    }, 8500);


    /* =========================
       SOCIAL CARD PRESS
    ========================== */

    cards.forEach(card => {

        card.addEventListener(
            "pointerdown",
            () => {

                card.style.transform =
                    "scale(.97)";

            }
        );


        card.addEventListener(
            "pointerup",
            () => {

                card.style.transform = "";

            }
        );


        card.addEventListener(
            "pointercancel",
            () => {

                card.style.transform = "";

            }
        );


        card.addEventListener(
            "pointerleave",
            () => {

                card.style.transform = "";

            }
        );

    });


    /* =========================
       PARALLAX BOARD
       Hanya aktif di perangkat
       yang punya pointer.
    ========================== */

    const board =
        document.querySelector(".home-board");


    if (
        board &&
        window.matchMedia("(pointer:fine)").matches
    ) {

        document.addEventListener(
            "mousemove",
            event => {

                const x =
                    (event.clientX /
                        window.innerWidth -
                        0.5) * 4;

                const y =
                    (event.clientY /
                        window.innerHeight -
                        0.5) * 4;

                board.style.setProperty(
                    "--mouse-x",
                    `${x}px`
                );

                board.style.setProperty(
                    "--mouse-y",
                    `${y}px`
                );

            }
        );

    }


    /* =========================
       VISIBILITY
    ========================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (!document.hidden) {

                document.documentElement
                    .style
                    .scrollBehavior = "smooth";

            }

        }
    );

});
