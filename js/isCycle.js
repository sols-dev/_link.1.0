function isCycle(nodeId, board){
    path ="";
    let visited =
    [
        [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//0
        [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//1
        [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//2
        [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//3
        [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//4
        [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//5
        [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//6
        [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//7
        [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//8
        [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],//9
        [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ]//10
    ];

    if(isCycleUtil(nodeId, visited, board)){console.log("won");return true}
    else{return false};
    //Returns true if the graph contains a cycle, else false.

    //Call the recursive helper function to detect cycle in different
    //DFS trees
}



//okayyy! its rotating now! what's next now...
function isCycleUtil(nodeId, visited, board, parentId){
    // Mark the current node as visited
    const colId = getColInt(nodeId); const rowId = getRowInt(nodeId);
    path += board[rowId][colId];
    if (path.search("i") > -1 && path.search("e") > -1){return true};
    if (visited[rowId][colId]){return true};
    visited[rowId][colId] = true;
    //Recur for all the vertices adjacent to this vertex
    //If an adjacent is not visited, then recur for that adjacent
    const topId = getTopId(nodeId);
    const topColId = getColInt(topId); const topRowId = getRowInt(topId);
    // console.log(topColId)
    // console.log(topRowId)
    //makes sure that thevalue isnt out of the array in order to not get undefinned somwhere
    if (topColId >= 0 && topColId <=10 && topRowId >= 0 && topRowId <= 10){
        //makes sure it isnt going to the parent node
        if (board[topRowId][topColId] && topId !== parentId){
            // console.log("top")
            //runs the recursive function and return true out of this function if recursive is true
            if (isCycleUtil(topId, visited, board, nodeId)){return true};
        };
    };


    const rightId = getRightId(nodeId);
    const rightColId = getColInt(rightId); const rightRowId = getRowInt(rightId);
    // console.log(rightColId)
    // console.log(rightRowId)
    if (rightColId >= 0 && rightColId <=10 && rightRowId >= 0 && rightRowId <= 10){
        if (board[rightRowId][rightColId] && rightId !== parentId){
            // console.log("right")
            if (isCycleUtil(rightId, visited, board, nodeId)){return true};
        };
    };


    const botId = getBotId(nodeId);
    const botColId = getColInt(botId); const botRowId = getRowInt(botId);
    // console.log(botId)
    // console.log(botRowId)
    if (botColId >= 0 && botColId <=10 && botRowId >= 0 && botRowId <= 10){
        if (board[botRowId][botColId] && botId !== parentId){
            // console.log("bot")
            if (isCycleUtil(botId, visited, board, nodeId)){return true};
        };
    };


    const leftId = getLeftId(nodeId);
    const leftColId = getColInt(leftId); const leftRowId = getRowInt(leftId);
    // console.log(leftColId)
    // console.log(leftRowId)
    if (leftColId >= 0 && leftColId <=10 && leftRowId >= 0 && leftRowId <= 10){
        if (board[leftRowId][leftColId] && leftId !== parentId){
            // console.log("left")
            if (isCycleUtil(leftId, visited, board, nodeId)){return true};
        };
    };

return false;
    //If an adjacent is visited and not parent of current vertex,
    //then there is a cycle.
};
