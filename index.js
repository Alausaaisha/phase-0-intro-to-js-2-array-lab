// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
//const destructivelyAppendCat = cats.push("Ralph")
//destructivelyAppendCat;

function destructivelyAppendCat(Ralph) {
  // let cats = ["Milo", "Otis", "Garfield"];
    Ralph = cats.push("Ralph");
    return Ralph;
}

//function Arrayfunctions() {
   // beforeEach(function () {
    //  cats.length = 0;

     // cats.push('Milo', 'Otis', 'Garfield');
    //});
//}

function destructivelyPrependCat(Bob){
    Bob = cats.unshift("Bob");
    return Bob;
}

function destructivelyRemoveLastCat(removeGarfield){
    removeGarfield = cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(removeMilo){
    removeMilo = cats.shift();
    return cats;
}

function appendCat(Broom){
    Broom = [
        ...cats.slice(0, 3),
        "Broom"
    ];
    return Broom;
}

function prependCat(Arnold){
    Arnold = [
        "Arnold",
        ...cats.slice(0, 3)
    ];
    return Arnold;
}

function removeLastCat(removeGarfieldInNewarray){
    removeGarfieldInNewarray = cats.slice(0, -1);
    return removeGarfieldInNewarray;
}

function removeFirstCat(removeMiloinNewArray){
    removeMiloinNewArray = cats.slice(1);
    return removeMiloinNewArray;
}