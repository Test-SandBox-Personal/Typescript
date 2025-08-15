"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manager {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello world");
    }
}
const M1 = new Manager("Ramesh", 12);
M1.greet();
console.log(M1.name);
//# sourceMappingURL=index.js.map