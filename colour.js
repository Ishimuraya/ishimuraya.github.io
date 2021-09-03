// This is a javascript for the colour.html

// Background colour selector
function changeBackground(colour) {
    document.body.style.background = colour;
}

function changeHeadingColour(colour) {
    document.querySelector('h3').style.color = colour;
}

function changeParagraphColour(colour) {
    document.querySelector('p').style.color = colour;
}

document.addEventListener('DOMContentLoaded', function() {

    // Background colour
    document.querySelector('#backgroundButton').addEventListener('click', function() {
        let backgroundColour = document.querySelector('#backgroundInput').value;
        changeBackground(backgroundColour);
    });

    // Heading colour
    document.querySelector('#headingButton').addEventListener('click', function() {
       let headingColour = document.querySelector('#headingInput').value;
       changeHeadingColour(headingColour);
    });

    // Paragraph colour
    document.querySelector("#paragraphButton").addEventListener('click', function() {
        let paragraphColour = document.querySelector('#paragraphInput').value;
        changeParagraphColour(paragraphColour);
    });

});