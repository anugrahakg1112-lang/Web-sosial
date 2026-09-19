document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const home = document.getElementById("home");
    const board = document.querySelector(".home-board");
    const cards = document.querySelectorAll(".social-card");


    /* ==========================================
       INTRO SELESAI
    ========================================== */

    setTimeout(() => {

        if (intro) {
            intro.remove();
        }

    }, 7900);


    /* ==========================================
       KARTU SOSIAL
    ========================================== */

    cards.forEach((card) => {

        card.addEventListener("pointerdown", () => {

            card.classList.add("pressed");

        });


        card.addEventListener("pointerup", () => {

            card.classList.remove("pressed");

        });


        card.addEventListener("pointercancel", () => {

            card.classList.remove("pressed");

        });


        card.addEventListener("pointerleave", () => {

            card.classList.remove("pressed");

        });

    });


    /* ==========================================
       EFEK PAPAN BERANDA SAAT SCROLL
    ========================================== */

    let ticking = false;

    window.addEventListener("scroll", () => {

        if (!ticking) {

            window.requestAnimationFrame(() => {

                if (board) {

                    const scroll =
                        window.scrollY;

                    const movement =
                        Math.min(scroll * 0.025, 12);

                    board.style.transform =
                        `translateY(${movement}px)`;

                }

                ticking = false;

            });

            ticking = true;

        }

    });


    /* ==========================================
       TOMBOL KEMBALI KE POSISI NORMAL
    ========================================== */

    window.addEventListener("pageshow", () => {

        cards.forEach((card) => {

            card.classList.remove("pressed");

        });

        if (board) {
            board.style.transform = "";
        }

    });


    /* ==========================================
       PARALLAX HALUS PADA MOUSE
       Desktop saja
    ========================================== */

    if (window.matchMedia("(pointer:fine)").matches) {

        document.addEventListener("mousemove", (event) => {

            if (!board) return;

            const x =
                (event.clientX / window.innerWidth - .5);

            const y =
                (event.clientY / window.innerHeight - .5);

            board.style.setProperty(
                "--mouse-x",
                `${x * 5}px`
            );

            board.style.setProperty(
                "--mouse-y",
                `${y * 5}px`
            );

        });

    }


    /* ==========================================
       LINK EXTERNAL
    ========================================== */

    document.querySelectorAll("a[target='_blank']")
        .forEach((link) => {

            link.addEventListener("click", () => {

                link.style.opacity = ".75";

                setTimeout(() => {

                    link.style.opacity = "";

                }, 300);

            });

        });

});
