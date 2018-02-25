const x = 2;
var fns = [];

{ const x = 5;
	for (var i=0; i<x; i++) {
    (function(i){
		fns[i] = function num() {
			return i;
		}})(i);
	}
}

console.log(
	(x * 2) === fns[x*2]()
);

console.log(fns[3]());
