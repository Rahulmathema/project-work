

//function inside login card

		function login()
		{
			var a = document.getElementById("email").value
			var b = document.getElementById("password").value

			if (a=="" || b=="")
			 {
			 	alert("empty field found,");
			 }

			 else
			 {
			 	alert("servers are on a maintainance break, please try again later");
			 }

		}		
		function see()
		{
			var x = document.getElementById("password");

			if (x.type==="password") {
				x.type = "text";
				document.getElementById('watch').value = "👀";

			}
			else
			{
				x.type = "password";
				document.getElementById('watch').value = "🕶";

			}


		}

//function to change image

		function one()
		{
			document.getElementById("img1").style.display = "flex";
			document.getElementById("img2").style.display = "none";
			document.getElementById("img3").style.display = "none";
			document.getElementById("img4").style.display = "none";
			document.getElementById("img5").style.display = "none";
			document.getElementById("imagebutton1").style.backgroundColor = "cadetblue";
			document.getElementById("imagebutton2").style.backgroundColor = "white";
			document.getElementById("imagebutton3").style.backgroundColor = "white";
			document.getElementById("imagebutton4").style.backgroundColor = "white";
			document.getElementById("imagebutton5").style.backgroundColor = "white";			

		}

		function two()
		{
			document.getElementById("img1").style.display = "none";
			document.getElementById("img2").style.display = "flex";
			document.getElementById("img3").style.display = "none";
			document.getElementById("img4").style.display = "none";
			document.getElementById("img5").style.display = "none";
			document.getElementById("imagebutton1").style.backgroundColor = "white";
			document.getElementById("imagebutton2").style.backgroundColor = "cadetblue";
			document.getElementById("imagebutton3").style.backgroundColor = "white";
			document.getElementById("imagebutton4").style.backgroundColor = "white";
			document.getElementById("imagebutton5").style.backgroundColor = "white";

		}

		function three()
		{
			document.getElementById("img1").style.display = "none";
			document.getElementById("img2").style.display = "none";
			document.getElementById("img3").style.display = "flex";
			document.getElementById("img4").style.display = "none";
			document.getElementById("img5").style.display = "none";
			document.getElementById("imagebutton1").style.backgroundColor = "white";
			document.getElementById("imagebutton2").style.backgroundColor = "white";
			document.getElementById("imagebutton3").style.backgroundColor = "cadetblue";
			document.getElementById("imagebutton4").style.backgroundColor = "white";
			document.getElementById("imagebutton5").style.backgroundColor = "white";

		}	

		function four()
		{
			document.getElementById("img1").style.display = "none";
			document.getElementById("img2").style.display = "none";
			document.getElementById("img3").style.display = "none";
			document.getElementById("img4").style.display = "flex";
			document.getElementById("img5").style.display = "none";
			document.getElementById("imagebutton1").style.backgroundColor = "white";
			document.getElementById("imagebutton2").style.backgroundColor = "white";
			document.getElementById("imagebutton3").style.backgroundColor = "white";
			document.getElementById("imagebutton4").style.backgroundColor = "cadetblue";
			document.getElementById("imagebutton5").style.backgroundColor = "white";

		}	

		function five()
		{
			document.getElementById("img1").style.display = "none";
			document.getElementById("img2").style.display = "none";
			document.getElementById("img3").style.display = "none";
			document.getElementById("img4").style.display = "none";
			document.getElementById("img5").style.display = "flex";
			document.getElementById("imagebutton1").style.backgroundColor = "white";
			document.getElementById("imagebutton2").style.backgroundColor = "white";
			document.getElementById("imagebutton3").style.backgroundColor = "white";
			document.getElementById("imagebutton4").style.backgroundColor = "white";
			document.getElementById("imagebutton5").style.backgroundColor = "cadetblue";

		}		

	
		function login2()
		{
			document.querySelector('.bg-modal').style.display = 'flex';
		}
