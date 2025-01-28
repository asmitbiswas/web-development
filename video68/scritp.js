console.log("Asmit`s code")

// let cow = document.getElementsByClassName("box")
// console.log(cow)

// cow[1].style.backgroundColor = "red"

// document.getElementById("pop").style.backgroundColor = "blue"

// document.getElementById("pop").style.backgroundColor = "blue"

// document.querySelector(".box").style.backgroundColor = "orange"
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "orange";
})

e = document.getElementsByTagName("div")

e(4).matches("#pop")