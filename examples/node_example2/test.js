//import {EquationEditor} from "equation-editor-cah"

//Create an equation editor that will be trigger when a clickable html element with id 'test' is clicked.
const ed = new EquationEditor("trigger");
//ed.noBootstrap()
//ed.noMathJax();
//ed.noMathJs();

//ed.edit();

const options = {
    hideAlphas: true,
    title: 'Function Editor',
    screenColor: "#fff",
    screenTextColor: "#00f",
    prettyOnly: true,
    initializeWithLastValue: true,
    validOnly: true,
    bigDialog: true,
    //parenthesis: "keep",
    //implicit: "show",
    //simplifyOutput: true,
    //operatorButtonTextColor: "red"
    //buttonImages: {xSquareImg: "img/xSquare3.png"}
    buttonImages: { xSquareImg: "Sqr", squareRootImg: "Sqrt", xToPowYImg: "x^y" }
}

//Create a second equation editor that will be trigger when a clickable html element with id 'test2' is clicked.
new EquationEditor("trigger2", options);

//Note: Your app can create as many editorrs as necessary.

//Listen for when 'test' editor has something.
$(window).on("equationEdited", function (e, editedEquation, idOfTriggerElement) {
    if (idOfTriggerElement == 'trigger') {
        console.log("fn:" + editedEquation, idOfTriggerElement); //e.g. fn:sqrt(45)+(5x-y)2x^2 test
        //console.log(math.evaluate(editedEquation))
    }
});

//Listen for when 'test2' editor has something.
$(window).on("equationEdited", function (e, editedEquation, idOfTriggerElement) {
    if (idOfTriggerElement == 'trigger2') {
        console.log("fn:" + editedEquation, idOfTriggerElement); //fn:sqrt(45)+(5x-y)2x^2 test2
        // console.log(math.evaluate(editedEquation))
    }
});