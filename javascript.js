const box = document.querySelector(".box")
let opaque = true;
const shadeSwitch = document.querySelector("#opaque")
console.log(shadeSwitch)
let no;
let gridChange = document.querySelector("#gridChange")
const clear = document.querySelector("#clear")

shadeSwitch.addEventListener("click", ()=>{
    shadeSwitch.classList.toggle("active")
    if(shadeSwitch.classList.contains("active")){
        shadeSwitch.textContent= "Turn off opacity"
    }
    else{
        shadeSwitch.textContent = "Turn on opacity"
    }
})



function createGrid(no=4){
    let gridSize = no**2
    for(let i =0;i<gridSize;i++)
    {
        let smallBox = document.createElement("div")
        smallBox.style.border="1px solid black"
        let side = (554/no)-2 + "px"
        smallBox.style.height= side;
        smallBox.style.width= side;
        box.appendChild(smallBox);
    
        smallBox.addEventListener("mouseover", ()=>{

            if(shadeSwitch.classList.contains("active")){

            
            if(smallBox.style.backgroundColor==="")
                {
                smallBox.style.backgroundColor= getRandomColour();
                }
            else{
                let raw = getComputedStyle(smallBox).getPropertyValue("background-color")
                let colors = raw.split(",")
                colors[3]= parseFloat(colors[3])+0.1 
                colors = colors.join(',')+")";
                smallBox.style.backgroundColor= colors;
                
            }
        }
        else{
            smallBox.style.backgroundColor= getRandomColour();
        }

        clear.addEventListener("click", ()=>{
            resetGrid();
            createGrid(4);
    
        })

        })
    }
    
}
function getRandomColour()
{   
    let max = 256
    let r = Math.floor(Math.random() * max)
    
    let g = Math.floor(Math.random()* max)
    let b = Math.floor(Math.random() * max)
    let color= `rgba(${r},${g},${b},0.1)`;
    color.style
    return color
}

 function resetGrid()
 {
    while(box.firstChild)
    {
    box.removeChild(box.firstChild);
    }
 }

 createGrid();

 gridChange.addEventListener("click", ()=>{
    resetGrid();
     no = prompt("Enter new grid dimension")
     if(no>0&&no<65){
    createGrid(no);
     }
     else if(no>64){
        alert("enter a number between 1-64")  
        no = 4
        createGrid(4);
     }
     else{
        alert("Enter a valid number.")
        no = 4;
        createGrid(no);
     }
})



