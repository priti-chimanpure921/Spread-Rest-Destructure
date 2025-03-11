let numbers = [1,2,3,4];

//concept of spread
let minimum = Math.min(...numbers);
console.log(minimum);
console.log(Math.max(2,1,3,2,4,5,4,3,7));
console.log(...numbers);

//create a copy of array using spread
//spread with array literals
let newArr = [...numbers];
console.log(newArr);

newArr.forEach((ele)=>{
    console.log(ele);
});

let str = [..."string"];// string is converted into an array using spread
console.log(str);

//spread with object literals
//create a copy of an object using spread
const data = {
    email : "priti@gmail.com",
    password : "123abc"
};
const dataCopy = {...data , id : 101 ,city : "Pune"};
console.log(dataCopy);

//converting an array into object using spread
let obj1 = {...numbers}; // index are used as a key
console.log(obj1);

//converting a string into an object using spread
let obj2 = {..."apnacollege"};
console.log(obj2);

//Rest concept takes indefinite number of arguments and bundle them into an array
function print(...args)// takes indefinite number of arguments and bundle them into an array named args
{
    console.log(typeof(args));
    for(let i=0 ;i<args.length ; i++)
    {
        console.log(args[i]);
    }
}
print(1,2);
print(2,3,1,4);

function add(...args)
{
    return args.reduce((sum,ele)=> sum + ele );// Array methods can be applied here 
}
let res = add(1,2,3);
console.log("result of addition is : " , res);

//Qs4.Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
// The function should return a new array with the original array values and all of the additional arguments doubled.
let array_name = ["priti","rakesh","chimanpure"];
function doubleAndReturnArgs(arr,...args)// function accepts array and variable number of arguments
{     
    let new_arr = [...arr];//spread. Copy of original array
    console.log(args);// concept of rest is used. args is a collection of indefinite number of args
    for(let i =0 ;i<args.length;i++)
    {
        new_arr.push(args[i]*2);
    }
    console.log(new_arr);
    return new_arr;
}
let answer = doubleAndReturnArgs(array_name,1,2,3);
console.log(answer);
console.log(doubleAndReturnArgs(numbers,1,2,3,4));

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object 
// which contains all the keys and values of the first object and second object.
let obj3 = {
    name : "Priti",
    age : 36
};
let obj4 = {
    city : "Nashik",
    course : "Delta 5.0"
};
function mergeObjects(obj3,obj4)
{
    let new_obj = {...obj3, ...obj4};//concept of spread is used to copy two objects into new object
    return new_obj;
}
console.log(mergeObjects(obj3,obj4));


//Destructuring arrays 
let names = ["Priti","Rakesh","Chimanpure"];
let [firstName , lastName] = names ;//variables are created as per the value of array indices
console.log(firstName,lastName);

//Destructuring Objects
let student = {
    name : "Priti",
    age : 36,
    subjects : ["Physics", "chemistry" , "Maths"],
    username : "@priti",
    password : "abcd"
};
let { username , password} = student; // username and password are variable here.
console.log( username , password );
//variable name and key name must be same .On the basis of variable name , key will get searched.
//If we want to have different variable name then we can use the following format
let { name : studentName , age : studentAge } = student ;
console.log(studentName , studentAge);
