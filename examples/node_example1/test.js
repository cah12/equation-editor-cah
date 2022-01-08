
//Create an equation editor that will be trigger when a clickable html element with id 'test' is clicked.
const ed = new EquationEditor("test");

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
new EquationEditor("test2", options);

//Note: Your app can create as many editorrs as necessary.

//Listen for when 'test' editor has something.
$(window).on("equationEdited", function (e, editedEquation, idOfTriggerElement) {
    if (idOfTriggerElement == 'test') {
        $("#output").val(editedEquation);          
    }
});

//Listen for when 'test2' editor has something.
$(window).on("equationEdited", function (e, editedEquation, idOfTriggerElement) {
    if (idOfTriggerElement == 'test2') {
        $("#output2").val(editedEquation);        
    }
});