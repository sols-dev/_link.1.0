//state variables //
let xboard, yboard, turn, win;

//cached element references //
const boardEl = document.getElementById('board');
const colorEl = document.getElementById('color');
const topText = document.getElementById('top-text')

//event listeners
boardEl.addEventListener('click', handleTileClick);



//usefull funnctions
function getCol(nodeId){
//returns a col number from an cxry nodeId
    colId = parseInt(nodeId.slice(1,3).replace("T","10"));
    return colId;
}

function getRow(nodeId){
//returns a row number from an cxry nodeId
    rowId = parseInt(nodeId.slice(3,4).replace("T","10"));
    return rowId;
}

function buildId(colId, rowId){
//takes to number to build an cxry nodeId
    const id = "c" + colId.toString().replace("10","T") + "r" + rowId.toString().replace("10","T");
    return id;
}

function getTopId(nodeId){
    const colId = getCol(nodeId);
    const rowId = getRow(nodeId);
    const topColId = colId;
    const topRowId = rowId - 1;
    const topId = buildId(topColId, topRowId);
    return topId;
}

function getRightId(nodeId){
    const colId = getCol(nodeId);
    const rowId = getRow(nodeId);
    const rightColId = colId + 1;
    const rightRowId = rowId;
    const rightId = buildId(rightColId, rightRowId);
    return rightId;
}

function getBotId(nodeId){
    const colId = getCol(nodeId);
    const rowId = getRow(nodeId);
    const botColId = colId;
    const botRowId = rowId + 1;
    const botId = buildId(botColId, botRowId);
    return botId;
}

function getLeftId(nodeId){
    const colId = getCol(nodeId);
    const rowId = getRow(nodeId);
    const leftColId = colId -1;
    const leftRowId = rowId;
    const leftId = buildId(leftColId, leftRowId);
    return leftId;
}

//init functions
function whoStartsTurn() {
    if((Math.floor(Math.random() * Math.floor(100)))%2){
        return "x"
    }
    else return "y"
}



//In game functions
function updateBoard(nodeId){
    const colId = getCol(nodeId);
    const rowId = getRow(nodeId);
    console.log(turn)
    if (turn === "x"){
        xboard[rowId][colId] = turn;
        return isCycle(nodeId, xboard);
    }
    if (turn === "y"){
        yboard[rowId][colId] = turn;
        return isCycle(nodeId, yboard);
    }
}

function updateTile(rowId, event){
    //check rowId id ot see if its even or uneven
    if(turn === "x"){
        if(rowId % 2 === 1){
            event.target.className += " xverti"
        }
        else{
            event.target.className += " xhori"
        }
    }
    if(turn === "y"){
        if(rowId % 2 === 1){
            event.target.className += " yhori"
        }
        else {
            event.target.className += " yverti"
        }
    }
}

function renderWin(){
    if (win){
        topText.innerHTML = "!!";
        document.getElementById('color').innerHTML = "WINNER";
        return true;
    }
    return false;
}

function playedTurn(){
    if(turn === "x"){turn = "y"
    }
    else{turn = "x"
    }
}

function changeTurnColor(){
    if (turn === "x"){
        colorEl.style.color = "#E04C43";
        colorEl.innerHTML = "ORANGE";
        }
    if (turn ==="y"){
        colorEl.style.color = "#007f7f"
        colorEl.innerHTML = "CYAN"
    }
}


//event listener functions
function handleTileClick(){
    console.log()
    const el = event.target;
    if(el.className === "tile"){
        const nodeId = el.id;
        const colId = getCol(nodeId);
        const rowId = getRow(nodeId);
        // console.log(rowId)
        // console.log(colId)
        // avoids the edges depending on the color//
        if((colId === 0 || colId === 10) && turn === "x"){return}
        if((rowId === 0 || rowId === 10) && turn === "y"){return}
        updateTile(rowId, event);
        win = updateBoard(nodeId);
        if (renderWin()){return}
        playedTurn();
        changeTurnColor();
    }
}

//
function init(){
    win = false;
    turn = whoStartsTurn();
    changeTurnColor();

    xboard =
    [
    [ 0 ,"i", 0 ,"i", 0 ,"i", 0 ,"i", 0 ,"i", 0 ],//0
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//1
    [ 0 ,"x", 0 ,"x", 0 ,"x", 0 ,"x", 0 ,"x", 0 ],//2
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//3
    [ 0 ,"x", 0 ,"x", 0 ,"x", 0 ,"x", 0 ,"x", 0 ],//4
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//5
    [ 0 ,"x", 0 ,"x", 0 ,"x", 0 ,"x", 0 ,"x", 0 ],//6
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//7
    [ 0 ,"x", 0 ,"x", 0 ,"x", 0 ,"x", 0 ,"x", 0 ],//8
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//9
    [ 0 ,"e", 0 ,"e", 0 ,"e", 0 ,"e", 0 ,"e", 0 ]//10
    ];

    yboard =
    [
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//0
    ["i", 0 ,"y", 0 ,"y", 0 ,"y", 0 ,"y", 0 ,"e"],//1
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//2
    ["i", 0 ,"y", 0 ,"y", 0 ,"y", 0 ,"y", 0 ,"e"],//3
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//4
    ["i", 0 ,"y", 0 ,"y", 0 ,"y", 0 ,"y", 0 ,"e"],//5
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//6
    ["i", 0 ,"y", 0 ,"y", 0 ,"y", 0 ,"y", 0 ,"e"],//7
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//8
    ["i", 0 ,"y", 0 ,"y", 0 ,"y", 0 ,"y", 0 ,"e"],//9
    [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ]//10
    ];
}

init();
