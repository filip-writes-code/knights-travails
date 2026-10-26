// curent tile [x, y]
// next moves can be:
//
// [x+2, y+1]
// [x+2, y-1]
// [x-2, y+1]
// [x-2, y-1]
// [x+1, y+2]
// [x+1, y-2]
// [x-1, y+2]
// [x-1, y-2]
//
// 0 < (x or y) < 8, or it will be out of bounds of the chessboard

// calculates knight's shortest pathfrom starting tile to the destination tile
// knightMoves([0,0],[1,2]) // returns [[0,0],[1,2]]
function calculatePossibleMoves(tile) {
  let possibleTiles = [];
  const x = tile[0];
  const y = tile[1];

  //calculate possible moves and push to queue
  possibleTiles.push([x + 2, y + 1]);
  possibleTiles.push([x + 2, y - 1]);
  possibleTiles.push([x - 2, y + 1]);
  possibleTiles.push([x - 2, y - 1]);
  possibleTiles.push([x + 1, y + 2]);
  possibleTiles.push([x + 1, y - 2]);
  possibleTiles.push([x - 1, y + 2]);
  possibleTiles.push([x - 1, y - 2]);

  //verify the calculated possible tiles are not outside of the chessboard
  function verifyTile(tile) {
    const x = tile[0];
    const y = tile[1];
    if (x >= 0 && x < 8 && y >= 0 && y < 8) return true;
    else return false;
  }
  const verifiedTiles = [];
  possibleTiles.forEach((tile) => {
    if (verifyTile(tile)) verifiedTiles.push(tile);
  });

  return verifiedTiles;
}

function knightMoves(startTile, endTile) {
  const queue = [];
  const predecessors = {};
  queue.push(startTile);

  while (queue.length > 0) {
    const currentTile = queue.shift();
    const x = currentTile[0];
    const y = currentTile[1];

    const possibleMoves = calculatePossibleMoves(startTile);
  }
}

knightMoves([0, 0]);
