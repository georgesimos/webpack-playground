import firstModule from "./firstModule";
import { name, age } from "./userInfo";
import getUserName from "./getUserName";
import { address, city } from "./userAddress";
import "./styles.css";

console.log({ firstModule, name, age });
console.log(getUserName("name"));
console.log({ address, city });
