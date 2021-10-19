const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

//Loaded
btn.addEventListener('click', function (){
	if(!btn.classList.contains('slide')){
		 btn.classList.add('slide')
		 video.pause();
	} else {
		btn.classList.remove("slide");
		video.play();
	}
});

//Pre-Loader 
const preloader = document.querySelector(".pre-loader");

window.addEventListener('load', function (){
	preloader.classList.add("hide-preloader");
})