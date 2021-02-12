import firstModule from "./firstModule";
import { name, age } from "./userInfo";
import getUserName from "./getUserName";
import { address, city } from "./userAddress";
import makeImage from "./image";
import "./styles.css";
import logo from "./assets/img/logo.png";

// Typescript
import foo from "./foo.ts";

console.log({ logo });
console.log({ firstModule, name, age });
console.log(getUserName("name"));
console.log({ address, city });

const image = makeImage(logo);
document.body.appendChild(image);
