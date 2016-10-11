/*var result = 0;
function add(number){
    var result = 0;
    result += number;
}
add(5);
add(15);
console.log(result);*/

/*function greet(who, text) {
    who = ', ' + who + '!';
    alert(text + who);
}

var who = "John";

greet(who, "Hello");

alert(who);*/

/*function checkAge(age){
  return  (age < 18) ? false  :  " you are allowed";
}
var res = checkAge(10);
alert(res);*/

/*function min(a,b,c){
    
    if (a < b && a < c ){
        return a;
    }else if 
        (b < a && b < c){
        return b;
    }
        return c;

    
}
alert(min(17,2,3));*/

/*function min(a,b,c){
    return a < b && a < c && a ||
           b < a && b < c && b ||
           c;
}


alert(min(5,55,8))*/

/*function pow(a, b){
    if (b === 0){
        return 1;
    }
    if(b<0){
        var negative = true;
        b = -b;
    }
    
    var result = a;
    
    for (var i = 1; i < b; i++){
        result *= a;
    }
    return negative? 1/result : result;
}


alert(pow(2, 3));
alert(pow(2, -4));
alert(pow(2, -3));*/




/*function greet(greeteng, name){
    if(arguments.length < 2){
        return "warning"
    }
    greeteng = greeteng || "Hi";
    name = name || 'Stranger';
    
    return greeteng + ', ' + name;
}


var res1 = greet('Hello','John');
var res2 = greet(null, "John");
var res3 = greet('Hello', null);
var res4 = greet('Hello');


console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);*/


/*var arr = [1, 2, 3];
 function my(arr){
     for(var i = 1; i < arguments.length; i++){
     arr.push(arguments[i]);
    }
 }
my(arr, 'one', 'ttt', 'fgfdf');
console.log(arr);
*/

/*var arr = [1, 5, 9, 8, 77, 45, 89, 25, 46];


function my(arr){
    var result = {
        odd: [],
        even: []
    }
    for(var i = 0; i < arguments.length; i++){
        if(arr[i]  % 2) ?
            result.odd.push(arr[i]):
            result.even.push(arr[i])
}
    return result;
    }
console.log(my(array));
______________________________________________________________________________*/


/*function Unseen(a){
   return (a < 2) ?
       0 :
        Math.pow(a - 2,3);
}

var result1 = Unseen(2);
var result2 = Unseen(3);
var result3 = Unseen(4);
var result4 = Unseen(5);


console.log(result1, result2, result3, result4);*/



/*var arr1 = [1,2,3];
var arr2 = [6,7,8,];
var str = `the result of division `;
var res = str.split(' ');


console.log(res);*/


/*function str(a){
    return str.split()
}
str(i wanna rock);
console.log(str)*/

/*function idGenerator() {
  
    return function() {
        return id++;
    }
}

var nextId = idGenerator();


console.log( nextId() );
console.log( nextId() );
console.log( nextId() );
console.log( nextId() );
console.log( nextId() );*/

/*function createGreeting(greeteng) {
    return function(name) {
        console.log(`${greeteng}, ${name}`);
    }
}


var sayHi = createGreeting('Hi');
sayHi('Bob');

var sayHello = createGreeting('Hello');
sayHello('Anna');*/

/*var allFriends = ["Bob", "Rick", "John"];

function greetFriends(friends, greetFunc) {
    for(var i = 0; i<friends.length; i++) {
       greetFunc(friends[i]);
    }
}

function greet(friend) {
    console.log('Hello, ' + friend);
}

greetFriends(allFriends, greet);*/
/*function genericPoemMaker(name, gender) {
    console.log(name + " is finer than fine wine.");
    console.log("Altruistic and noble for the modern time");
    console.log("Always admirably adorned with the latest style.");
    console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
}

function getUserInput(firstName, lastName, gender, callback) {
    var name = `${firstName} ${lastName}`;
    callback(name, gender);
}

getUserInput('vasya', 'vetrov', '15', genericPoemMaker);*/

//var arr = [1,22,-33,43,65,-87,-75];

//arr.forEach(function(elem, i, arr) {
//    console.log(`there's ${elem} on the ${i} position`);
//    console.log(arr);
//});
            
           
//var newarray = arr.filter(function(elem){
    //return elem < 0;
//})


//console.log(newarray);



var arr = [1,4,5,9,55,64,81,99];

    var newArray = arr.filter(function(elem){
        return Math.sqrt(elem) == Math.ceil(Math.sqrt(elem));
    })


console.log(newArray);