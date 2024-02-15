/*
1. first it's not similar to .then chaining thing -> in chaining .then we have been use the resturn value in next .then that previous promises have returned
                                                     but here all .then is indepenet() work , but in promises .then is depened to each previous promisies
 */

let p1 = new promise((resolve,reject)=>{
      alert("hey I'm not resolved");
      setTimeout(()=>{
        resolve(1);
      },200)
})
p1.then(()=>{
    console.log("Congratulation this promises is resolved Now");
})

p1.then(()=>{
    alert("Suraj Sharma");
})