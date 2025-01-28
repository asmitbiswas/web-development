async function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
  
(async function main(){
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    
    // let [x, y, o, ...rest] = [23323,  888, 1121, 3226541, 1544535, 4154]
    // console.log(x,y,o, ...rest);
    let obj = {
        a :1,
        b :2,
        C:3

    }
    let{a, b} = obj
    console.log(a, b);

    let arr = [1, 77, 11]
    console.log(sum(arr[0] + arr[1] + arr[2]));
    console.log (sum(...arr));
    
    
    
    
})()

//  ...rest will take all the other values
// EXAMPLE: let [o, p,] = [1,2,3] 3will not define here if we will give ...rest so 3 will define in that  when, we will write in the let and console.log(x,y,o, ...rest);
// console.log(b);// IIFE = Imediatly invoked function expression
// if, we will 
// write only rest it will be the 3rd array in the let 
// Thanks for that