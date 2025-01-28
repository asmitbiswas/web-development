// #<6 gryffindor <8 hufflepuff <12 ravenclaw     >12 slytherin


let students = ["Shubam", "Rick", "Trishan", "Priti", "Kaif", "Faiz", "Illyan", "emanuel", "Franklien", "Jimmy", "Carl", "Subir Ghosh", "Arabinda", "Pinki Biswas Mondal"]

let houses = []

for (const student of students) {
   if(student.length > 6 ) 
    houses.push("gryffindor")
else if (student.length > 8 ) {
    houses.push("hufflepuff") 
}
else if (student.length > 12 ) {
    houses.push("Ravenclaw ") 
}
else {
    houses.push("slytherin") 
}
console.log(houses)



    
}