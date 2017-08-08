var data,next=null,start=null,temp;

function Node(){
	this.data = document.getElementById("add").value;
	document.getElementById("add").value = "";
	this.next=null;
}

function addToList(){
	var node = new Node();
	if(start == null){
	start=node;
	}
	else
	{
		temp=start;
		while(temp.next!=null)
		{
			temp=temp.next;
		}
		temp.next=node;
	}	
}

function deleteFromList(){
	temp=start;
	pre=start;
	var val = document.getElementById("delete").value;
	document.getElementById("delete").value="";
	while(temp!= null){
		if(start.data == val){
			start = start.next;
			console.log("value deleted");
			break;
		}
		else
		{
			if(temp.data == val){
			pre.next = temp.next;
			break;
			}
			var pre=temp;
			temp=temp.next;
		}
	}
}

function printList(){
	temp=start;
	document.getElementById("spanList").innerHTML="";
	while(temp!=null)
	{
		document.getElementById("spanList").innerHTML += temp.data + " ";
		temp = temp.next;
	}
}