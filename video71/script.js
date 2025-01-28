let div = document.createElement("div");
div.innerHTML = "I have been inserted <b>by asmit</b>"; 
div.setAttribute("class", "created");
div.querySelector(".coantainer").append(div);