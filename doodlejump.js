//board
let board;
let boardWidth = 360;
let boardHeight = 576;
let context;

//doodler
let doodlerWidth = 46;
let doodlerHeight = 46;
let doodlerX = boardWidth/2 - doodlerWidth/2;
let doodlerY = boardHeight*7/8 - doodlerHeight;
let doodlerRightImg;
let doodlerLeftImg;

let doodler = {
    img : null,
    x : doodlerX,
    y : doodlerY,
    width : doodlerWidth,
    height : doodlerHeight
}

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    //draw doodler
    //context.fillStyle = "green";
    //context.fillRect(doodler.x, doodler.y, doodler.width, doodler.height);

    //load doodler
    doodlerRightImg = new Image();
    doodlerRightImg.src = "/img/right.png";
    doodler.img = doodlerRightImg;
    doodlerRightImg.onload = function() {
        context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);
    }

    doodlerLeftImg = new Image();
    doodlerLeftImg.src = "./img/left.png";

    requestAnimationFrame(update);
}

function update() {
    requestAnimationFrame(update);

    //doodler
    context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);
}

