window.onload = function() {
	var date = new Date();
	var day = date.toDateString();
	function Update() {
	document.getElementById('Date').innerHTML = day;
	}
	Update();
}