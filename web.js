/*function outer(){
var a=1;
function inner(){
var b=2;
console.log(a+b);
}
fruits();*/

/*
function testTruthyFalsy(val){
    return val?console.log("Truthy"):console.log("falsy");
}

/*
testTruthyFalsy();

var a=[1,2,3];
var b="1,2,3";
console.log(a==b);*/
/*
var a=[1,2,3];
var b="1,2,3";
console.log(a===b);*/
/*
if(true){
    const message = 'Hello';
    console.log(message);
}*/
/*
for (const color of ['green', 'red', 'blue']) {
    const message = 'Hi';
    console.log(color);
    console.log(message);
}*/
/*
function run() {

    var message = 'Run, Forrest, Run!';
    console.log(message);
  }

  run();*/

 /* var amount = 101;
if (amount > 100) {
    let amount = 200;
    amount = amount * 2;
    console.log(amount);
}
console.log(amount);*/
/*
var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();
console.log(typeof shape)
console.log(typeof foo)*/
/*
const obj = {
    method() {
        console.log( method );
    },
    ordinaryFunction: function ordinaryFunction() {
        console.log( ordinaryFunction );
    }
};

obj.ordinaryFunction()*/
/*var str = "codeAcademy";
var str1 = str.toLowerCase();
var str2 = str.toUpperCase();
*/
function foo(){
var a =1;
  function bar(){
      var b =2;

    function bars(){
        var c =3;
        console.log(a,b,c);
    }
   bars();
    console.log(a,b);
 }
  bar() ;
console.log(a);
}
foo();

