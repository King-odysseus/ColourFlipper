// app.js

//function to generate the random hex

function getRandomHexColor(){
    const hexLetters = "123456789ABCDEF";
    let colors = "#";

    for(let i=0; i < 6; i++){
        colors += hexLetters[ Math.floor(math.random() * 16 ]
    }
return colors
}
  
//   // Function to update the background color and text content
//   function updateColor() {
//     const bgColor = getRandomHexColor();
//     document.body.style.backgroundColor = bgColor;
//     document.getElementById('bg-text').textContent = `Background Color: ${bgColor}`;
//   }
  
//   // Event listener for the button click
//   document.getElementById('btn').addEventListener('click', updateColor);
  