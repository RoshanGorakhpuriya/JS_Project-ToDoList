let inp = document.querySelector("input");
let lists = document.querySelectorAll("li");
let btn = document.querySelector("button")

btn.addEventListener("click" , function(){
    let items = document.createElement("li");
    items.innerText = inp.value;

    let deletebtn = document.createElement("button");
    deletebtn.innerText = "delete";

    items.appendChild(deletebtn);
    ul.appendChild(items);
    inp.value = " ";
})

let ul = document.querySelector("ul");

ul.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON")
    {
        let parent = event.target.parentElement;
        console.log(parent);
        parent.remove();
    }
})



// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns)
// {
//     delbtn.addEventListener("click" , function(){
//         let par = delbtn.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }

