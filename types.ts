var n : Number = 1;
n = 123;

var count : Number = 5;
//var name : String = "Bran";

var names : string[] = ['Jon', 'Rickon'];

enum Starks {Jon, Bran, Eddard, Catlyn};

var cat : Starks = Starks.Catlyn;

function getName() : string {
    return "Bran";
}

function getCore() : void {
    console.log("Winter is coming!");
}
