//Select Items
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn	");

//Edit Option
let editElement;
let editFlag = false;
let editID = "";

//Event Listeners
////Submit Form
form.addEventListener('submit', addItem);

////Clearing out the Value
clearBtn.addEventListener('click', clearItems);

//Load Items
window.addEventListener('DOMContentLoaded', setupItems);

//Functions

//Adding Item
function addItem(e){
	e.preventDefault();
	const value = grocery.value;
	
	/*Just to get a unique ID not to be used practically*/
	const id = new Date().getTime().toString();
	/*console.log(id);*/
	if (value && !editFlag){
		createListItem(id,value);
		//Display the Alert
		displayAlert('Item added to the List', "success");
		//Show Container
		container.classList.add("show-container"); 
		/*console.log('add item to the list');*/

		//Add to Local Storage
		addToLocalStorage(id,value);

		//Set Back to Default
		setBacktoDefault();
	}
	else if (value && editFlag){
		editElement.innerHTML = value;
		displayAlert('Value Changed', 'success');
		// edit Local Storage
		editLocalStorage(editID,value);
		setBacktoDefault();
		/*console.log('editing');*/
	}	
	else {
		displayAlert("Please Enter Value", "danger");
		/*console.log('empty value');*/
	}
}

//Display Alert

function displayAlert (text, action){
	alert.textContent = text;
	alert.classList.add(`alert-${action}`);

	//Removing Alert
	setTimeout(function(){
		alert.textContent = "";
		alert.classList.remove(`alert-${action}`);
	}, 3000)
}

//Clearing the items
function clearItems(){
	const items = document.querySelectorAll('.grocery-item');

	if(items.length > 0){
		items.forEach(function(item){
			list.removeChild(item);
		});
	}
	container.classList.remove("show-container");
	displayAlert('List is Empty', "danger");
	setBacktoDefault();
	localStorage.removeItem('list'); 
}

//Delete Function
 function deleteItem (e){
 	const element = e.currentTarget.parentElement.parentElement;
 	const id = element.dataset.id
 	list.removeChild(element);

/* 	console.log(list.children.length);*/

 	if (list.children.length === 1){
 		container.classList.remove("show-container");
 	}
 	displayAlert('Item Removed', "success");
 	setBacktoDefault();

/*	console.log(element);*/
/* 	console.log('item deleted');*/

	//Remove from local Storage
	removeFromLocalStorage(id);
 }

//Edit Function
function editItem (e){
	const element = e.currentTarget.parentElement.parentElement;

	//Set edit item
	editElement = e.currentTarget.parentElement.previousElementSibling;
/*	console.log(editElement);*/

	//Set form Value
	grocery.value = editElement.innerHTML
	editFlag = true;
	editID = element.dataset.id;
	submitBtn.textContent = "Edit";
	/*console.log(editElement);*/
/*	console.log('item edited');*/
}

//Set Back to Default
function setBacktoDefault() {
	grocery.value = "";
	editFlag = false;
	editID = '';
	submitBtn.textContent = "submit";
	/*console.log('set back to default');*/
}

//Local Storage

function addToLocalStorage(id, value){
	const grocery = { id, value };
	let items = getLocalStorage();
/*
	console.log(items);*/

	items.push(grocery);
	localStorage.setItem('list', JSON.stringify(items));
	/*console.log(grocery);*/
}

function removeFromLocalStorage(id){
	let items = getLocalStorage();

	items = items.filter(function(item){
		if (item.id !== id){
			return item;
		}
	})
	localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value){
	let items = getLocalStorage();
	items = items.map(function(item){
		if (item.id === id){
			item.value = value;
		}
		return item;
	})
	localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage(){
	return localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")) : [];
}



//LocalStorage API
//SetItem
//GetItem
//RemoveItem
//Save as Strings

/* localStorage.setItem('orange',JSON.stringify(['item', 'item2']));
 const oranges = JSON.parse(localStorage.getItem('orange'));
 console.log(oranges);
 localStorage.removeItem('orange');	*/

//Setup Items

function setupItems(){
	let items = getLocalStorage();
	if (items.length > 0){
		items.forEach(function(item){
			createListItem(item.id,item.value);
		})
		container.classList.add('show-container');
	}
}

function createListItem(id, value){
	const element = document.createElement('article');
		//Add Class
		element.classList.add('grocery-item');

		//Adding the Id
		const attr = document.createAttribute('data-id');
		/*console.log(attr);*/
		attr.value = id;
		/*console.log(attr.value);*/
		element.setAttributeNode(attr);
		element.innerHTML = `<p class="title">${value}</p>
								<div class="btn-container">
									<button id="grocery-btn" type="button" class="edit-btn">
									<i class="fas fa-edit"></i>
									</button>
									<button id="grocery-btn" type="button" class="delete-btn">
									<i class="fas fa-trash"></i>
									</button>
								</div>`;
		const deleteBtn = element.querySelector('.delete-btn');
		const editBtn = element.querySelector('.edit-btn');
		deleteBtn.addEventListener('click', deleteItem);
		editBtn.addEventListener('click', editItem);

		//Append Child / adding it to the list
		list.appendChild(element);
}