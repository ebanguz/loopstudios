//
document.addEventListener("DOMContentLoaded", e => {
    const $html = document.documentElement;
    const $body = document.body;
    const $nav = document.querySelector(".nav");
    const $menuBtn = document.querySelector(".nav__hamburguer");

    document.addEventListener("click", e => {
        if (
            e.target.matches(".nav__hamburguer") ||
            e.target.matches(".nav__link")
        ) {
            [$body, $html].forEach(el => el.classList.toggle("no-scroll"));
            [$nav, $menuBtn].forEach(el => el.classList.toggle("open"));

            $menuBtn.setAttribute(
                "aria-expanded",
                $menuBtn.classList.contains("open")
            );
        }
    });
});

/*



*/