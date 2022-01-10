# EquatoionEditor - A point-and-click math funtion editor

File: [Link to demo](https://unpkg.com/equation-editor-cah/demo.html) (click for a live demo)


## Screenshots

The default Equation Editor

![The default editor (i.e no configuration options passed in the constructor](img/screenshot1.png "The default editor (i.e no configuration options passed in the constructor.) ")

<br>

A configured Equation Editor (see configuration options below)

![The configured editor (i.e configuration options passed in the constructor](img/screenshot2.png "The configured editor (i.e configuration options passed in the constructor.) ")

<br>

## Installation

    npm install equation-editor-cah

or use the CDN
    
    <!-- The version may change during maintenance. Be sure to use the highest available version. -->
    <script src="https://unpkg.com/equation-editor-cah@1.0.20/js/editor.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/equation-editor-cah@1.0.20/css/editor.min.css">    

or download equationEditor from GitHub, https://github.com/cah12/equation-editor-cah, and add the necessary files to your project.

The EquationEditor depends on JQuery, MathJax, MathJs and Bootstrap. You could use CDNs as shown below. 

    <!-- It is important that jquery.min.js is above editor.min.js -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"> 
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <script src="https://unpkg.com/mathjs@10.0.0/lib/browser/math.js"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
    
    <!-- The version may change during maintenance. Be sure to use the highest available version. -->
    <script src="https://unpkg.com/equation-editor-cah@1.0.20/js/editor.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/equation-editor-cah@1.0.20/css/editor.min.css">  

<br>

## How to use

### Browser example

Assuming a folder structure as:

    index.html
    js
        test.js

In your html file.

    /*index.html*/

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Equation Editor - Browser</title>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

        <script src="https://unpkg.com/mathjs@10.0.0/lib/browser/math.js"></script>

        <!--Uncomment the line below for old browsers-->
        <!-- <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script> -->

        <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>

        <script src="https://unpkg.com/equation-editor-cah@1.0.20/js/editor.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/equation-editor-cah@1.0.20/css/editor.min.css">
    </head>

    <body>
        <div><button id="test">Test</button> <button id="test2">Test 2</button></div>
        <div> AsciiMath Output (Test) : <input id="output" type="text" readOnly=true placeholder="Edited output - Test" />
        </div>
        <div> AsciiMath Output (Test 2) : <input id="output2" type="text" readOnly=true
                placeholder="Edited output - Test 2" /></div>
        <script src="js/test.js"></script>
    </body>

    </html>

In your js file.

    /*test.js*/
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

<br>

### Nodejs example

    npm init -y
    npm i bootstrap jquery mathjax@3 mathjs equation-editor-cah --save


Assuming a folder structure as:

    app.js
    test.js
    package.json
    package-lock.json
    views
        index.html

In your html file.

    /*index.html*/

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node Example1</title>

        <script src="./jquery.min.js"></script>

        <link rel="stylesheet" href="./bootstrap.min.css">
        <script src="./bootstrap.min.js"></script>

        <script src="./math.js"></script>

        <!--Uncomment the line below for old browsers-->
        <!-- <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script> -->

        <script src="./tex-svg.js"></script>

        <script src="./editor.min.js"></script>
        <link rel="stylesheet" href="./editor.min.css">   

    </head>

    <body>
        <div><button id="test">Test</button> <button id="test2">Test 2</button></div>
        <div> AsciiMath Output (Test) : <input id="output" type="text" readOnly=true placeholder="Edited output - Test" />
        </div>
        <div> AsciiMath Output (Test 2) : <input id="output2" type="text" readOnly=true
                placeholder="Edited output - Test 2" /></div>
        <script src="./test.js"></script>
    </body>

    </html>

In your js file. (Note: test.js is the same as above.)

    /*app.js*/

    const express = require("express");
    const path = require('path');

    const app = express();

    app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')));
    app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
    app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
    app.use(express.static(path.join(__dirname, 'node_modules/mathjax/es5')))
    app.use(express.static(path.join(__dirname, 'node_modules/mathjs/lib/browser')))
    app.use(express.static(path.join(__dirname, 'node_modules/equation-editor-cah/js')))
    app.use(express.static(path.join(__dirname, 'node_modules/equation-editor-cah/css')))
    app.use(express.static(__dirname));

    app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
    });

    app.listen(5000, () => {
    console.log('Listening on port ' + 5000);
    });

<br>

## Configuring the editor
The EquationEditor has no public methods. You configure it during instantiation by passing an options object as the second argument in the constructor. Possible options are shown in the table below.

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
|   buttonImages            |  An object that specifies an image or text on some buttons. To specify an image for the "x square" button, for example, set the buttonImages option to <i><b>{xSquareImg: patToMyImagesFolder/myXSquareImage.xxx}</b></i>. patToMyImagesFolder is a file path or url. To make the "x square" button display "Sqr", set the buttonImages option to <i><b>{xSquareImg: "Sqr"}</b></i>. Valid button text must not contain the period(.) character.<br>Not every button in the editor could be modified by this option. The buttons that may be modified are:<br>&nbsp;&nbsp;&nbsp;&nbsp;`secondFunctionImg` The second function button<br>&nbsp;&nbsp;&nbsp;&nbsp;`piImg` The pi(i.e 22/7) button<br>&nbsp;&nbsp;&nbsp;&nbsp;`backSpaceImg` The backspace button<br>&nbsp;&nbsp;&nbsp;&nbsp;`xSquareImg` The x to power 2 button<br>&nbsp;&nbsp;&nbsp;&nbsp;`squareRootImg` The square root button<br>&nbsp;&nbsp;&nbsp;&nbsp;`xToPowYImg` The x to power y button<br>&nbsp;&nbsp;&nbsp;&nbsp;`tenToPowXImg` The ten to power x button<br>&nbsp;&nbsp;&nbsp;&nbsp;`enterImg` The enter button<br>Hopefully, the naming scheme makes it easy to identify the buttons. |   All images are serve from the https://unpkg.com/equation-editor-cah/ endpoint.

<br>

## Under the hood
If a dependency is not found, the editor will issue a warning to the console.

EquationEditor tries to detect the bootstrap version and deal with the breaking changes Boostrap 4 and 5 cause to Bootstrap 3. If you detect any bugs, please create an issue (https://github.com/cah12/equation-editor-cah/issues).

## Reference
https://mathjs.org/

https://www.mathjax.org/