let a3 = [1, 5494, 111, 322, 4]
// let nem = []
// for (let index = 0; index < a3.length; index++) {
//     const element = a3[index];
//     nem.push(element**9)
    
// }


let nem = a3.map((e)=>{
    return e**2
})
console.log(nem)

const greaterthanseven = (e)=>{
        if(e>7){
        return true
}
return false
}
console.log(a3.filter(greaterthanseven))

let arr = [7, 9, 2, 645 ,4]

const red = (a, b)=>{
    return a*b
}
console.log(arr.reduce(red))