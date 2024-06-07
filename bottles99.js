var output = [];

function Bottles99() {
    var bottles = 100;
    while (bottles > 0)  {
        bottles--;
        if (bottles - 1 < 0) {
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        } else if (bottles === 1) {
            console.log(bottles + " bottle of beer on the wall, " + bottles + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
        } else {
            console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take one down and pass it around, " + (bottles - 1) + " bottles of beer on the wall.");
        }
    }
}

Bottles99();

/*

Ver 1 -------------------------


var output = [];

function Bottles9() {
    var bottles = 10;
    while (bottles > 1)  {
        bottles--;
        if (bottles - 1 === 0) {
            console.log(bottles + " only " + bottles + " bottles, less 1 and we have no bottles left");
        } else {
            console.log(bottles + " only " + bottles + " bottles, less 1 and we have still " + (bottles - 1) + " bottles");
        }
    }
}

Bottles9();


Ver 2 -------------------------

var output = [];

function bottles9() {
    var bottles = 10;
     console.log(bottles + " bottles in total");
    while (bottles > 1) {
        bottles--;
        if (bottles === 1){
            console.log("last bottle");
        } else {
            console.log(bottles + "bottles left");
        }
    }
}

bottles9();

*/