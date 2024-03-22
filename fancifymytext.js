//function for bigger buttons click
function makeBigger(){
    document.getElementById("textInput").style.fontSize = "24pt";
}
//function for radio buttons
function changeStyle(){
    var textArea = document.getElementById("textInput");
    var fancyShmancyRadio = document.getElementById("fancyShmancyRadio");
    var boringBettyRadio = document.getElementById("boringBettyRadio");
    if(fancyShmancyRadio.checked){
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";

    }
    else if (boringBettyRadio.checked) 
    {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}
//Function to hangle moo 
function makeMoo(){
    var textArea = document.getElementById("textInput");
    var text = textArea.areaValueMax;
    var sentences = text.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        var lastWordIndex = words.length - 1;
        words[lastWordIndex] = words[lastWordIndex].toUpperCase() + "-Moo";
        sentences[i] = words.join(" ");
    }
    textArea.value = sentences.join(". ");
}
//Event Listeners
document.getElementById("biggerButton").addEventListener("click", makeBigger);
document.getElementById("fancyShmancyRadio").addEventListener("change", changeStyle);
document.getElementById("boringBettyRadio").addEventListener("change", changeStyle);
document.getElementById("mooButton").addEventListener("click", makeMoo);
