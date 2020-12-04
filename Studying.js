class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return " I have a " + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }

  show() {
    return this.present() + ", it is a " + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
// console.log(mycar.show());

hello = function () {
  return "Hello World!";
};

helloArrow = () => {
  return "Hello World! Arrow function";
};

helloShorter = () => "Hello Shorter";

helloParameters = (val) => "Hello" + " " + val;

helloParentheses = (val) => "Hello" + " " + val;

// console.log(hello() + "\n" + helloArrow() + "\n" + helloShorter() + "\n" + helloParameters("Parameters") + "\n" +
//     helloParentheses("parentheses"));

class Header {
  constructor() {
    this.color = "Red";
  }

  //Regular Function:
  changeColor = function () {
    document.getElementById("demo").innerHTML += this;
  };

  //Arrow Function:
  changeColor2 = () => {
    document.getElementById("demo").innerHTML += this;
  };
}

myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
