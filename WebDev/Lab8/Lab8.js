function checkValidate()
{
    //get values for special validate needs
    var email = document.getElementById('Email address').value;
    var confirmEmail = document.getElementById('Confirm Email address').value;
    var Birth = new Date(document.getElementById('Date of birth').value);
    var startDate = new Date(document.getElementById('Starting Date').value);
    var today = new Date();
    var alertMessage = [];

    if(email !== confirmEmail)
    {
        alertMessage.push("Email Addresses do not match.");    
    }
    if(today.getFullYear() - Birth.getFullYear() < 17)
    {
        alertMessage.push("Student should be at least 17 years old.");
    }
    if(startDate < today)
    {
        alertMessage.push("Starting Date should not be before today's date.");
    }

}