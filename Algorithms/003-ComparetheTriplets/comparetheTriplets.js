var a = [5,6,7]
var b = [3,6,10]
var points = [];
var alice = 0;
var bob = 0;

function compareTriplets(a, b) {
    var points = [];
    var alice = 0;
    var bob = 0;
    
    for (var i = 0; i<3; i++){
        if(a[i] > b[i]){
            alice += 1;
        }else if ( a[i] < b[i]){
            bob += 1;
        }else {
            alice += 0;
            bob += 0;
        }
    }
    return points.push(alice,bob)
}

compareTriplets(a,b)