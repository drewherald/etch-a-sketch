const button = document.querySelector((".button"));
let numSides = 0;
button.addEventListener("click", (event) => {
   numSides = prompt("How many sides?",4);
   create(numSides);
});

function create(num){

    for(let i=0;i<num;i++){
        let divider = document.createElement("div");
        divider.setAttribute("id","flex");
        divider.setAttribute("class",`row${i}`);
        document.querySelector(".squares").appendChild(divider);
    }

    
    for(let i=0;i<num;i++){
        for(let i=0;i<num;i++){
            let div = document.createElement("div");
            div.setAttribute("class","col");
            div.addEventListener("mouseover",(event)=>{
                div.style.backgroundColor = "black";
            });
            document.querySelector(`.row${i}`).appendChild(div);   
        }
       
       
    }
}

