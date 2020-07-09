/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
window.onload = function () {
  
 CanvasJS.addColorSet("customShades",
                [//colorSet Array

                "#eae2b7",
                "#ffe668",
                "#fcbf49",
                "#f77f00",
                "#d62828",
                "#772e25",
                ]);

var chart1 = new CanvasJS.Chart("chartContainer1", {
  animationEnabled: true, 
  theme: "dark1",
  backgroundColor: "#2b2d42",
  title:{
        text: "Number of Fatalities Over 6 Years",
        fontFamily: "Fjalla One",
        fontColor: "#ef233c",
        padding: 5,
      },
	axisY:{
    title:"Average Number of Fatalities Per Month", 
    titleFontFamily: "Fjalla One",
    titleFontColor: "#ef233c",
    titlePadding: 5,
		includeZero: false
	},
  axisX:{
  },
	data: [{        
		type: "line",
    lineColor: "#05668d",
      	indexLabelFontSize: 16,
        indexLabelFontFamily: 'Fjalla One',
    xValueFormatString: "MMM, YYYY",
		dataPoints: [
			{ x: new Date(2015, 00, 01), y: 1438.75 },
			{ x: new Date(2016, 00, 01), y: 1278.416667},
			{ x: new Date(2017, 00, 01), y: 1433 },
			{ x: new Date(2018, 00, 01), y: 2696, indexLabel: "\u2191 highest",markerColor: "red", markerType: "circle" },
			{ x: new Date(2019, 00, 01), y: 2157.5 },
			{ x: new Date(2020, 00, 01), y: 1431.5 },
		]
	}]
});

var chart2 = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	theme: "dark2", // "light1", "light2", "dark1", "dark2"
  backgroundColor: "#2b2d42",
	title:{
		text: "Air Raids By Year",
    fontFamily: "Fjalla One",
        fontColor: "#ef233c",
        padding: 5,
	},
  
  colorSet: "customShades",
	axisY: {
		title: "Number of Air Raids",
    titleFontFamily: "Fjalla One",
    titleFontColor: "#ef233c",
    titlePadding: 5,
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "grey",
		dataPoints: [      
			{ y: 14191, label: "2015" },
			{ y: 14527,  label: "2016" },
			{ y: 15969,  label: "2017" },
			{ y: 9746,  label: "2018" },
			{ y: 3045,  label: "2019" },
			{ y: 615, label: "2020" },
		]
	}]
});

  
chart1.render();
chart2.render();
}

var chart3 = new CanvasJS.Chart("chartContainer3", {
  animationEnabled: true, 
  theme: "dark1",
  backgroundColor: "#2b2d42",
  title:{
        text: "Food Insecurity from 2016-2019",
        fontFamily: "Fjalla One",
        fontColor: "#ef233c",
        padding: 5,
      },
	axisY:{
    title:"Number of People", 
    titleFontFamily: "Fjalla One",
    titleFontColor: "#ef233c",
    titlePadding: 5,
		includeZero: false
	},
  axisX:{
  },
	data: [{        
		type: "line",
    lineColor: "#05668d",
      	indexLabelFontSize: 16,
        indexLabelFontFamily: 'Fjalla One',
    xValueFormatString: "MMM, YYYY",
		dataPoints: [
			{ x: new Date(2015, 00, 01), y: 12300000 },
			{ x: new Date(2016, 00, 01), y: 14400000},
			{ x: new Date(2017, 00, 01), y: 14100000},
			{ x: new Date(2018, 00, 01), y: 17800000, },
			{ x: new Date(2019, 00, 01), y: 20100000, indexLabel: "\u2191 highest",markerColor: "red", markerType: "circle" },
		]
	}]
});

var chart4 = new CanvasJS.Chart("chartContainer4", {
	animationEnabled: true,
  theme: "dark1",
  backgroundColor: "#2b2d42",
	title:{
		text: "Food Prices by Product (Dec of Each Year)",
    fontFamily: "Fjalla One",
        fontColor: "#ef233c",
        padding: 5,
	},
	axisY: {
		title: "Price per kg (YER)",
    titleFontFamily: "Fjalla One",
    titleFontColor: "#ef233c",
    titlePadding: 5,
		includeZero: false
	},
	legend: {
		cursor:"pointer",
		itemclick : toggleDataSeries
	},
	toolTip: {
		shared: true,
		content: toolTipFormatter
	},
	data: [{
		type: "bar",
    indexLabelFontSize: 26,
        indexLabelFontFamily: 'Fjalla One',
		showInLegend: true,
		name: "Dec 2015",
		color: "gold",
		dataPoints: [
			{ y: 153, label: "Wheat" },
			{ y: 205, label: "Sugar" },
			{ y: 157, label: "Salt" },
			{ y: 443, label: "Rice" },
			{ y: 396, label: "Vegetable Oil" },
			{ y: 437, label: "Kidney Beans" },
		]
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Dec 2016",
		color: "silver",
		dataPoints: [
			{ y: 172, label: "Wheat" },
			{ y: 264, label: "Sugar" },
			{ y: 114, label: "Salt" },
			{ y: 415, label: "Rice" },
			{ y: 319, label: "Vegetable Oil" },
			{ y: 455, label: "Kidney Beans" },
		]
	},
  {
		type: "bar",
		showInLegend: true,
		name: "Dec 2017",
		color: "#ee6c4d",
		dataPoints: [
			{ y: 191, label: "Wheat" },
			{ y: 279, label: "Sugar" },
			{ y: 109, label: "Salt" },
			{ y: 585, label: "Rice" },
			{ y: 430, label: "Vegtable Oil" },
			{ y: 574, label: "Kidney Beans" },
		]
	},
  {
		type: "bar",
		showInLegend: true,
		name: "Dec 2018",
		color: "#c44900",
		dataPoints: [
			{ y: 277, label: "Wheat" },
			{ y: 315, label: "Sugar" },
			{ y: 134, label: "Salt" },
			{ y: 862, label: "Rice" },
			{ y: 459, label: "Vegtable Oil" },
			{ y: 771, label: "Kidney Beans" },
		]
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Dec 2019",
		color: "#A57164",
		dataPoints: [
			{ y: 279, label: "Wheat" },
			{ y: 324, label: "Sugar" },
			{ y: 143, label: "Salt" },
			{ y: 860, label: "Rice" },
			{ y: 512, label: "Vegtable Oil" },
			{ y: 822, label: "Kidney Beans" },
		]
	}]
});
chart3.render();
chart4.render();

function toolTipFormatter(e) {
	var str = "";
	var total = 0 ;
	var str3;
	var str2 ;
	for (var i = 0; i < e.entries.length; i++){
		var str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\">" + e.entries[i].dataSeries.name + "</span>: <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;
		total = e.entries[i].dataPoint.y + total;
		str = str.concat(str1);
	}
	str2 = "<strong>" + e.entries[0].dataPoint.label + "</strong> <br/>";
	str3 = "<span style = \"color:Tomato\">Total: </span><strong>" + total + "</strong><br/>";
	return (str2.concat(str)).concat(str3);
}

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}

chart3.render();
chart4.render();
}

// var chart5 = new CanvasJS.Chart("chartContainer5", {
// 	animationEnabled: true,
//   backgroundColor:"#2b2d42",
// 	title:{
// 		text: "Import Origins",
// 		horizontalAlign: "center",
//   fontFamily: "Fjalla One",
//         fontColor: "#ef233c",
//         padding: 5,
// 	},
// 	data: [{
// 		type: "doughnut",
// 		startAngle: 60,
// 		//innerRadius: 60,
// 		indexLabelFontSize: 17,
//     indexLabelFontFamily: 'Fjalla One',
//     indexLabelFontColor: "#edf2f4",
// 		indexLabel: "{label} - #percent%",
// 		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
// 		dataPoints: [
// 			{ y: 37.9, label: "China" },
// 			{ y: 18.9, label: "Saudi Arabia" },
// 			{ y: 15.2, label: "United Arab Emirates" },
// 			{ y: 14.7, label: "Turkey"},
// 			{ y: 13.3, label: "India"},
// 		]
// 	}]
// });


// var chart6 = new CanvasJS.Chart("chartContainer6", {
// 	animationEnabled: true,
//   backgroundColor:"#2b2d42",
// 	title:{
// 		text: "Imports",
// 		horizontalAlign: "center",
//   fontFamily: "Fjalla One",
//         fontColor: "#ef233c",
//         padding: 5,
// 	},
// 	data: [{
// 		type: "doughnut",
// 		startAngle: 60,
// 		//innerRadius: 60,
// 		indexLabelFontSize: 17,
//     indexLabelFontFamily: 'Fjalla One',
//     indexLabelFontColor: "#edf2f4",
// 		indexLabel: "{label} - #percent%",
// 		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
// 		dataPoints: [
// 			{ y: 29.7, label: "Wheat" },
// 			{ y: 20.6, label: "Refined Petroleum" },
// 			{ y: 20.4, label: "Raw Iron Bars" },
// 			{ y: 17.5, label: "Rice"},
// 			{ y: 11.8, label: "Cars"},
// 		]
// 	}]
// });

chart5.render();
chart6.render();

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}