class VertexX{
    constructor(rowId){

        if (rowId === 0){winVar = "i"};
        if (rowId === 10){winVar = "e"};
        this.name = "X"
    }
}
class VertexY{
    constructor(id){
        if (colId === 0){winVar = "i"};
        if (colId === 10){winVar = "e"};
    }
}


class Edge{

}

function recursiveSearch(){
    // wincond =


        // if (win === windcond){
        //     //winned
        // }
}

function constructBoard(){
        const squareX = document.getElementsByClassName("squareX")
        for (let x in squareX){
            id = squareX[x].id
            const rowId = id.slice(3,4).replace("T","10");
            const colId = id.slice(1,3).replace("T","10");
            board[rowId][colId] += new VertexX(rowId)
            console.log(board)
        }

}

constructBoard()
console.log(board)
