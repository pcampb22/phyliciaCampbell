//create empty array to store todo list
var list = ["Buy dog"];

//take user input

var user = prompt("What would you like to do");


//check to see if user input = "quit" 
while(user !== "quit")
{

if (user === "new")
	{
		addItem();
	}	
else if (user === "list")
	{
		listTodos();
	}
else if (user === "delete")
	{
		deleteItem();
	}
else if (user ==="quit")
	{
		clear();
	}
user = prompt("What would you like to do");

}

//end of program
console.log("Have a good day!");



//prints list of todos
function listTodos()
{
	list.forEach(function(printList, i){
			console.log(i + ": " + printList);
		});
}

//deletes item from todo list array
function deleteItem()
{
	//ask for index of list to delete
		var deleteIndex = prompt("What is the index of the item you want to delete?");
		//splice(index user provided, how many items following index to delete)

		list.splice(deleteIndex, 1);
		console.log("Item Deleted");
}

//adds item to todo list array
function addItem()
{
	var newItem = prompt("Enter new item");

		list.push(newItem); //push adds item to end of array
		console.log("Item Added");
}

