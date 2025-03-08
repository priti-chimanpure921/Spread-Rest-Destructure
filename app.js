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
let str = [..."string"];
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
    for(let i=0 ;i<args.length ; i++)
    {
        console.log(args[i]);
    }
}
print(1,2);
print(2,3,1,4);

function add(...args)
{
    return args.reduce((sum,ele)=> sum + ele );
}
let res = add(1,2,3);
console.log("result of addition is : " , res);

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
