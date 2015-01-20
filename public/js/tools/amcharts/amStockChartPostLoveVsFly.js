function generateChartDataPost() {
	
	var chartDataFirtsElement = [];
	if (jsonDataLovePost.length > 0){
		chartDataFirtsElement.push({
			created_date : new Date(jsonDataLovePost[0].created_date)
		});
	}
	if(jsonDataFlyPost.length > 0)
	{
		chartDataFirtsElement.push({
			created_date : new Date(jsonDataFlyPost[0].created_date)
		});
	}		
	//sort chartDataFirtsElement by created_date
	chartDataFirtsElement = sortByKey(chartDataFirtsElement, "created_date");
	
	var date = chartDataFirtsElement[0].created_date;
	//deleting elements of the chartDataFirtsElement array
	chartDataFirtsElement.splice (0, chartDataFirtsElement.length)
	//adding firt element date in the chartData array
	date.setDate(date.getDate());
	chartData3.push({
			created_date: getFormattedDate(date)
	});
	
	//adding the love of post elements in the chartData3 array (lovePost line)
	for (var i = 0; i < jsonDataLovePost.length; i++) {
	    var date = new Date(jsonDataLovePost[i].created_date)
	    date.setDate(date.getDate()+1);
		chartData3.push({
			created_date: getFormattedDate(date),
			love_counter_post: jsonDataLovePost[i].operation_counter
		});
	}

	//adding the fly of post elements in the chartData3 array (flyPost line)
	for (var i = 0; i < jsonDataFlyPost.length; i++) {
	    var date = new Date(jsonDataFlyPost[i].created_date)
	    date.setDate(date.getDate()+1);
		chartData3.push({
			created_date: getFormattedDate(date),
			fly_counter_post: jsonDataFlyPost[i].operation_counter
		});
	}
	//sort chartData3 by created_date
	chartData3 = sortByKey(chartData3, "created_date");
}

function generateGraphPostStatistics() {
	var div = document.getElementById("divAmStockChart2").id;
	var chart = AmCharts.makeChart(div, {
		type: "stock",
		theme: "light",
		pathToImages: "http://www.amcharts.com/lib/3/images/",

		dataSets: [{
			title: "Discrete Frequency",
			fieldMappings: [{
				fromField: "love_counter_post",
				toField: "love_counter_post"
			}, {
				fromField: "fly_counter_post",
				toField: "fly_counter_post"
			}],
			dataProvider: chartData3,
			categoryField: "created_date"
		}],

		panels: [{
			title: "Operation Counter",
			percentHeight: 60,
			stockGraphs: [{
				id: "g3",
				title : "Love Counter Post",
				valueField: "love_counter_post",
				compareField: "love_counter_post",
				lineThickness : 3,
				lineColor : "#FF8000",
				useDataSetColors : false,
				bullet: "round",
				balloonText: "[[title]]:<b>[[value]]</b>",
				compareGraphBalloonText: "[[title]]:<b>[[love_counter_post]]</b>"
			},
			{
				title : "Fly Counter Post",
				valueField: "fly_counter_post",
				lineThickness : 3,
				lineColor : "#00cc00",
				useDataSetColors : false,
				bullet: "round",
				balloonText: "[[title]]:<b>[[value]]</b>",
				compareGraphBalloonText: "[[title]]:<b>[[love_counter_post]]</b>"

			}],
			stockLegend: {
				periodValueTextComparing: [{
					valueField: "love_counter_post",
					comparable: true,
					compareField: "love_counter_post",
					lineThickness : 3,
					lineColor : "#FF8000",
					useDataSetColors : false
				},
				{
					valueField: "fly_counter_post",
					comparable: true,
					compareField: "fly_counter_post",
					lineThickness : 3,
					lineColor : "#00cc00",
					useDataSetColors : false
				}]
			}
		},
		{
			title: "operation_counter",
			percentHeight: 40,
			stockGraphs: [{
				title : "Love Counter Post",
				valueField: "love_counter_post",
				type: "column",
				lineColor : "#FF8000",
				useDataSetColors : false,
				fillAlphas: 1
			},
			{
				title : "Fly Counter Post",
				valueField: "fly_counter_post",
				type: "column",
				lineColor : "#00cc00",
				useDataSetColors : false,
				fillAlphas: 1
			}],
			stockLegend: {
				periodValueTextComparing: [{
					valueField: "love_counter_post",
					comparable: false,
					compareField: "love_counter_post",
					lineThickness : 3,
					lineColor : "#FF8000",
					useDataSetColors : false
				},
				{
					valueField: "fly_counter_post",
					comparable: false,
					compareField: "fly_counter_post",
					lineThickness : 3,
					lineColor : "#00cc00",
					useDataSetColors : false
				}]
			}
		}
		],
		chartScrollbarSettings: {
			graph: "g3",
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