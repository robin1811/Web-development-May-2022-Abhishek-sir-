// String

TOPIC:// single quotes
 var str = "hello there everyone, how are you in FJP-9";
console.log(str);
// double quotes
var str = "hello there everyone, how are you in FJP-9";
console.log(str);

// backticks
// backticks variable use
var user = "Robin";
var str = `Hello there, I am ${user}`;
console.log(str);
// backtick evaulation using operators
var str = `bring me ${1 + 1} glass of water`;
console.log(str);
// strings can come on screen as represented, i.e., the space will be show exactly.
var str = `hello there my name is ${user}

            this will come in next line...`;
console.log(str);

TOPIC:// VAR VS LET -
//  let can be only be re-initialized    var can be both re-declared and re-initialized
// let is blocked scope      var is function scope in functions, otherwise global scoped

 var num = 10;
for (var i = 0; i < num; i++) {
  if (i % 2 == 0) {
    // console.log("num is even");
  }
  console.log(i);
}
console.log(i);
