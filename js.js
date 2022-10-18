const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const row4 = document.querySelector(".row4");

const button = document.querySelector((".button"));
let numSides = 0;
button.addEventListener("click", (event) => {
   numSides = prompt("How many sides?",4);
   create(numSides);
});



function create(num){

    for(let i=0;i<num;i++){
        let divider = document.createElement("div");
        div.setAttribute("id","flex");
        div.setAttribute("class",`row${num}`);
    }

    
    for(let i=0;i<num*4;i++){
        let div = document.createElement("div");
        div.setAttribute("class","col");
        div.addEventListener("mouseover",(event)=>{
            div.style.backgroundColor = "#00FF00";
        });
        if(i<num){
            document.querySelector(".row1").appendChild(div);
        }else if(i<num*2){
            document.querySelector(".row2").appendChild(div);
        }else if(i<num*3){
            document.querySelector(".row3").appendChild(div);
        }else{
            document.querySelector(".row4").appendChild(div);
        }
    }
}

