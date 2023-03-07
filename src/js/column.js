const CHARACTERS = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン'

export class Column {

	constructor(x, fontSize, context) {
		this.x = x;
		this.y = 0;
		this.fontSize = fontSize;
		this.context = context;
	}

	drawSymbol() {
		const characterIndex = Math.floor(math.random() * CHARACTERS.length);
		const symbol = CHARACTERS[characterIndex];

		this.context.fillText(symbol, this.x, this.y);
		this.y+= this.fontSize;
	}
}