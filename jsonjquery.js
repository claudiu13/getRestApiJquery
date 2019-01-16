let getData = function() {
	$.getJSON('https://jsonplaceholder.typicode.com/users/', function(data) {
		var output = '<ul>';
		$.each(data, function(key, val) {
			output += '<li>' + val.name + '</li>';
			output += '<ul>' + val.address.city + '</ul>';
			output += '<ul>' + val.email + '</ul>';
			output += '<ul>' + val.phone + '</ul>';
		});
		output +='</ul>';
		$('#update').html(output);
	});
};

$('#btn').on('click', function() {
		getData();
	});
