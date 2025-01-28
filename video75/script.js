console.log("Asmit is a Hacker")
console.log("Hey I am a Web Developer")


setTimeout(()=>{
    console.log("I Have A APPLICATION")
2000;})

console.log("THE END OF THE WORLD")

const fn = () => {
    console.log("Hey I am a Young Developer")
}

const afrg= (afrg) => {
    console.log(
        afrg
    )
    
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Asmit")
    document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" , callback)

