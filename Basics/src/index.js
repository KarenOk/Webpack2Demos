const button = document.createElement("BUTTON");
button.innerText = "Click me";
document.body.appendChild(button);
button.onclick = () => {
	System.import("./image_viewer").then(module => {
		console.log(module);
	});
};
