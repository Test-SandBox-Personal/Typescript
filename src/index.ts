interface persontype {
  name: string;
  age: number;
  greet: () => void;
  islegal: () => boolean;
}

class Manager implements persontype {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log("Hello world");
  }

  islgeal(): boolean {
    if (this.age > 18) {
      return true;
    }
    return false;
  }
}

const M1 = new Manager("Ramesh", 12);
M1.greet();

console.log(M1.name);
