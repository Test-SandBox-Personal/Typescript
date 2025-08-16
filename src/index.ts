//return the first element of array now input array can be string or number or any custom type;
//This is how generic works
function getel<T>(arg: T[]): T {
  return arg[0];
}

const el1 = getel<string>(["s1", "s2", "s3"]);
const el2 = getel<number>([1, 2, 3, 4, 5, 6]);

type eltype = number | string;

const el3 = getel<eltype>(["s1", 1, 2, 3]);

console.log(el3);
