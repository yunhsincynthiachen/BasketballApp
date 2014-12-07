var totals = {
	"Adit":{
		teams: ['Chicago','Cleveland','Dallas','Houston','Miami','Oklahoma City','Washington'],
		total_wins:0,
		dict_of_teams: {},
	},
	"Cynthia":{
		teams: ['Atlanta','Golden State', 'L.A. Clippers', 'Memphis','Portland','San Antonio','Toronto'],
		total_wins:0,
		dict_of_teams:{},
	},
	"Both":{
		total_wins: [],
	}
}

function kimonoCallback(data) {
// do something with the data
// please make sure the scope of this function is global
// alert('abc');
	var alldata = data.results['NBA Parse'];
	//next part makes dictionary in the totals variable into variable
	var dictof_aditteams = totals['Adit']['dict_of_teams'];
	var dictof_cynthiateams = totals['Cynthia']['dict_of_teams'];
	//makes the total wins of both to be a list of the wins
	var total_wins_both = totals['Both']['total_wins'];
	console.log(data)

	//To make dictionaries of the team names and number of wins of each person
	for (j = 0; j<totals['Adit']['teams'].length; j++){
		for (i = 0; i<alldata['length']; i++) {
			if (totals['Adit']['teams'][j] == alldata[i]['Team Names']['text']){
				dictof_aditteams[alldata[i]['Team Names']['text']] = alldata[i].Wins;
			}
		}
	};
	
	for (j = 0; j<totals['Cynthia']['teams'].length; j++){
		for (i = 0; i<alldata['length']; i++) {
			if (totals['Cynthia']['teams'][j] == alldata[i]['Team Names']['text']){
				dictof_cynthiateams[alldata[i]['Team Names']['text']] = alldata[i].Wins;
			}
		}
	};

	//To total up all of the wins for each person
	for (var key in dictof_aditteams){
		totals['Adit']['total_wins'] += +dictof_aditteams[key];
	}

	for (var key in dictof_cynthiateams){
		totals['Cynthia']['total_wins'] += +dictof_cynthiateams[key];
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
		//alert('You clicked on '+person);
		console.log(totals[person]);
		if (person == "Both") {
			$('#Right').html('<p>Adit: '+ totals['Adit']['total_wins']+'</p>' + '<p>Cynthia: '+ totals['Cynthia']['total_wins']+'</p>')
		}
		else {
			$('#Right').html(person + ': ' + totals[person]['total_wins'])
		}
			//$('#Right').html('<p>Adit: '+ adit_wins+'</p>' + '<p>Cynthia: '+ cynthia_wins+'</p>')
	})

});