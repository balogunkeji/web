import "./style.css";
import { getOrder } from "./getuser";
import photo from "./data/vel.png";

var dom = document.getElementById("image");
var Photo = new Image();
Photo.src = photo;
dom.appendChild(Photo);

getOrder();
