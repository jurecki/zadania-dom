const links = document.querySelectorAll('.nav-link');

[...links].forEach(link => {

	link.addEventListener('click', function (e) {
		e.preventDefault();

		[...links].forEach(link => link.parentElement.classList.remove('nav-el-active'))
		
		this.parentElement.classList.add('nav-el-active')
		
		const href = this.getAttribute('href');
		const target = document.querySelector(href);
	
	
		target.scrollIntoView({behavior: "smooth"});
		
	})
})