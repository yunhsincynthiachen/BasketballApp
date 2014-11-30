var cynthia_wins = 0;
var adit_wins = 0;
function kimonoCallback(data) {
// do something with the data
// please make sure the scope of this function is global
// alert('abc');
	//console.log(data);
	var adit_teams = ['Houston','Chicago','Dallas','Cleveland','Washington','Miami','Oklahoma City'];
	var cynthia_teams = ['Golden State','Memphis','Toronto','Portland','San Antonio','L.A. Clippers','Atlanta'];
	var dictof_aditteams = {};
	var dictof_cynthiateams = {};
	var alldata = data.results['NBA Parse']

	//To make dictionaries of the team names and number of wins of each person
	for (j = 0; j<adit_teams.length; j++){
		for (i = 0; i<alldata['length']; i++) {
			if (adit_teams[j] == alldata[i]['Team Names']['text']){
				dictof_aditteams[alldata[i]['Team Names']['text']] = alldata[i].Wins;
			}
		}
	};
	
	for (j = 0; j<cynthia_teams.length; j++){
		for (i = 0; i<alldata['length']; i++) {
			if (cynthia_teams[j] == alldata[i]['Team Names']['text']){
				dictof_cynthiateams[alldata[i]['Team Names']['text']] = alldata[i].Wins;
			}
		}
	};

	//To total up all of the wins for each person
	for (var key in dictof_aditteams){
		adit_wins += +dictof_aditteams[key];
	}

	for (var key in dictof_cynthiateams){
		cynthia_wins += +dictof_cynthiateams[key];
	}

	//alert(adit_wins+', '+cynthia_wins);

	console.log(dictof_aditteams);
	console.log(dictof_cynthiateams);
}

$.ajax({
	"url":"https://www.kimonolabs.com/api/8smal7rw?apikey=cjef2f7yRBb7uYCJWWPwpyuUwQq4JtoA&callback=kimonoCallback",
	"crossDomain":true,
	"dataType":"jsonp"
});

$(document).ready(function(){
	$('.Button').click(function(){
		var person = $(this).attr('data-person');
		//alert('You clicked on '+$(this).attr('data-person'));
			$('#Right').html('<p>Adit: '+ adit_wins+'</p>' + '<p>Cynthia: '+ cynthia_wins+'</p>')
	})

});