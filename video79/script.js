let a  = prompt("Enter the first number ")
 
let b = prompt("Enter the second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("This is not allowed")
}

let sum = parseInt(a) + parseInt(b)
function main(){
    let x  = 43535353535333
try {
    console.log("The sum is", sum* x)
    return true
    
} catch (error) {
    console.log("Freaking Mind YO A Error Has Came you have to pass it")
    return false
}
finally{
    console.log("Files has been closed and db connection has closed too")
}

}
let c = main()
