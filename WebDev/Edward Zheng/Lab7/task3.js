function dateCheck()
{
    //get the date by the id
    var inputDate = new Date(document.getElementById("dateInput").value);

    var nowDate = new Date();//get current date

    inputDate.setHours(0, 0, 0, 0);//set times to 0, so it only compares the dates
    nowDate.setHours(0, 0, 0, 0);

    if(inputDate > nowDate)
    {
        alert("This date is in the Future");
    }
    else if(inputDate < nowDate)
    {
        alert("This date is in the past");
    }
    else
    {
        alert("This date is today")
    }
}