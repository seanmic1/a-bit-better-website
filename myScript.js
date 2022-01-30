// lines to be displayed
const lines = [
    "LOADING INTRODUCTION.EXE",
    "████████████████████████████████████████",
    "DONE",
    "  ",
    "Hello!",
    "What's your name? (I don't store names dw)",

    "Welcome to my website!",
    "My name is Sean Michael :)",
    "   ",
    "Oh, you want to know more about me?",
    "  ",
    "Hmm...",
    "I'm 20 years old",
    "I'm from Indonesia",
    "I've lived in Qatar since I was 3",
    "  ",
    "I'm currently studying at Monash University Malaysia",
    "    ",
    "...",
    "I don't know what else to say",
    "See more of my stuff in my home page",
    "Bye bye now"
];

// interval loops
var intervalID = setInterval(displayLines, 2000, lines);

// index variable
var index = 0;

// function that is called repeatedly
function displayLines(lines)
{
    // new element to be added
    const newP = document.createElement("p");

    // new text node to be added
    const newContent = document.createTextNode("");

    // split text into array
    var txt = lines[index].split("");

    // inner index variable
    var i = 0;

    // display text, character by character
    var display = setInterval(function(){
        // add letter to content
        newContent.textContent += txt[i];
        // add content to newP
        newP.appendChild(newContent);
        // get doc element
        const curDiv = document.getElementById("aDiv");
        // insert new element before doc element
        document.body.insertBefore(newP, curDiv);
        // if txt is finished, stop the inner interval
        if (i == (txt.length-1)) {
            clearInterval(display);
        }
        i += 1
    }, 50)

    index += 1;
    if (index == lines.length){
        clearInterval(intervalID);
    }
}

function goHome(){
    window.location.href = 'pages/home.html'
}