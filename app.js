// app.js

// function to generate Hex

function getRandomHex() {
    const hexLetter = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexLetter[Math.floor(Math.random() * 16)];
    }
    return color
}
// function to update background and text

    function updateHex() {
        let bgColor = getRandomHex();
        document.body.style.backgroundColor = bgColor
        document.getElementById('bg-text').textContent = `Background Color: ${bgColor}`;
    }

// function to update button
    
    document.getElementById('btn').addEventListener('click', updateHex);