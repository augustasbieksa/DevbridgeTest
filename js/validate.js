function validate() {    
    var firstname = document.getElementById("firstName").value; 
    var lastname = document.getElementById("lastName").value;
    var contactMessage = document.getElementById("textMessage").value;          
    
    if (firstname == "") //wanted to check for alphabets only.
        alert("Please enter your first name")
    else if (lastname == "") {
        alert("Please enter your last name")
        return false;
    } else if (contactMessage == "") {
        alert("Don't forget to type in the message")
        return false;
    } else {
        alert("Thank You for contacting us. We will reach out to you in the next 24 hours.")
        return true;
    }
    
    
}