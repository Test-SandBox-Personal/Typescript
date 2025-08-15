//Assignment

//Create a function that takes either a user or an admin object as an input, and returns a string saying "Welcome, [name]".

interface Admin {
  name: string;
  permissions: String;
}

interface User {
  name: string;
  age: number;
}

type usertype = User | Admin;
function greet(user: usertype) {
  console.log(user.name);
}

let u1: User = {
  name: "Tushar",
  age: 21,
};

let u2: Admin = {
  name: "TusharAdmin",
  permissions: "Access to this repo",
};

greet(u1);
