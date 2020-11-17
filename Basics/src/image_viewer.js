import "../styles/image_viewer.css";
import small from "../assets/small.jpg";

{
	const image = document.createElement("IMG");
	image.src = small;
	document.body.appendChild(image);
}
