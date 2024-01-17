// app.js

//function to generate the random hex

function getRandomHexColor(){

    const hexLetter = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0; i < 6; i++){
        color += hexLetter[Math.floor(Math.random() * 16 )];
    }
return color;
}
  // Function to update the background color and text content
 function updateHex(){
    let bgColor = getRandomHexColor()
    document.body.style.backgroundColor = bgColor;
    document.getElementById("bg-text").textContent = `Background Color: ${bgColor}`;
    
    
 }
  
  // Event listener for the button click
document.getElementById("btn").addEventListener("click", updateHex)
  