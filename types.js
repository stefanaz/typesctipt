var n = 1;
n = 123;
var count = 5;
//var name : String = "Bran";
var names = ['Jon', 'Rickon'];
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Catlyn;
function getName() {
    return "Bran";
}
function getCore() {
    console.log("Winter is coming!");
}
