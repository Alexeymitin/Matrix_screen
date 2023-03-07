document.addEventListener("DOMContentLoaded", () => {
    let textBox = document.querySelector(".screen"),
        text = textBox.innerText,
        newHTML = "";

    for (i = 0; i < text.length; i++) {
        newHTML += "<span>" + `${text[i]}` + "</span>";
    }
    textBox.innerHTML = newHTML;

    let spans = textBox.querySelectorAll("span"),
        count = 0,
        timeout = 0;

    function typeText() {
        spans[count].classList.add("visible");
        if (spans[count].innerText == " " || spans[count].innerHTML == " ") {
            timeout = Math.floor(Math.random() * Math.floor(1000));
            spans[count].classList.add("cursor");
        } else {
            timeout = 50;
        }

        if (count < text.length - 1) {
            setTimeout(() => {
                spans[count].classList.remove("cursor");
                count++;
                typeText();
            }, timeout);
        }
    }

    typeText();
});
