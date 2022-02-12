//script for making clock

	setInterval(displayclock, 0);
	function displayclock()
	{
		var time = new Date();
		var hrs = time.getHours();
		var mins = time.getMinutes();
		var sec = time.getSeconds();
		var ampm = ""

//for time to not cross 12

		if (hrs>12) 
		{
			hrs = hrs - 12;	
			ampm = "PM";
		}

		else
		{
			ampm = "AM"
		}
//show 0 infront of hours if hour less than 10

		if (hrs < 10) 
		{
			hrs = '0' + hrs;
		}

		//show 0 infront of hours if hour less than 10

		if (sec < 10)
		{
			sec = '0' + sec;
		}

		//show 0 infront of hours if hour less than 10

		if (mins < 10) 
		{
			mins = '0' + mins;
		}

		//display time in selected division 

		document.getElementById("clock").innerHTML = hrs + ":" + mins + ":" + sec + ampm ;
	}


			setInterval(clockpos, 0);
		//to display clock on the top right side of the screen
		function clockpos()
		{
			document.getElementById('clock').style.position = "absolute";
			document.getElementById('clock').style.top = "20px";
			document.getElementById('clock').style.left = "20px";
			document.getElementById('clock').style.width = "10%";
			document.getElementById('clock').style.height = "2%";
			document.getElementById('clock').style.fontSize = "25px";
			document.getElementById('clock').style.backgroundColor = "black";
			document.getElementById('clock').style.color = "red";

		}