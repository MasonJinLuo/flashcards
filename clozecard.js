var clozeCardFunction = function( text, cloze ){
this.text = text;
this.cloze = cloze;

	this.partial = function(){

	var clozeReplaced = this.text.replace(this.cloze, "...")
	
	if (err) {
	console.log(err);
	}else{

	console.log(clozeReplaced);

	}
}

	this.clozefunction = function(){

	console.log(this.cloze);

	}

	this.display = function(){
		console.log(this.text);
	}

}


var masoncloze = new clozeCardFunction("mason is cool", "mason");
var jasoncloze = new clozeCardFunction("this guy is my best friend", "jason");

masoncloze.partial();
masoncloze.clozefunction();
masoncloze.display();

jasoncloze.partial();
jasoncloze.clozefunction();
jasoncloze.display();