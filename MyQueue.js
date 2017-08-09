var obj = new Queues();

var Node = function(data){
	this.data=data;
	this.next=null;
}

function Queues(){
	this.first = null;
	this.size=0;

Queues.prototype.getQueue = function(){
	document.getElementById("queue").innerHTML = "";
	temp=this.first;
	while(temp!=null){
			document.getElementById("queue").innerHTML += temp.data + " "; 
			temp=temp.next;
	}
}

Queues.prototype.enqueue = function(){
	var input = document.getElementById("enq").value;
	var node= new Node(input);
	document.getElementById("enq").value="";
	if(!this.first){
		this.first=node;
	}
	else{
		var temp=this.first; 
		while(temp.next){
			temp=temp.next;
		}
		temp.next=node;
	}
	this.size+=1;
}

Queues.prototype.dequeue = function(){
	document.getElementById("spanDeque").innerHTML = this.first.data;
	this.first=this.first.next;
	this.size-=1;
}

}
function enqueueVal(){
	obj.enqueue();
}

function dequeueVal(){
	obj.dequeue();
}
function getQueueVal(){
	obj.getQueue();
}