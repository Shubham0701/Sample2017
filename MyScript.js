function myClick(){
	document.getElementById("home").href="Assignment1.html";
}

/*function validateForm(){
	if(validateName())
	{
		if(validateEmail())
		{
			if(validateCity())
			{
				if(validateOrganization())
				{
					if(validateNumber())
					{
						if(validateMessage())
						{
							return true;
						}
					}
				}
			}
		}
	}
	return false; //onsubmit="return validateForm();"
}
*/
function validateName(name)
{
	var name = document.form.name;
	var len = name.value.length;
	var letters = /^[A-Za-z ]+$/;
	if( name.value.match(letters)  && len >1  && len<=20 ){
		return true;
	}	
	else
	{
		name.value="";
		alert("Name should have 1 to 20 charachters");
		name.focus();
		return false;
	}
}
function validateEmail()
{
	var email= document.form.email;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(email.value.match(mailformat) )
	{
		return true;
	}
	else
	{
		email.value="";
		alert("Enter a valid email address");
		email.focus();
		return false;
	}
}
function validateOrganization()
{
	var organization = document.form.organization;
	var letters = /^[A-Za-z]+$/;
	if(organization.value.match(letters)){
		return true;
	}	
	else{
		organization.value="";
		alert("organization name should have only charachters");
		organization.focus();
		return false;
	}
}
function validateNumber()
{
	var num = document.form.num;
	var numbers = /^[0-9]+$/;  
	var len = num.value.length;
	if(num.value.match(numbers) && len==10 )
	{
		return true;
	}
	else
	{
		num.value="";
		alert("Enter a valid number of 10 digits for contact numbers");
		num.focus();
		return false;
	}
}
function validateMessage()
{
	var msg = document.form.msg;
	if(msg.value.length > 250 || msg.value.length == 0)
	{
		msg.value="";
		alert("Enter 1 to 250 charachters for message");
		msg.focus();
		return false;
	}
	return true;
}
function validateCity()
{
	var city = document.form.city;
	if(city.value ==  "")
	{
		alert("Select a city from drop down list");
		return false;
	}
	return true;
}

function checkForm(){
	var arr = document.forms["form"].elements;
	var canSubmit = true;
	for ( var index = 0; index < arr.length ; index ++)
	{
		if(arr[index].value.length == 0)
		{
			canSubmit=false;
		}
	}
	if(canSubmit)
	{
		document.form.submit.disabled = false;
	}
}