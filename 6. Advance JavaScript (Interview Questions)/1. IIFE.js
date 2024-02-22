// IIFE means -> bahut sare promis jo ek await return karta hai usko ek sath run karne ko kahate hai  Example of this
let a = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(456)
      }, 4000)
    })
  }
  
  (async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
  })()
  
  
  // console.log(d) // Throws error