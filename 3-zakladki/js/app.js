const links = document.querySelectorAll('li');
const contents = document.querySelectorAll('.tab-content');


function addActive (e) {
	e.preventDefault();
	for (const link of links) {
		link.classList.remove('tab-el-active');
	}

	for( const content of contents) {
		content.classList.remove('tab-content-active')
	}

	this.classList.add('tab-el-active');

	const id = this.children[0].getAttribute('href').substring(1);

	document.getElementById(id).classList.add('tab-content-active');

}


[...links].forEach(link => {
	link.addEventListener('click', addActive
	)
})