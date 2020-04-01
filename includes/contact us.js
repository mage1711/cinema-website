function RegisterValidation()
{
	var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    


    if (firstname == "")                                  
    { 
        window.alert("Please enter your first name"); 
         
        return false; 
    } 

    
    if (lastname == "")                                  
    { 
        window.alert("Please enter your last name"); 
         
        return false; 
    } 
    

    if (email == "")                                  
    { 
        window.alert("Please enter your email"); 
         
        return false; 
    } 

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return true;
  }
  else
  {
    alert("You have entered an invalid email address!")
    return false;
  }

    
}
