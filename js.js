const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const row4 = document.querySelector(".row4");



for(let i=0;i<16;i++){
    let div = document.createElement("div");
    div.setAttribute("class","col");
    if(i<4){
        document.querySelector(".row1").appendChild(div);
    }else if(i<8){
        document.querySelector(".row2").appendChild(div);
    }else if(i<12){
        document.querySelector(".row3").appendChild(div);
    }else{
        document.querySelector(".row4").appendChild(div);
    }
}