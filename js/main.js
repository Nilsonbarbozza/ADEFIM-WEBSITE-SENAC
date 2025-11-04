const btn = document.getElementsByClassName("redirect-donate");

Array.from(btn).forEach((botao) => {
    botao.addEventListener("click", () => {
        window.open("pages/doar/doar.html", "_blank");
    })
});