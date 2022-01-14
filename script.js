

//16x16 square divs with DOM manip
//they have to be appended as child of container
let container = document.querySelector("#container");
//16 squares that are div
let square1 = document.createElement("div");
let square2 = document.createElement("div");
let square3 = document.createElement("div");
let square4 = document.createElement("div");
let square5 = document.createElement("div");
let square6 = document.createElement("div");
let square7 = document.createElement("div");
let square8 = document.createElement("div");
let square9 = document.createElement("div");
let square10 = document.createElement("div");
let square11 = document.createElement("div");
let square12 = document.createElement("div");
let square13 = document.createElement("div");
let square14 = document.createElement("div");
let square15 = document.createElement("div");
let square16 = document.createElement("div");


//squares defined as children of container in DOM
container.appendChild(square1);
container.appendChild(square2);
container.appendChild(square3);
container.appendChild(square4);
container.appendChild(square5);
container.appendChild(square6);
container.appendChild(square7);
container.appendChild(square8);
container.appendChild(square9);
container.appendChild(square10);
container.appendChild(square11);
container.appendChild(square12);
container.appendChild(square13);
container.appendChild(square14);
container.appendChild(square15);
container.appendChild(square16);


//Setting up targeting each square and because of this
// giving them id = square

let squares = document.getElementById("container").childNodes;

for( let i = 0; i < squares.length; i++){

    squares[i].classList.add("square");
}

//now we can style them all through .square


//individual squares would be targeted squares[0-15]

//now eventListener when hovering with mouse 
//that leaves trail of X color

//function pencil that will apply at mouse location when mouse
//hovers over certain square



function pencil (e){
  
    e.target.style.backgroundColor = "yellow";
}
addEventListener("mouseover", pencil)

//missing an exception for pencil() when mouseover button:
// mouseover should exclusively color the .square

//function when button clicked on


let button = document.querySelector("button");


function clear (){

    let choice = prompt("Choose amount of squares per side", "e.g. 4")

    for (i = 0; i <= squares.length ; i++){

    squares[i].container.removeChild(squares[i]);
    }
    //correctly resets the board; however style method throws TypeError

    for (i = 0; i <= choice; i++){

        container.appendChild(squares[choice]);
    }
        

}
button.addEventListener("click", clear);









