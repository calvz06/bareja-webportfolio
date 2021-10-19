// Local Reviews Data
const reviews = [
	{
		id: 1,
		name: "Sana",
		job: "TWICE Member",
		img: "images/sana.jpg",
		text: "Oh! What a great guy! I can vouch for him and I know he can perform his job very well!",
	},
	{
		id: 2,
		name: "Jisoo",
		job: "Blackpink Member",
		img: "images/jisoo.jpg",
		text: "A very excellent developer! He is a nice guy! Also good looking too~!",
	},

	{
		id: 3,
		name: "Shibe the Dog",
		job: "Poop-Eater",
		img: "images/shibe.jpg",
		text: "Arf arf arf!! arf arf arf arf!! arf! ARFFFF!,",
	},
	{
		id: 4,
		name: "Uzumaki Naruto",
		job: "Hokage",
		img: "images/naruto.jpg",
		text: "I know he has the power of friendship within him and he can do it with no problems!",
	},
	{
		id: 5,
		name: "Dahyun",
		job: "TWICE Member",
		img: "images/dahyun.jpg",
		text: "He is a really very great guy! He can perform all the task needed and I'm very impressed!"
	}
];

//Select items 
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set Starting Item

let currentItem  = 0;

// Load Initial Item
window.addEventListener('DOMContentLoaded', function(){
	showPerson(currentItem);
});

// Show Person based on item
function showPerson(person) {
	const item = reviews[person];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

//Show Next Person

nextBtn.addEventListener('click', function(){
	currentItem++;
	if(currentItem > reviews.length) {
		currentItem = 0;
	}
	showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
	currentItem--;
	if(currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
})

//Show Random person

randomBtn.addEventListener('click', function(){
	currentItem = Math.floor(Math.random()* reviews.length);
	showPerson(currentItem);
});