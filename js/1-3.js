(function(foo, bar) {
	//var foo = 10;
	//var bar = 2;
	alert(foo*bar);
})(10, 2);


var baz;
(function() {
	var foo = 10;
	var bar = 2;
	baz = function() {
		return foo * bar;
	}
})();
console.log(baz());