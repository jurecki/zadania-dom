const addBtn = document.getElementById('add');
const list = document.querySelector('.list');

addBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const list = document.querySelector('.list')
	const element = document.createElement('div');
	element.classList.add('element');
	element.innerHTML = `
		<h3 class="element-title">Element numer <span class="nr">${list.childElementCount+1}</span></h3>
		<button class="clone">Clone</button>
		<button class="delete">Delete</button>
		`
	list.appendChild(element);

});

list.addEventListener('click', function(e) {
	if(e.target.classList.contains('delete')) {
		e.target.closest('.element').remove()
	} else if (e.target.classList.contains('clone')) {
		const clone = e.target.closest('.element').cloneNode(true)
		list.appendChild(clone);
	}
	}
 );