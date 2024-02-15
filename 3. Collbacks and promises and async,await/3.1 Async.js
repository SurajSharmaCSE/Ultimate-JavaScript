/* Example-1 */

// async function suraj(){
//     return 5;
// }

// suraj().then((x)=>{
//     console.log(x);
// })

/* Example-2 */

async function suraj(){
    let p1 = new promise((resolve, reject)=>{
        setTimeout(()=>{
              console.log("promis p1");
        },200)
    })

    let p2 = new promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("promises 2")
        },500)
    })

    let x = await p1;
    let y = await p2;

    return [x,y];
}

let my = suraj();
my.then((value)=>{
    console.log(value)
})