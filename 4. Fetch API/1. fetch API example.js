let p = fetch("https://goweather.herokuapp.com/weather/Curitiba")
p.then((value)=>{
    return value.json()
})

p.then((val)=>{
    console.log(val)
})