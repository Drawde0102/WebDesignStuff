function tillXmas()
{
    var now = new Date();

    var nextXmas = new Date(now.getFullYear(),11,25);

    if(now > nextXmas)//if christmas has passed, set it to next year
    {
        nextXmas.setFullYear(now.getFullYear() + 1);
    }

    var diff = nextXmas.getTime() - now.getTime();//finds difference in milliseconds
    var days = Math.ceil(diff/(1000*60*60*24));//converts into date

    alert("There is " + days + " days till Christmas!")
}