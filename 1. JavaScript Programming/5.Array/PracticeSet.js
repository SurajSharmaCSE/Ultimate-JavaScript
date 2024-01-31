// Q1 
// let arr = [1,2,3,4,5];

// let a = prompt("Enter a Number for put in Array")
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

// Q2
// let arr = [1,2,3,4,5];
// let a;
// do{
//     a = prompt("Enter number");
//     a = Number.parseInt(a);
//     arr.push(a);
// } while(a!=0);

// console.log(arr);

//3
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.filter((x)=>{
//   return x%10 == 0
// })
// console.log(n)

//4
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]

// let a1 = arr.map((x)=>{
//     return x*x;
// })

// console.log(a1);

//5
arr = [1,2,3,4,5]
let ans = arr.reduce((n1,n2)=>{
    return n1*n2;
})
console.log(ans);

