const liElements = document.querySelectorAll('li');


function addActive (e) {
	e.preventDefault();
	[...liElements].forEach(item => item.classList.remove('nav-el-active'))
	this.classList.add('nav-el-active');
}


[...liElements].forEach(item => {
	item.addEventListener('click', addActive)
})