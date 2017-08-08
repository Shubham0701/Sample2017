var arr = new Array();
var top=-1;
function pushItem(){
	var input = document.getElementById("push").value;
	arr[++top] = input;
}

function popItem(){
	document.getElementById("spanPop").innerHTML = arr[top--];
}
