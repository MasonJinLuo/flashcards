var basicCardFunction = function(front, back){
	this.front = front;
	this.back = back;
}

var firstcard = new basicCardFunction("How old is Mason?", "26");
console.log(firstcard.front);
console.log(firstcard.back);