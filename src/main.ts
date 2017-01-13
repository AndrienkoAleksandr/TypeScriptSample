import { sayHello } from "./greet";

function name (divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

console.log(sayHello("typescript"));

name("greeting", "TypeScript");