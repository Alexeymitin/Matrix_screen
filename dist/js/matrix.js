document.addEventListener("DOMContentLoaded", () => {
    const CHARACTERS =
        "101111001001111111100011110111100100111111110001111011110010011111111000111";

    class Column {
        constructor(x, fontSize, canvasHeight, context) {
            this.x = x;
            this.y = 0;
            this.fontSize = fontSize;
            this.canvasHeight = canvasHeight;
            this.context = context;
        }


        drawSymbol() {
            if (this.y === 0 && Math.random() < 0.98) {
                return;
            }

            const characterIndex = Math.floor(
                Math.random() * CHARACTERS.length
            );
            const symbol = CHARACTERS[characterIndex];

            this.context.fillText(symbol, this.x, this.y);

            if (this.y > this.canvasHeight) {
                this.y = 0;
            } else {
                this.y += this.fontSize;
            }
        }
    }

    const canvas = document.querySelector("#matrix"),
        context = canvas.getContext("2d");

    // function resizeCanvasToDisplaySize(canvas) {
    //     const displayWidth = canvas.clientWidth;
    //     const displayHeight = canvas.clientHeight;

    //     const needResize =
    //         canvas.width !== displayWidth || canvas.height !== displayHeight;

    //     if (needResize) {
    //         canvas.width = displayWidth;
    //         canvas.height = displayHeight;
    //     }

    //     return needResize;
    // }

    // resizeCanvasToDisplaySize(context.canvas);


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const FONT_SIZE = 16,
        columns = [],
        columnsCount = canvas.width / FONT_SIZE;

    for (let i = 0; i < columnsCount; i++) {
        columns.push(
            new Column(i * FONT_SIZE, FONT_SIZE, canvas.height, context)
        );
    }

    context.font = `700 ${FONT_SIZE}px Courier Prime`;

    function animate() {

        context.fillStyle = "rgba(0, 0, 0, 0.05)";
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = "green";

        columns.forEach((column) => column.drawSymbol());

        setTimeout(() => {
            requestAnimationFrame(animate);
        }, 50);
    }

    animate();
});
