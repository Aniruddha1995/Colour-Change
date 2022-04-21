const heading = document.getElementById("color_description");
const clickButton = document.getElementById("click_me");

const generateRandomColor = () => {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
		console.log(Math.floor(Math.random()*16));
	}
	return color;
};

var generatedColor = null;

clickButton.onclick = () => {
	generatedColor = generateRandomColor();
	document.body.style.backgroundColor = generatedColor;

	heading.innerText = "";
	heading.innerText = `HEX COLOR: ${generatedColor}`;
};
