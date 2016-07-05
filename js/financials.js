$(document).ready(function(){
	var ctx = $(this).find('#financials');

	var finanicalsChart = new Chart(ctx, {
    	type: 'horizontalBar',
    	data: {
        	labels: [
				"Accounting",
				"Clerical",
				"Light Ind.",
				"Healthcare",
				"Networking",
				"Other",
				"IT",
				"Scientific"
			],
        	datasets: [{
            	label: 'Active Headcount by Category',
            	data: [2, 302, 146, 17, 10, 1, 378, 278],
            	backgroundColor: [
                	'rgba(255, 99, 132, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(255, 206, 86, 0.2)',
                	'rgba(75, 192, 192, 0.2)',
                	'rgba(153, 102, 255, 0.2)',
					'rgba(193, 66, 66, 0.3)',
					'rgba(193, 66, 66, 0.3)',
					'rgba(63, 127, 191, 0.95)'
            	],
            	borderColor: [
                	'rgba(255,99,132,1)',
                	'rgba(54, 162, 235, 1)',
                	'rgba(255, 206, 86, 1)',
                	'rgba(75, 192, 192, 1)',
                	'rgba(153, 102, 255, 1)',
                	'rgba(255, 159, 64, 1)',
					'rgba(193, 66, 66, 0.95)',
					'rgba(25, 25, 76, 0.95)'
            	],
            	borderWidth: 1
        	}]
    	},
    	options: {
        	scales: {
            	yAxes: [{
                	ticks: {
                    	beginAtZero:true
                	}
            	}]
        	}
    	}
	});

});
