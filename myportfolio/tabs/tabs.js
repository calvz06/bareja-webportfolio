/*Targetting all the buttons*/
const btns = document.querySelectorAll(".tab-btn");

/*Targetting all the of the contents inside about the parent container*/
const about = document.querySelector(".about");

/*Targetting the content class*/
const articles = document.querySelectorAll(".content");


about.addEventListener('click', function(e){
	/*targetting the id of the html*/
	const id = e.target.dataset.id;

	/*Logic that will say that when it detects an id upon click it will do something*/
	if(id) {
		//remote active from other buttons
		btns.forEach(function(btn) {
			btn.classList.remove("active");
			e.target.classList.add("active");
		});

		//Hide the other articles
		articles.forEach(function(article){
			article.classList.remove("active");
		})

		//Making the same name to the tab active
		const element = document.getElementById(id);
		element.classList.add("active");
	}
})