$(document).ready(function(){
	var ctx = $(this).find('#pipeline');

	var pipelineChart = new Chart(ctx, {
    	type: 'horizontalBar',
    	data: {
        	labels: [
				"Extension Pending",
				"Ending Next 15 Days",
				"Active Headcount",
				"Filled Jobs",
				"Open Jobs"
			],
        	datasets: [{
            	label: '# of Jobs',
            	data: [42, 0, 1138, 1279, 518],
            	backgroundColor: [
                	'rgba(255, 99, 132, 0.2)',
                	'rgba(54, 162, 235, 0.2)',
                	'rgba(255, 206, 86, 0.2)',
                	'rgba(75, 192, 192, 0.2)',
                	'rgba(153, 102, 255, 0.2)'
            	],
            	borderColor: [
                	'rgba(255,99,132,1)',
                	'rgba(54, 162, 235, 1)',
                	'rgba(255, 206, 86, 1)',
                	'rgba(75, 192, 192, 1)',
                	'rgba(153, 102, 255, 1)',
                	'rgba(255, 159, 64, 1)'
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
