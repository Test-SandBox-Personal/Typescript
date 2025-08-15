function getMax(nums: number[]): number {
  if (nums.length === 0) throw new Error("Array is empty");

  let maxi = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxi) {
      maxi = nums[i];
    }
  }

  return maxi;
}

let nums: number[] = [1, 2, 3, 4, 5, 6];

console.log(getMax(nums));

interface Address {
  city: string;
  pincode: string;
}

interface User {
  name: string;
  age: number;
  addresses: Address[];
}

let us1: User = {
  name: "tushar",
  age: 20,
  addresses: [
    { city: "address1", pincode: "1100110" },
    { city: "address2", pincode: "110101" },
  ],
};

console.log(us1.addresses);

//Given a list of user try to filter out the ones that are above the age of 18

interface USER {
  firstname: string;
  lastname: string;
  age: number;
}

let userlist: USER[] = [
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
];

function islegal(users: USER[]) {
  const legalusers = users.filter((u) => {
    if (u.age > 18) {
      return u;
    }
  });

  return legalusers;
}

console.log(islegal(userlist));
