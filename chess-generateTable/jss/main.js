

//initiate table row and table data variables
var tr = [];
var td = [];


var content = [];
//model
//includes gamestate, how people can move and capture
var gameState =  {

    pawns: '',
    rook: 4,
    knight: 4,
    bishop: 4,
    queen: 2,
    turn: 2,
    checkMate: false,
    enPassant: true,
    promotion: false,
    getSquare: function(row, col){
        if ((row > 7 || col > 7) || (row < 0 || col < 0))
        {
            alert("Out of bounds!");
        }
        else return this.grid[row][col];
    },

    grid:  [["Rook", "Knight", "Bishop", "Queen", "King", "Bishop", "Knight", "Rook"],
        ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
        ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3"],
        ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4"],
        ["A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5"],
        ["A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6"],
        ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
        ["Rook", "Knight", "Bishop", "Queen", "King", "Bishop", "Knight", "Rook"]],



}


//view/controller
//gets data from model, display to view
document.addEventListener("DOMContentLoaded", function(event) {

    var table = document.createElement("table");
    document.body.append(table);

    for (r = 0; r < 8; r++)
    {

        tr = document.createElement("TR");
        table.append(tr);
        for (c = 0; c < 8; c++)
        {


            td = document.createElement("TD");
            tr.append(td);
            content = gameState.getSquare(r, c);
            td.innerHTML = content;
            td.style.color =  "blue";

            if ((r % 2 == 1 && c % 2 == 0) || (r % 2 == 0 && c % 2 == 1))
            {


                td.className = 'black';
            }
            else{

                td.className = "white";
            }

        }
    }
});









/*

            [[1, 2, 3, 4, 5, 6, 7, 8],
                [1, 2, 3, 4, 5, 6, 7, 8],
                [1, 2, 3, 4, 5, 6, 7, 8],
                [1, 2, 3, 4, 5, 6, 7, 8],
                [1, 2, 3, 4, 5, 6, 7, 8],
                [1, 2, 3, 4, 5, 6, 7, 8],
                [1, 2, 3, 4, 5, 6, 7, 8],
                [1, 2, 3, 4, 5, 6, 7, 8]],*/
