function ageCheck()
{
    var birth = new Date(document.getElementById("dateInput").value);

    var now = new Date();

    if(birth > now)
    {
        alert("You haven't been born!")
    }
    else
    {
        var diff = now.getTime() - birth.getTime();//finds difference in milliseconds
        var years = Math.ceil(diff/(1000*60*60*24*365)) - 1;//converts into year(Not considering leap years)
        
        if(years === 0)
        {
            alert("You are born this year!")
        }
        else
        {
            alert("You are " + years + " years old")
        }
    }
}