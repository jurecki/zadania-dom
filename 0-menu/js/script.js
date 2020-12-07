const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
const links = document.querySelectorAll('a');

ul.classList.add('menu');
li[0].classList.add('first');
li[li.length-1].classList.add('last');
li[2].classList.add('active');
li[2].setAttribute('style', 'color: #fff');

[...links].forEach(link => link.setAttribute('title', `Przejdź na stronę ${link.textContent}`));


[...li].forEach(item => {
	item.setAttribute('href', '#')

	item.addEventListener('click', (e)=> {
		e.preventDefault();
		if(! item.classList.contains('active')) alert(item.textContent);
	})
})