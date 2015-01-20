function generateChartDataCause() {
	var accumulatedLoveCause = 0;
	var chartDataFirtsElement = [];
	if (jsonDataLoveCause.length > 0){
		chartDataFirtsElement.push({
			created_date : new Date(jsonDataLoveCause[0].created_date)
		});
	}
	if(jsonDataFlyCause.length > 0)
	{
		chartDataFirtsElement.push({
			created_date : new Date(jsonDataFlyCause[0].created_date)
		});
	}	
	if(jsonDataLovePosts.length > 0){
		chartDataFirtsElement.push({
			created_date : new Date(jsonDataLovePosts[0].created_date)
		});
	}
	if(jsonDataFlyPosts.length > 0){
		chartDataFirtsElement.push({
			created_date : new Date(jsonDataFlyPosts[0].created_date)
		});
	}

	//sort chartDataFirtsElement by created_date
	chartDataFirtsElement = sortByKey(chartDataFirtsElement, "created_date");

	var date2 = chartDataFirtsElement[0].created_date;
	chartDataFirtsElement.splice (0, chartDataFirtsElement.length)
	date2.setDate(date2.getDate());
	//adding firt element date in the chartData array
	chartData.push({
		created_date : getFormattedDate(date2)
	});
	
	var minDate = new Date(chartData[0].created_date)
	var maxDate = new Date();
	maxDate.setDate((new Date(minDate)).getDate() + 5)
		
	if (jsonDataLoveCause.length > 0) {
		// adding the love of cause elements in the chartData array (loveCause line)
		for (var i = 0; i < jsonDataLoveCause.length; i++) {
			var date2 = new Date(jsonDataLoveCause[i].created_date)
			date2.setDate(date2.getDate() + 1);
			chartData.push({
				created_date : getFormattedDate(date2),
				love_counter_cause : jsonDataLoveCause[i].operation_counter
			});

			// adding the accumulatedLove elements in the chartData2 array (accumulated love line)
			accumulatedLoveCause = accumulatedLoveCause + parseInt(jsonDataLoveCause[i].operation_counter)
			chartData2.push({
				created_date : getFormattedDate(date2),
				love_counter_cause : accumulatedLoveCause
			});
		}
		minDate = new Date(chartData2[0].created_date)
		maxDate = new Date(chartData2[chartData2.length - 1].created_date)
	}


	// adding the minimun date in the chartData2 array (accumulated love line)
	minDate.setDate(minDate.getDate());
	chartData2.push({
		created_date : getFormattedDate(minDate),
		love_goal : love_goal
	});

	// adding the maximun date in the chartData2 array (accumulated love line)
	maxDate.setDate(maxDate.getDate() + 2);
	chartData2.push({
		created_date : getFormattedDate(maxDate),
		love_goal : love_goal
	});
	
    // adding the fly of cause elements in the chartData array (flyCause line)
	for (var i = 0; i < jsonDataFlyCause.length; i++) {
	    var date3 = new Date(jsonDataFlyCause[i].created_date)
	    date3.setDate(date3.getDate()+1);
		chartData.push({
			created_date: getFormattedDate(date3),
			fly_counter_cause: jsonDataFlyCause[i].operation_counter
		});
	}
	
	//adding the love of posts elements in the chartData array (lovePost line)
	for (var i = 0; i < jsonDataLovePosts.length; i++) {
	    var date4 = new Date(jsonDataLovePosts[i].created_date)
	    date4.setDate(date4.getDate()+1);
		chartData.push({
			created_date: getFormattedDate(date4),
			love_counter_posts: jsonDataLovePosts[i].operation_counter
		});
	}

	//adding the fly of posts elements in the chartData array (flyPost line)	
	for (var i = 0; i < jsonDataFlyPosts.length; i++) {
	    var date5 = new Date(jsonDataFlyPosts[i].created_date)
	    date5.setDate(date5.getDate()+1);
		chartData.push({
			created_date: getFormattedDate(date5),
			fly_counter_posts: jsonDataFlyPosts[i].operation_counter
		});
	}
	//sort chartData by created_date
	chartData = sortByKey(chartData, "created_date");
    
    //sort chartData2 by created_date    
    chartData2 = sortByKey(chartData2, "created_date");
    
}

function generateGraphCauseStadistics() {
	var div = document.getElementById("divAmStockChart").id;
	var chart = AmCharts.makeChart(div, {
		type: "stock",
		theme: "light",
		pathToImages: "http://www.amcharts.com/lib/3/images/",

		dataSets: [{
			title: "Discrete Frequency",
			fieldMappings: [{
				fromField: "love_counter_cause",
				toField: "love_counter_cause"
			}, {
				fromField: "fly_counter_cause",
				toField: "fly_counter_cause"
			}, {
				fromField: "love_counter_posts",
				toField: "love_counter_posts"
			}, {
				fromField: "fly_counter_posts",
				toField: "fly_counter_posts"
			}],
			dataProvider: chartData,
			categoryField: "created_date"
		},
		{
			title: "Accumulated Frequency",
			fieldMappings: [{
				fromField: "love_counter_cause",
				toField: "love_counter_cause"
			}, {
				fromField: "love_goal",
				toField: "love_goal"
			}],
			dataProvider: chartData2,
			categoryField: "created_date"
		}
		],

		panels: [{
			title: "Operation Counter",
			percentHeight: 60,
			stockGraphs: [{
				id: "g1",
				title : "Love Counter Cause",
				valueField: "love_counter_cause",
				compareField: "love_counter_cause",
				lineThickness : 3,
				lineColor : "#FF8000",
				useDataSetColors : false,
				bullet: "round",
				balloonText: "[[title]]:<b>[[value]]</b>",
				compareGraphBalloonText: "[[title]]:<b>[[love_counter_cause]]</b>"
			},
			{
				title : "Fly Counter Cause",
				valueField: "fly_counter_cause",
				lineThickness : 3,
				lineColor : "#00cc00",
				useDataSetColors : false,
				bullet: "round",
				balloonText: "[[title]]:<b>[[value]]</b>",
				compareGraphBalloonText: "[[title]]:<b>[[love_counter_cause]]</b>"

			},
			{
				title : "Love Counter Posts",
				valueField: "love_counter_posts",
 				lineThickness : 3,
				lineColor : "#2E9AFE",
    			useDataSetColors : false,
				bullet: "round",
				balloonText: "[[title]]:<b>[[value]]</b>",
				compareGraphBalloonText: "[[title]]:<b>[[love_counter_posts]]</b>"
			},
			{
				title : "Fly Counter Posts",
				valueField: "fly_counter_posts",
 				lineThickness : 3,
				lineColor : "#610B4B",
    			useDataSetColors : false,
				bullet: "round",
				balloonText: "[[title]]:<b>[[value]]</b>",
				compareGraphBalloonText: "[[title]]:<b>[[fly_counter_posts]]</b>"
			},
			{
				title : "Love Goal",
				valueField: "love_goal",
 				lineThickness : 3,
				lineColor : "#DF0101",
				bullet: "round",
    			useDataSetColors : false,
				balloonText: "[[title]]:<b>[[love_goal]]</b>",
				compareGraphBalloonText: "[[title]]:<b>[[love_goal]]</b>"
			}],
			stockLegend: {
				periodValueTextComparing: [{
					valueField: "love_counter_cause",
					comparable: true,
					compareField: "love_counter_cause",
					lineThickness : 3,
					lineColor : "#FF8000",
					useDataSetColors : false
				},
				{
					valueField: "fly_counter_cause",
					comparable: true,
					compareField: "fly_counter_cause",
					lineThickness : 3,
					lineColor : "#00cc00",
					useDataSetColors : false
				},
				{
					valueField: "love_counter_posts",
					comparable: true,
					compareField: "love_counter_posts",
 					lineThickness : 3,
					lineColor : "#2E9AFE",
    				useDataSetColors : false
				},
				{
					valueField: "fly_counter_posts",
					comparable: true,
					compareField: "fly_counter_posts",
 					lineThickness : 3,
					lineColor : "#610B4B",
    				useDataSetColors : false
				},
				{
					valueField: "love_goal",
					comparable: true,
					compareField: "love_goal",
 					lineThickness : 3,
					lineColor : "#DF0101",
    				useDataSetColors : false
				}]
			}
		},
		{
			title: "operation_counter",
			percentHeight: 40,
			stockGraphs: [{
				title : "Love Counter Cause",
				valueField: "love_counter_cause",
				type: "column",
				lineColor : "#FF8000",
				useDataSetColors : false,
				fillAlphas: 1
			},
			{
				title : "Fly Counter Cause",
				valueField: "fly_counter_cause",
				type: "column",
				lineColor : "#00cc00",
				useDataSetColors : false,
				fillAlphas: 1
			}],
			stockLegend: {
				periodValueTextComparing: [{
					valueField: "love_counter_cause",
					comparable: false,
					compareField: "love_counter_cause",
					lineThickness : 3,
					lineColor : "#FF8000",
					useDataSetColors : false
				},
				{
					valueField: "fly_counter_cause",
					comparable: false,
					compareField: "fly_counter_cause",
					lineThickness : 3,
					lineColor : "#00cc00",
					useDataSetColors : false
				}]
			}
		}
		],
		chartScrollbarSettings: {
			graph: "g1",
			selectedBackgroundColor : "#FF8000"
		},
		chartCursorSettings: {
			valueBalloonsEnabled: true,
			fullWidth:true,
			cursorAlpha:0.1,
			usePeriod : "WW",
		},

		periodSelector: {
			//selectFromStart: true,
			position: "left",
			periods: [{
				period: "DD",
				count: 10,
				label: "10 days"
			},{
				period: "MM",
				count: 1,
				label: "1 month"
			}, {
				period: "YYYY",
				count: 1,
				label: "1 year"
			}, {
				period: "YTD",
				label: "YTD"
			}, {
				period: "MAX",
				selected: true,
				label: "MAX"
			}]
		},

		dataSetSelector: {
			position: "left"
		},

		amExport:{
			top:00,
			right:06,
			exportJPG:true,
			exportPNG:true,
			exportSVG:true
		}
	});
}