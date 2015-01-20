var jsonDataLove;
var jsonDataFly;
var jsonDataLovePosts;
var jsonDataFlyPosts;
var love_goal;
var chartData = [];
var chartData2 = [];

function CauseStatisticsViewModel(){
	var self = this;
	self.operation_type_one = "OTLA";
	self.operation_type_two = "OTFLY";
	self.time_unit = "day";
	self.selectedCause = ko.observable();
    // Find stadistics by cause:
	
    findStatisticsByCause = function(cause){    	
    	self.selectedCause(cause);
		love_goal = cause.love_goal;
    	Dajaxice.statistics.dajax_cause_count_operations_by_two_types(findStatisticsByCauseCallback, {'id_cause': cause.id_cause,
    																	 'operation_type_one' : self.operation_type_one,
    																	 'operation_type_two' : self.operation_type_two,
    																	 'time_unit' : self.time_unit });
    };

    // Dajaxice find_stadistics_by_cause callback:
	function findStatisticsByCauseCallback(data){
		jsonDataLoveCause = data.love_cause;
		jsonDataFlyCause = data.fly_cause;
		jsonDataLovePosts = data.love_posts
		jsonDataFlyPosts = data.fly_posts
		
		if(jsonDataLoveCause.length == 0 && jsonDataFlyCause.length == 0 
				&& jsonDataLovePosts.length == 0 && jsonDataFlyPosts.length == 0){
			closeCauseStatisticsModal();	
			setTimeout(function() {
				alertify.set({ delay: 5000 });
				alertify.log("Sorry, this cause does not have data to generate statistics");				
			},1)
		}
		else{
			//clear the chartData and chartData2 variable 
			chartData.splice (0, chartData.length) 
			chartData2.splice (0, chartData2.length)
			generateChartDataCause();
			setTimeout('generateGraphCauseStadistics()', 500);	
		}
	};
	
    // Close the cause statistics modal:
    closeCauseStatisticsModal = function(){
    	$('#causeStatisticsModal').modal('hide');
    };
   
   	/**
   	 * UI control:
   	 */
	// Show modal cause statistics
	showModalCauseStatistics = function() {
		document.getElementById("divModalCauseStatistics").style.display = "";
	};
}
ko.applyBindings(new CauseStatisticsViewModel(), document.getElementById("causeStatisticsViewModel")); 