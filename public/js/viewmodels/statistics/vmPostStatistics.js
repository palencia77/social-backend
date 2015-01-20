var chartData3 = [];
var jsonDataLovePost;
var jsonDataFlyPost;

function PostStatisticsViewModel(){
	var self = this;
	self.operation_type_one = "OTLA";
	self.operation_type_two = "OTFLY";
	self.time_unit = "day";
	self.selectedPost = ko.observable();
    // Find stadistics by post:
	
    findStatisticsByPost = function(post){    
    	self.selectedPost(post);
    	Dajaxice.statistics.dajax_post_count_operations_by_two_types(findStatisticsByPostCallback, {'post_destination': post.id_post,
    																	 'operation_type_one' : self.operation_type_one,
    																	 'operation_type_two' : self.operation_type_two,
    																	 'time_unit' : self.time_unit });
    };
	
    // Dajaxice find_stadistics_by_post callback:
	function findStatisticsByPostCallback(data){
		jsonDataLovePost = data.love;
		jsonDataFlyPost = data.fly;
		
		if(jsonDataLovePost.length == 0 && jsonDataFlyPost.length == 0){
			closePostStatisticsModal();
			setTimeout(function() {
				alertify.set({ delay: 5000 });
				alertify.log("Sorry, this post does not have data to generate statistics");
        	},1)
		}
		else{
			//clear the chartData3 variable 
			chartData3.splice (0, chartData3.length) 
			generateChartDataPost();
			setTimeout('generateGraphPostStatistics()', 500);				
		}
	};
    
   	/**
   	 * UI control:
   	 */
	// Show modal post statistics
	showModalPostStatistics = function() {
		document.getElementById("divModalPostStatistics").style.display = "";
	};
	
    // Close the post statistics modal:
	closePostStatisticsModal = function(){
    	$('#postStatisticsModal').modal('hide');
    };
}
ko.applyBindings(new PostStatisticsViewModel(), document.getElementById("postStatisticsViewModel")); 