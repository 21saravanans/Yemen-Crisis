window.onload = function () {

var chart5 = new CanvasJS.Chart("chartContainer5", {
	animationEnabled: true,
  backgroundColor:"#2b2d42",
	title:{
		text: "Import Origins",
		horizontalAlign: "center",
  fontFamily: "Fjalla One",
        fontColor: "#ef233c",
        padding: 5,
	},
	data: [{
		type: "doughnut",
		startAngle: 60,
		//innerRadius: 60,
		indexLabelFontSize: 17,
    indexLabelFontFamily: 'Fjalla One',
    indexLabelFontColor: "#edf2f4",
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			{ y: 37.9, label: "China" },
			{ y: 18.9, label: "Saudi Arabia" },
			{ y: 15.2, label: "United Arab Emirates" },
			{ y: 14.7, label: "Turkey"},
			{ y: 13.3, label: "India"},
		]
	}]
});


var chart6 = new CanvasJS.Chart("chartContainer6", {
	animationEnabled: true,
  backgroundColor:"#2b2d42",
	title:{
		text: "Imports",
		horizontalAlign: "center",
  fontFamily: "Fjalla One",
        fontColor: "#ef233c",
        padding: 5,
	},
	data: [{
		type: "doughnut",
		startAngle: 60,
		//innerRadius: 60,
		indexLabelFontSize: 17,
    indexLabelFontFamily: 'Fjalla One',
    indexLabelFontColor: "#edf2f4",
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			{ y: 29.7, label: "Wheat" },
			{ y: 20.6, label: "Refined Petroleum" },
			{ y: 20.4, label: "Raw Iron Bars" },
			{ y: 17.5, label: "Rice"},
			{ y: 11.8, label: "Cars"},
		]
	}]
});

chart5.render();
chart6.render();
}



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

