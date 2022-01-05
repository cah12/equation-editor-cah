## Screenshots

The default Equation Editor

![The default editor (i.e no configuration options passed in the constructor](img/screenshot1.png "The default editor (i.e no configuration options passed in the constructor.) ")

<br>

A configured Equation Editor (see configuration options below)

![The configured editor (i.e configuration options passed in the constructor](img/screenshot2.png "The configured editor (i.e configuration options passed in the constructor.) ")

<br>

## Installation

`npm install equation-editor-cah`

or use the CDN

    <!-- It is important that jquery.min.js is above editor.min.js -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    
    <!-- The version may change during maintenance. Be sure to use the highest available version. -->
    <script src="https://unpkg.com/equation-editor-cah@1.0.0/js/editor.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/equation-editor-cah@1.0.0/css/editor.min.css" />

or download equationEditor from GitHub, https://github.com/cah12/equation-editor-cah, and add the necessary files to your project.

<br>

## How to use

    //Create an equation editor that is triggered when a clickable html element with id 'test' is clicked.
    new EquationEditor("test");
    
    const options = {
        hideAlphas: true,
        title: 'Function Editor',
        screenColor: "#fff",
        screenTextColor: "#00f",
        prettyOnly: true,
        initializeWithLastValue: true,
        validOnly: true,
        bigDialog: true
    }
    //Create a second equation editor that is triggered when a clickable html element with id 'test2' is clicked.
    new EquationEditor("test2", options);

    //Note: Your app can create as many editorrs as necessary.

    //Listen for when 'test' editor has something.
    $(window).on("equationEdited", function (e, editedEquation, idOfTriggerElement) {
        if(idOfTriggerElement == 'test'){
            console.log("fn:" + editedEquation, idOfTriggerElement); //e.g. fn:sqrt(45)+(5x-y)2x^2 test
        } 
    });

    //Listen for when 'test2' editor has something.
    $(window).on("equationEdited", function (e, editedEquation, idOfTriggerElement) {
        if(idOfTriggerElement == 'test2'){
            console.log("fn:" + editedEquation, idOfTriggerElement); //fn:sqrt(45)+(5x-y)2x^2 test2
        }            
    });


<br>

## Configuring the editor
EquationEditor has no public methods. You configure it during instantiation by passing an options object as the second argument in the constructor. Possible options are shown in the table below.

|   Option                  | Description                                           | Default           |
|   ----------              | ----------    | ------            |
|   hideAlphas              | If false, show the alpha buttons in the editor             | true              |         
|   title                   | Sets the modal title               | 'Equation editor' |  
|   screenColor             | Sets the screen color              | '#252525'         |
|   screenTextColor         | Sets the screen text color               | '#ffffff'         |
|   operatorButtonTextColor | Sets the operator buttons text color. An operator button is any button that is not the enter button, AC button, backspace button, number button or decimal button.    |   #337cac | 
|   prettyOnly              | If true, do not display ascii math characters              | false             |
|   initializeWithLastValue | If true, initialize the editor with the last edited entry              | false             |
|   validOnly               |  If true, the enter button is only enabled if the entry is mathematically valid. Validity is tested by math.js parse method. Thus, for example, math.parse('48 *') is invalid and math.parse('48 * 5 \* y') is valid             | false             |
|   bigDialog               |  If true, the big dialog is displayed             | false             | 
|   simplifyOutput          |  If true, the output is simplified using Mathjs's simpified method. If the input is 4^2x^2, for example, the simpifed output is 16 x ^ 2  | false |
|   parenthesis             | This option changes the way parentheses are used in the output. There are three options available:<br>&nbsp;&nbsp;&nbsp;&nbsp;`'keep'`  Keep the parentheses from the input and display them as is.<br>&nbsp;&nbsp;&nbsp;&nbsp;`'auto'` Only display parentheses that are necessary. Mathjs tries to get rid of as much parentheses as possible.<br>&nbsp;&nbsp;&nbsp;&nbsp;`'all'` Display all parentheses that are given by the structure of the node tree. This makes the output precedence unambiguous.    |   'auto'    |
|   implicit                |   You can change the way that implicit multiplication is converted to LaTeX. The two options are `'hide'`, to not show a multiplication operator for implicit multiplication and `'show'` to show it.<br><i>Note: Inputs are converted to LaTeX as part of the processing.</i>   | 'hide'    |
|   buttonImages            |  An object that specifies an image or text on some buttons. To specify an image for the "x square" button, for example, set the buttonImages option to <i><b>{xSquareImg: patToMyImagesFolder/myXSquareImage.xxx}</b></i>. patToMyImagesFolder is a file path or url. To make the "x square" button display "Sqr", set the buttonImages option to <i><b>{xSquareImg: "Sqr"}</b></i>. Valid button text must not contain the period(.) character.<br>Not every button in the editor could be modified by this option. The buttons that may be modified are:<br>&nbsp;&nbsp;&nbsp;&nbsp;`secondFunctionImg` The second function button<br>&nbsp;&nbsp;&nbsp;&nbsp;`piImg` The pi(i.e 22/7) button<br>&nbsp;&nbsp;&nbsp;&nbsp;`backSpaceImg` The backspace button<br>&nbsp;&nbsp;&nbsp;&nbsp;`xSquareImg` The x to power 2 button<br>&nbsp;&nbsp;&nbsp;&nbsp;`squareRootImg` The square root button<br>&nbsp;&nbsp;&nbsp;&nbsp;`xToPowYImg` The x to power y button<br>&nbsp;&nbsp;&nbsp;&nbsp;`tenToPowXImg` The ten to power x button<br>&nbsp;&nbsp;&nbsp;&nbsp;`enterImg` The enter button<br>Hopefully, the naming scheme makes it easy to identify the buttons. |   All images are serve from the https://cdn.jsdelivr.net/gh/cah12/equation-editor@v1.0.0/ endpoint.

<br>

## Under the hood
The EquationEditor depends on MathJax, MathJs and Bootstrap and dynamically adds the CDNs, https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js, https://unpkg.com/mathjs@10.0.0/lib/browser/math.js, https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css and https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js to the head section. If you wish to add any of these dependencies yourself, call the appropriate static method shown below before creating any instance of EquationEditor.

    EquationEditor.noMathJax(); //Prevent dynamic loading of MathJax
    EquationEditor.noMathJs(); //Prevent dynamic loading of MathJs
    EquationEditor.noMathBootstrap(); //Prevent dynamic loading of Bootstrap js and css

If a dependency is not found, the editor will issue a warning to the console.

<br>

EquationEditor tries to detect the bootstrap version and deal with the breaking changes Boostrap 4 and 5 cause to Bootstrap 3. If you detect any bugs, please create an issue(git).

## Reference
https://mathjs.org/

https://www.mathjax.org/