// //for loop 
// for(let i=0;i<5;i++)
// {
//     console.log(i);
// }

// //for - in loop
// let obj = {
//     name:'Suraj',
//     age:20,
//     IsSoftwareEngineer:true
// }

// for(key in obj)
// {
//     console.log(key+"->"+obj[key]);
// }

// //Function in javaScritp
// //way-1
// function sum(a,b)
// {
//     return a+b;
// }
// console.log(sum(2,3));

// way-2
// const sum = (a,b) =>{
//     return a+b;
// }
// console.log(sum(4,3));

// Q1 && Q2
let marks={
    Suraj:98,
    Harry:96,
    Subh:46
}
//Using for loop
// for(i=0;i<Object.keys(marks).length;i++)
// {
//     console.log(Object.keys(marks)[i]+"->"+marks[Object.keys(marks)[i]]);
// }
//Using for in loop
// for(key in marks)
// {
//     console.log(marks[key]);
// }

//Q2
// let num=15;
// let i;

// while(i!=num)
// {
//     console.log("try again");
//     i = prompt("Enter a Number");
// }
// console.log("correct your are win !")

let min=(a,b,c,d)=>{
    return (a+b+c+d)/4;
}
console.log(min(0,4,6,10));
