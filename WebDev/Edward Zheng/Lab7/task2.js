function TempTrans()
{
    while(true)
    {
        var input = parseInt(prompt("Enter a number"));

        if(!isNaN(input))//checks if input is a number
        {
            var type = prompt("Which temp do you want to convert to(Enter 'C' or 'F' ").toUpperCase();

            if(type === 'C')
            {//calls the clecisus function
                alert("That is " + celcisus(input) + " Celcisus degrees");
            }
            else if(type === 'F')
            {//calls theb fahrenheit function
                alert("That is " + Fahrenheit(input) + " Fahrenheit degrees");
            }
            else
            {
                alert("Invalid input")
            }

            break;
        }
        else
        {
            alert("Invalid input, please try again");
        }
    }
}

function celcisus(input)//convers input to clecisus
{
    var Far = input;  
    return 5.0 / 9.0 * (Far -  32);
}

function Fahrenheit(input)//convers input to fahrenheit
{
    var Cel = input;
    return 9.0 / 5.0 * Cel + 32;
}