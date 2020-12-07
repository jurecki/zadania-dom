const buttons = document.querySelectorAll('button');
let isActive = false;


function showDetails () {
	// console.log(this);
	// const car = this.parentNode.parentNode.parentNode;
	const car = this.closest('.car');
	// console.log(car)
	const carDetail = car.querySelector('.car-detail');

	if(!isActive) {
		this.textContent ='Schowaj detale';
		carDetail.setAttribute('style', 'display:block');
		car.classList.add('car-show-detail');
		isActive = true;
	} else {
		this.textContent ='Pokaż detale'
		carDetail.setAttribute('style', 'display:none');
		car.classList.remove('car-show-detail');
		isActive = false;
	}
	
}


[...buttons].forEach(btn => {
	btn.addEventListener('click', showDetails)
})