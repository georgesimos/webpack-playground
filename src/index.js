import firstModule from "./firstModule";
import { name, age } from "./userInfo";
import getUserName from "./getUserName";
import { address, city } from "./userAddress";
import makeImage from "./image";
import "./styles.css";
import logo from "./logo.png";

const image = makeImage(logo);
console.log({ logo });
console.log({ firstModule, name, age });
console.log(getUserName("name"));
console.log({ address, city });

document.body.appendChild(image);
