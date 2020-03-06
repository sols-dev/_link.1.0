//_state variables //
let board, turn;
//_cached element references //
const boardEl = document.getElementById('board');
const colorEl = document.getElementById('color');
//_event listeners //
boardEl.addEventListener('click', handleTileClick);
//_functions //
function handleTileClick(evt){
    const el = evt.target;
    if(el.className === "tile"){
        const rowId = parseInt(el.id.slice(3,4).replace("T","10"));
        const colId = parseInt(el.id.slice(1,3).replace("T","10"));
        // console.log(rowId)
        // console.log(colId)
        // avoids the edges depending on the color//
        if((colId === 0 || colId === 10) && turn === "x"){return}
        if((rowId === 0 || rowId === 10) && turn === "y"){return}
        updateTile(rowId, evt);
        // writeOnBoard(rowId, colId, turn);
        playedTurn();
        changeTurnColor()
    }
}

function updateTile(rowId, evt){
    //check rowId id ot see if its even or uneven
    if(turn === "x"){
        if(rowId % 2 === 1){
            evt.target.className += " xverti"
            console.log(evt.target.className)}
        else{
            evt.target.className += " xhori"
            console.log(evt.target.className)}
        }
    if(turn === "y"){
        if(rowId % 2 === 1){
            evt.target.className += " yhori"
        console.log(evt.target.className)}
        else {
            evt.target.className += " yverti"
                    console.log(evt.target.className)}
    }
}

function playedTurn(){
    if(turn === "x"){turn = "y"}
    else{turn = "x"}
}

// function writeOnBoard(rowId, colId, turn){
//     // console.log(rowId colId)
//     board[rowId][colId] = turn;
// }

function changeTurnColor(){

    if (turn === "x"){
        colorEl.style.color = "#8f568d";
        colorEl.innerHTML = "PURPLE";
        }
    else {
        colorEl.style.color = "#007f7f"
        colorEl.innerHTML = "CYAN"
    }
}

function whoStartsTurn() {
    if((Math.floor(Math.random() * Math.floor(100)))%2){
        return "x"
    }
    else return "y"
}

function init(){
    console.log('initializing');
    turn = whoStartsTurn();
    changeTurnColor();
}


init()
