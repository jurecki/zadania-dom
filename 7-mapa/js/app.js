
const map = document.querySelector('.map')

cities.forEach(city => {
	const link = document.createElement('a')
	link.innerHTML = `
	<a
		href="${city.href}"
		class="map-marker"
		data-name="${city.name}"
		data-population="${city.population}"
		style="left: ${city.map_x}px; top: ${city.map_y}px;"
	>${city.name}
	</a>
	`
	map.appendChild(link);

})

const mapToolTip = document.createElement('div');

mapToolTip.classList.add('map-tooltip');
mapToolTip.setAttribute('style', 'left: -9999px; top: -9999px');

document.body.appendChild(mapToolTip);

const mapsMarker = document.querySelectorAll('.map-marker');



[...mapsMarker].forEach(marker => {
	marker.addEventListener('mouseover',function(e) {

		mapToolTip.setAttribute('style', `left: ${e.clientX+30}px; top: ${e.clientY+30}px`);

		mapToolTip.innerHTML = `
			<h2>${this.getAttribute('data-name')}</h2>
			<div>Population: <strong>${this.getAttribute('data-population')}</strong></div>
		`
	})

	marker.addEventListener('mouseout', function () {
		mapToolTip.setAttribute('style', 'display: none')
		mapToolTip.innerHTML = ``;
	})
})