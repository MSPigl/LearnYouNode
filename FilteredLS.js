const fs = require('fs');

var path = process.argv[2];
var fileType = '.' + process.argv[3];

fs.readdir(path, function (err, list) {
	if (err)
	{
		throw err;
	}
	
	var listLength = list.length;

	for (var i = 0; i < listLength; i++)
	{
		var fileName = list[i];
		var dotIndex = fileName.indexOf('.');

		if (dotIndex !== -1)
		{
			if (fileName.substring(dotIndex) === fileType)
			{
				console.log(fileName);
			}
		}
	}
});