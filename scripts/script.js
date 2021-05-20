class Cell {

    //Define the size for eahc cell
    static width = 10;
    static height = 10;

    //Class contructor
    constructor(context, gridX, gridY) {
        this.context = context;

        //Store the position of the cell
        this.gridX = gridX;
        this.gridY = gridY;

        //Make random cells alive
        this.alive = Math.random() > 0.5;

    }

    draw() {

        //Draw a square, let the state determine the color
        this.context.fillstyle = this.alive ? "#ff8080" : "#303030";
        this.context.fillRect(this.gridX * Cell.width, this.gridY * Cell.height, Cell.width, Cell.height);


    }


}



class GameWorld {

static


    this.gameObjects = [];


    function createGrid() {

        for (let y = 0; y < GameWorld.numRows; y++) {
            for (let x = 0; x < GameWorld.numColumns; x++) {

                this.gameObjects.push(new Cell(this.context, x, y));

            }
        }


    }

}