// let obj = {
//     a: 1 , 
//     b: "Asmit"
// }:)___________kkfnf
// console.log(obj)

// let animal = {
//     eats:true
// }

// let rabbit = {
//     jumps:true
// }
// rabbit._proto_ = animal;

class Animal {
    constructor(name){
        this.name = name
        console.log("object has maden :)")
    }

    eats(){
        console.log("Kha Raha Hun ")
    } 


    jumps(){
        console.log("khud Raha Hun   ")
    } 
}


class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("object has maden :)")
    }
    eats(){
        super.eats()
        console.log("Kha Raha Hun roar ")
    } 
}


let a = new Animal("Bunny") 
console.log(a)

let l = new Lion("Sher ka Beta ")
console.log(l)