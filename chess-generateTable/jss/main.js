

//initiate table row and table data variables
var tr = [];
var td = [];
var img = [];


var content = [];
//model
//includes gamestate, how people can move and capture
var gameState =  {

    pawnsBlack: 'https://commons.wikimedia.org/wiki/File%3AChess_pdt60.png',
    pawnsWhite: 'https://commons.wikimedia.org/wiki/File%3AChess_plt60.png',
    rookBlack: 'https://commons.wikimedia.org/wiki/File%3AChess_rdt60.png',
    rookWhite: 'https://commons.wikimedia.org/wiki/File%3AChess_rlt60.png',
    knightBlack: 'https://commons.wikimedia.org/wiki/File%3AChess_ndt60.png',
    knightWhite: 'https://commons.wikimedia.org/wiki/File%3AChess_nlt60.png',
    bishopBlack: 'https://commons.wikimedia.org/wiki/File%3AChess_bdt60.png',
    bishopWhite: 'https://commons.wikimedia.org/wiki/File%3AChess_blt60.png',
    queenBlack: 'https://commons.wikimedia.org/wiki/File%3AChess_qdt60.png',
    queenWhite: 'https://commons.wikimedia.org/wiki/File%3AChess_qlt60.png',
    kingBlack: 'https://commons.wikimedia.org/wiki/File%3AChess_kdt60.png',
    kingWhite: 'https://commons.wikimedia.org/wiki/File%3AChess_klt60.png',
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

    grid:  [[this.rookBlack, this.knightBlack, this.bishopBlack, this.queenBlack, this.kingBlack, this.bishopBlack, this.knightBlack, this.rookBlack],
        [this.pawnsBlack, this.pawnsBlack, this.pawnsBlack, this.pawnsBlack, this.pawnsBlack, this.pawnsBlack, this.pawnsBlack, this.pawnsBlack],
        ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3"],
        ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4"],
        ["A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5"],
        ["A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6"],
        [this.pawnsWhite, this.pawnsWhite, this.pawnsWhite, this.pawnsWhite, this.pawnsWhite, this.pawnsWhite, this.pawnsWhite, this.pawnsWhite],
        [this.rookWhite, this.knightWhite, this.bishopWhite, this.queenWhite, this.kingWhite, this.bishopWhite, this.knightWhite, this.rookWhite]],


//bishop black src= https://commons.wikimedia.org/wiki/File%3AChess_bdt60.png
//bishop white src= https://commons.wikimedia.org/wiki/File%3AChess_blt60.png
//king black src= https://commons.wikimedia.org/wiki/File%3AChess_kdt60.png
//king white src = https://commons.wikimedia.org/wiki/File%3AChess_klt60.png
//knight black src= https://commons.wikimedia.org/wiki/File%3AChess_ndt60.png
//knight white src= https://commons.wikimedia.org/wiki/File%3AChess_nlt60.png
//pawn black src= https://commons.wikimedia.org/wiki/File%3AChess_pdt60.png
//pawn white src= https://commons.wikimedia.org/wiki/File%3AChess_plt60.png
//queen black src= https://commons.wikimedia.org/wiki/File%3AChess_qdt60.png
//queen white src = https://commons.wikimedia.org/wiki/File%3AChess_qlt60.png
//rook black src= https://commons.wikimedia.org/wiki/File%3AChess_rdt60.png
//rook white src= https://commons.wikimedia.org/wiki/File%3AChess_rlt60.png

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
            img = document.createElement('img');
            td.append(img);
            content = gameState.getSquare(r, c);

            img.src = content;

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
