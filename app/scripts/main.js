'use strict';


var serverUrl = "http://tiny-pizza-server.herokuapp.com/collections/plove";

var xhr = new XMLHttpRequest();
xhr.open('GET', serverUrl, true);
xhr.send(null);
var responseObject;
var rColumnContent = '';

xhr.onload = function(data) {
	if (xhr.status === 200) {
		// console.log(data);
		responseObject = JSON.parse(xhr.responseText);	
	}
}

$('.leftColumn li').on('click', function() {
	var num = this.dataset.attribute;
	$('.rightColumn p').html(responseObject[num].title);
});
