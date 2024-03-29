ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [60.94, 76.59],
        zoom: 15,
	controls: ['smallMapDefaultSet']
    }, {
        restrictMapArea: [
		[60.992,76.443],
		[60.833,76.709]
	]
    });

    var searchControl = new ymaps.control.SearchControl({
	options: {
	    provider: 'yandex#search'
	}
    });

    myMap.controls.add(searchControl);
    document.getElementById('vybor').onclick = function () {
    searchControl.search(vybor.value);
    };
}
