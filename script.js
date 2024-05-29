//your JS code here. If required.
let student = {
	name: "Shiva Kumar"
}

student.prototype.getKeys = function(){
	return Object.keys(this);
}