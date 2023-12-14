function isPositive(input) 
{
    if (!isNaN(input)) 
    {
        if(input > 0)//else the number will be positive
        {
            return true;
        }
        else//checks  if number is negative
        {
            return false;
        }
    } 
}

while (true) 
{
    var input = prompt("Enter a number");

    if (!isNaN(input)) 
    {
        if (isPositive(input)) 
        {
            alert("This number is Positive");
        } 
        else
        {
            alert("This number is not Positive");
        } 
    } 
    else 
    {
        alert("Invalid input");
    }
}
