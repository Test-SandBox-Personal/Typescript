"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//return the first element of array now input array can be string or number or any custom type;
//This is how generic works
function getel(arg) {
    return arg[0];
}
const el1 = getel(["s1", "s2", "s3"]);
const el2 = getel([1, 2, 3, 4, 5, 6]);
const el3 = getel(["s1", 1, 2, 3]);
console.log(el3);
//# sourceMappingURL=index.js.map