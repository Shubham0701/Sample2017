function myClick(){
	document.getElementById("home").href="Assignment1.html";
}
function validateForm(){
	var name = document.form.name;
	var email= document.form.email;
	var city = document.form.city;
	var organization = document.form.organization;
	var number = document.form.number;
	var msg = document.form.msg;
	if(validateName(name))
	{
		if(validateEmail(email))
		{
			if(validateCity(city))
			{
				if(validateOrganization(organization))
				{
					if(validateNumber(number))
					{
						if(validateMessage(msg))
						{
							return true;
						}
					}
				}
			}
		}
	}
	return false;
}
function validateName(name)
{
	var len = name.value.length;
	var letters = /^[A-Za-z]+$/;
	if(name.value.match(letters)){
		return true;
	}	
	else{
		alert("Name should have only charachters");
		return false;
	}
	if(len < 1 || len > 20)
	{
		alert("Name should have 1 to 20 charachters");
		return false;
	}
	else
	{
		return true;
	}
}
function validateEmail(email)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(email.value.match(mailformat) )
	{
		return true;
	}
	else
	{
		alert("Enter a valid email address");
		return false;
	}
}
function validateOrganization(organization)
{
	var letters = /^[A-Za-z]+$/;
	if(organization.value.match(letters)){
		return true;
	}	
	else{
		alert("organization name should have only charachters");
		return false;
	}
}
function validateNumber(number)
{
	var numbers = /^[0-9]+$/;  
	if(number.value.length == 0 || number.value.length > 10) 
	{
		alert("enter a valid number from 1 to 10 digits for contact numbers");
		return false;
	}
	if(number.value.match(numbers))
	{
		return true;
	}
	else
	{
		alert("Only numbers can be entered for contact numbers");
		return false;
	}
}
function validateMessage(msg)
{
	if(msg.value.length > 250 || msg.value.length == 0)
	{
		alert("Enter 1 to 250 charachters for message");
		return false;
	}
	return true;
}
function validateCity(city)
{
	if(city.value == -1)
	{
		alert("Select a city from drop down list");
		return false;
	}
	return true;
}
