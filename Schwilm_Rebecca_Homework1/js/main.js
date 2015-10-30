/*
     Name: Rebecca Schwilm
     Date: 10/20/2015
     Class & Section:  WIA-1115
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message*/



/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
window.onload = function () {
    if (Modernizr.canvas) { //checks browser for canvas compatibility
        var theCanvas = document.getElementById('Canvas1');
        if (theCanvas) {
            var ctx = theCanvas.getContext('2d');

            if (ctx) {
                //draw here
                ctx.fillStyle = 'rgb(161, 231, 255)';
                ctx.strokeStyle = 'rgb(0,0,0)';

                ctx.lineWidth = 5;

                //draw the rectangle
                ctx.fillRect(0, 0, 50, 100);
                ctx.strokeRect(0, 0, 50, 100);
            }

        }
    } else {
        alert('Canvas is not supported! Please upgrade to a newer browser.');
    };
    //test if modernizr is working
    //console.log(Modernizr);



    /*******************************************
    PART 2

    Draw a circle starting at point (50 ,50)
    That has a radius of 20 px 
    Set the color of the circle to a shade of red and set the alpha to .5
    Set the stroke color to black and use a radius of 30px for this circle.

    Reminder - set the style first then draw.
    Use the arc method
    ********************************************/


    //Draw Circle here
    var Canvas2 = document.getElementById('Canvas2')
    if (Canvas2) {
        var ctx = Canvas2.getContext('2d');
        if (ctx) {
            ctx.fillStyle = 'rgba(255, 8, 24, .5)';
            ctx.beginPath();
            ctx.arc(50, 50, 20, 0, (360 / 180) * Math.PI, false);
            ctx.fill();
            ctx.closePath;

            ctx.beginPath();
            ctx.strokeStyle = '#000';
            ctx.arc(50, 50, 30, 0, (360 / 180) * Math.PI, false);
            ctx.stroke();
            ctx.closePath();
        }
    }



    /*******************************************
    PART 3

    Practice using Path drawing.
    Create a 5-point star shaped pattern using the lineTo method.
    Begin this shape at (100, 100)

    Height and width and color are up to you.

    ********************************************/


    //Draw Star here

    var Canvas3 = document.getElementById('Canvas3')
    if (Canvas3) {
        var ctx = Canvas3.getContext('2d');
        if (ctx) {
            ctx.strokeStyle = "#5852FF";

            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(100, 100);
            ctx.lineTo(125, 50);
            ctx.lineTo(150, 100);
            ctx.lineTo(200, 110);
            ctx.lineTo(160, 130);
            ctx.lineTo(180, 170);
            ctx.lineTo(125, 150);
            ctx.lineTo(90, 170);
            ctx.lineTo(100, 130);
            ctx.lineTo(60, 110);
            ctx.closePath();
            ctx.stroke();
        }
    }



    /*******************************************
    PART 4

    Practice drawing with Bezier curves.
    Try drawing the top to an umbrella.
    This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

    Position, height, width and color are your choice.
    Do not overlap any other object.

    ********************************************/

    //Draw Umbrella top here

    var Canvas4 = document.getElementById('Canvas4')
    if (Canvas4) {
        var ctx = Canvas4.getContext('2d');
        if (ctx) {
            //bezierCurveTo(cx1, cy1, cx2, cy2, end1, end2)
            ctx.strokeStyle = 'rgb(60, 68, 38)';
            ctx.beginPath();
            ctx.moveTo(100, 100);
            ctx.bezierCurveTo(150, 30, 200, 30, 250, 100);
            ctx.bezierCurveTo(242, 92, 226, 92, 200, 100);
            ctx.bezierCurveTo(180, 92, 160, 92, 150, 100);
            ctx.bezierCurveTo(140, 92, 120, 92, 100, 100);
            ctx.stroke();
        }
    }
    /*******************************************
    PART 5

    Practice using text.
    Draw text into your canvas.  It can said whatever you would like in any color.

    ********************************************/

    //Draw text here
    var Canvas5 = document.getElementById('Canvas5')
    if (Canvas5) {
        var ctx = Canvas5.getContext('2d');
        if (ctx) {
            var textString = 'There is text on this canvas!'
            ctx.font = '15pt Arial';
            ctx.fillStyle = ('green');
            ctx.fillText(textString, 30, 30);

        }
    }

    /*******************************************
    PART 6

    Pixel manipulation.
    Draw the image logo.png into the canvas in the following 3 ways.
    1. The image exactly as it is.
    2. Shrink the image by 50%
    3. Slice a section of the logo out and draw that onto the canvas.

    Reminder to use the drawImage method for all 3 of the ways.

    ********************************************/

    //Draw images here
    var Canvas6 = document.getElementById('Canvas6')
    if (Canvas6) {
        var ctx = Canvas6.getContext('2d');
        if (ctx) {
            var srcImg = document.getElementById('img');
            ctx.beginPath();
            //full size image
            ctx.drawImage(srcImg, 0, 0);
            //scaled in half
            ctx.drawImage(srcImg, 0, 1300, 1650, 544);
            //section
            ctx.drawImage(srcImg, 520, 609, 40, 40, 0, 2200, 520, 609);
            ctx.closePath();
        }
    }


    /*******************************************
    PART 7

    Putting it all together. 

    Using a combination of all the methods. 
    Create a complex scene.
    You must use at least 3 different methods.

    ********************************************/

    // Draw scene here
    var Canvas7 = document.getElementById('Canvas7')
    if (Canvas7) {
        var ctx = Canvas7.getContext('2d');
        if (ctx) {

            //linear gradient
            var linGrad = ctx.createLinearGradient(0, 0, 0, 400);
            //color stops for gradient
            linGrad.addColorStop(0, '#080CFF');
            linGrad.addColorStop(.5, '#088CFF');
            linGrad.addColorStop(1, '#fff');

            ctx.beginPath();
            ctx.fillStyle = linGrad
            ctx.fillRect(0, 0, 400, 400);
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = "#08FF56";
            ctx.fillRect(0, 300, 400, 100);
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = '#FFFB08';
            ctx.arc(-10, -10, 100, 0, (360 / 180) * Math.PI, false);
            ctx.fill();
            ctx.closePath;

            ctx.beginPath();
            var sceneText = 'What a lovely day!';
            ctx.fillStyle = ('#000');
            ctx.fillText(sceneText, 200, 100);
            ctx.closePath();
        }
    }

}