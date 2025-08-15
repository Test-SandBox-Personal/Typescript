"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMax(nums) {
    if (nums.length === 0)
        throw new Error("Array is empty");
    let maxi = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maxi) {
            maxi = nums[i];
        }
    }
    return maxi;
}
let nums = [1, 2, 3, 4, 5, 6];
console.log(getMax(nums));
let us1 = {
    name: "tushar",
    age: 20,
    addresses: [
        { city: "address1", pincode: "1100110" },
        { city: "address2", pincode: "110101" },
    ],
};
console.log(us1.addresses);
let userlist = {
    User: [
        {
            firstname: "ramesh",
            lastname: "dukehs",
            age: 10,
        },
        {
            firstname: "dalpesh",
            lastname: "pukku",
            age: 20,
        },
        {
            firstname: "tuhpesh",
            lastname: "daab",
            age: 20,
        },
        {
            firstname: "naaatu",
            lastname: "kaap",
            age: 10,
        },
        {
            firstname: "khasi",
            lastname: "aagayi",
            age: 17,
        },
    ],
};
function islegal(users) {
    const legalusers = users.User.filter((u) => {
        if (u.age > 18) {
            return u;
        }
    });
    return legalusers;
}
console.log(islegal(userlist));
//# sourceMappingURL=index.js.map