/*Javascript pre otvorenie ak je student*/
var jeStudent = document.getElementById('letny');
	var nieJeStudent = document.getElementById('zimny');
	jeStudent.onchange = function() {
		document.getElementById("akJeStudent").style.display = 'block';
		document.getElementById("container").style.height = '690px';
	};
	nieJeStudent.onchange = function() {
		document.getElementById("akJeStudent").style.display = 'none';
		document.getElementById("container").style.height = '500px';
	};
