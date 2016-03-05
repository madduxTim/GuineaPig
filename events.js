
// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
var sections = document.getElementsByClassName("article-section");
for (var i = 0; i<sections.length; i++) {  
    sections[i].addEventListener("click", function() {
        document.getElementById("output-target").innerHTML = "You clicked on the " + this.innerHTML + " section";
    });
};

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
document.getElementById("page-header").addEventListener("mouseover", function() {
    document.getElementById("output-target").innerHTML = "You moved your mouse over the header"; 
});

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
document.getElementById("page-header").addEventListener("mouseout", function() {
    document.getElementById("output-target").innerHTML = "You left me!!"; 
});
// When you type characters into the input field, the output element should mirror the text in the input field.
document.getElementById("keypress-input").addEventListener("keyup", function() {
    document.getElementById("output-target").innerHTML = document.getElementById("keypress-input").value;  
});
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
document.getElementById("add-color").addEventListener("click", function() {
    document.getElementById("guinea-pig").classList.toggle("bluePig");
});
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
document.getElementById("make-large").addEventListener("click", function() {
    document.getElementById("guinea-pig").style.fontSize= "3em";
});

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
document.getElementById("add-border").addEventListener("click", function() {
    document.getElementById("guinea-pig").className += " pigPen";
});
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
document.getElementById("add-rounding").addEventListener("click", function() {
    document.getElementById("guinea-pig").className += " pigPenRound";
});

// The first section's text should be bold.
var sectionStyling = document.getElementsByTagName("section");
sectionStyling[0].className += " bold";

// 10. The last section's text should be bold and italicized.
sectionStyling[sectionStyling.length-1].className += " italed" + " bold";

// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
var buttons = document.getElementsByTagName("button");
var howManyButtons = buttons.length;
for (var i = 0; i < howManyButtons; i++) {
    buttons[i].className += " blockButtons";
};









