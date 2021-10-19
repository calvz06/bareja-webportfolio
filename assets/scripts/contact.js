const toggleBtn = document.querySelector(".nav-toggle");
const sideBar = document.querySelector(".my-sidebar");

toggleBtn.addEventListener('click', function () {
	sideBar.classList.toggle('show-sidebar');
});