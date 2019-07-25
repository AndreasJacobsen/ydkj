//undefined
var a;
typeof a;

//typeof returnerer hvilken type en operator i JS er
//string
a = "Hello world!";
typeof a;

//number
a = 42;
typeof a;

//boolean
a = true;
typeof a;

//object
a = null;
typeof a;

//undefined, gir samme som å ikke definere
//altså er undefined det samme som bare å skrive var a;
a = undefined;
typeof a;

//object
a = {
  b: "c"
};
typeof a;

//for å printe i konsoll "console.log(obj.b)" eller bare "obj.b"
var obj = {
  a: "hello world",
  b: 42,
  c: true
};

//i JS er array ett objekt
//print i konsollen samme måte som andre objekter (se linje 33)
var arr = ["Hello world", 42, true];
arr.length; //3
typeof arr; //object

//function returnerer typeof function selv om det er ett object
function foo() {
  return 42;
}
foo.bar = "hello world";
typeof foo; // "function"
typeof foo(); // "number"
typeof foo.bar; // "string"

//built inn types have many properties that we can use
var a = "hello world!";
var b = 3.14159;

a.length; // 12 (tar ikke med whitespace)
a.toLocaleUpperCase(); //"HELLO WORLD"
b.toFixed(4); //gir 4 desimaltall

//coercion - når datatyper konverteres. Explisit er lett å se, implisit er vanskelig
//eksempel på explicit
var a = "42";
var b = Number(a); //Converts from string a to int a

a; //typeof = string
b; //typeof = number

//Closure
function makeAdder(x) {
  // parameter `x` is an inner variable

  // inner function `add()` uses `x`, so
  // it has a "closure" over it
  function add(y) {
    return y + x;
  }
  return add;
}
/*
'plusEn' gets a reference to the inner 'add(...)'
function with closure over the x paramter of the outer makeAdder
*/
var plusOne = makeAdder(1);
var plusTen = makeAdder(10);
console.log("Return from makeAdder(1) is: " + plusOne(1)); // returns 1
// makeAdder remembers it's X value set in plusEn or plusTi
// If we give these variables another function input this is passed to add(y) instead of
console.log(plusOne(10)); // returns 11
console.log(plusTen(5)); // returns 15

// Modules

function User() {
  var username, passwords;

  function doLogin(user, pw) {
    username = user;
    passwords = pw;

    // do the rest of the login here..
    console.log(
      "you are now logged inn with username: " +
        username +
        " and password: " +
        passwords
    );
  }
  // The modules public API
  var publicAPI = {
    login: doLogin
  };
  return publicAPI;
}

var andreas = User();

// Calls the public API of the User module, this api runs doLogin.
andreas.login("Andreas", "trygtPassord");
