const menu = [
	{
		id: 1,
		title: "Aglio Olio",
		category: "Lunch",
		price: 15.47,
		img: "images/aglio-olio.jpg",
		desc: `This pasta based cuisine is topped with shrimp and to give off that seafood vibe.`,
	},
	{	
		id: 2,
		title: "Hamburger",
		category: "Lunch",
		price: 17.85,
		img: "images/burger.jpg",
		desc: "Our specialty burger is grilled with special herbs and spices and filled with fresh vegetables that is mouthwatering.",
	},
	{
		id: 3,
		title: "Death By Chocolate",
		category: "Desserts",
		price: 16.45,
		img: "images/cake.jpg",
		desc: `This delectable dessert really satisfy your craving for something sweet (It doesn't kill you btw.)`,
	},
	{	
		id: 4,
		title: "Calamares",
		category: "Appetizers",
		price: 8.99,
		img: "images/calamares.jpg",
		desc: "Freshly fried chopped squid with our house recipe dipped also with our special sauce will definitely crave for more.",
	},
	{
		id: 5,
		title: "Carbonara",
		category: "Lunch",
		price: 15.47,
		img: "images/carbonara.jpg",
		desc: "Creamy white sauce topped with ham and freshly cooked pasta.",
	},
	{
		id: 6,
		title: "French Fries",
		category: "Appetizers",
		price: 8.99,
		img: "images/fries.jpg",
		desc: "Thick cut fries added with tomato ketchup. Our fries are fried to a crisp state but not overcooked.",
	},
	{
		id: 7,
		title: "Spaghetti with MeatBalls",
		category: "Dinner",
		price: 15.47,
		img: "images/meatballs.jpg",
		desc: "This spaghetti dish top with our specialty meatballs and cheese really is scrumptious!",
	},
	{
		id: 8,
		title: "Omurice",
		category: "Breakfast",
		price: 10.45,
		img: "images/omurice.jpg",
		desc: "This Japanese inspired dish is not just instagrammable but is also delicious!",
	},
	{
		id: 9,
		title: "Onion Fries",
		category: "Appetizers",
		price: 8.76,
		img: "images/onion-fries.jpg",
		desc: "A whole onion is chopped neatly and fried put with breadings with a combination of our sauce.",
	},
	{
		id: 10,
		title: "Pancake",
		category: "Breakfast",
		price: 10.00,
		img: "images/pancake.jpg",
		desc: "If you want a delighful breakfast meal. You can order our pancake topped with our syrup.",
	},
	{
		id: 11,
		title: "Blueberry Pie",
		category: "Desserts",
		price: 14.00,
		img: "images/pie.jpg",
		desc: "Our homemade pie brings you back childhood memories of happiness.",
	},
	{
		id: 12,
		title: "On the House Pizza",
		category: "Dinner",
		price: 15.32,
		img: "images/pizza.jpg",
		desc: "Craving for pizza? Try our pizza and you can choose between thin or thick crust.",
	},
	{
		id: 13,
		title: "Oreo Shake",
		category: "Desserts",
		price: 10.22,
		img: "images/shake.jpg",
		desc: "Craving for something cold and sweet? Our Oreo shake will give you satisfaction on your craving.",
	},
	{
		id: 14,
		title: "Grilled Steak",
		category: "Dinner",
		price: 15.34,
		img: "images/steak.jpg",
		desc: "Our house-grilled steak is freshly cooked and only use good meat."
	},
];

const sectionCenter = document.querySelector(".section-center");

const container = document.querySelector(".btn-container");


/*Load All items*/

window.addEventListener('DOMContentLoaded', function(){
	displayMenuItems(menu);
	displayMenuButtons();
});



/*Loading ALL ITEMS*/
function displayMenuItems(menuItems){
	let displayMenu = menuItems.map(function(item){
		return  `<div class="menu-item">
				<img src="${item.img}" class="photo"alt="${item.title}">
				<div class="item-info">
					<header>
						<div class="product-title">${item.title}
						<div class="price">$${item.price}</div></div>
					</header>
					<p class="item-text">${item.desc}
					</p>
				</div>
			</div>`;
	});
	console.log(displayMenu);
	displayMenu = displayMenu.join("");
	sectionCenter.innerHTML = displayMenu;
};


function displayMenuButtons (){
	const categories = menu.reduce(
		function(/*Accumulator*/values, /*Current Value*/item){
			if(!values.includes(item.category)) {
			values.push(item.category);
		}
		return values;
	},['All'])
	const categoryBtns = categories.map(function(category){
		return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
	}).join("");
	container.innerHTML = categoryBtns;
	const filterBtns = document.querySelectorAll(".filter-btn");
	//Filter Items

	filterBtns.forEach(function(btn){
		btn.addEventListener('click', function(e){
			const category = e.currentTarget.dataset.id;
			const menuCategory = menu.filter(function(menuItem){
				if (menuItem.category === category){
					return menuItem;
				}
			});	

				if (category === 'All'){
					displayMenuItems(menu);
				} else {
					displayMenuItems(menuCategory);
				}
		});
	});
};