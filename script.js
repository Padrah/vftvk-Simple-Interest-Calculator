function compute()
{
    var principal = document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    document.getElementById("result").innerHTML= "If you deposit "+1000000+",\<br\> at an interest of "+3.5+"%\<br\>You will receivean amount of "+175000+",\<br\>in the year "+2025+"\<br\>"
}
function validateForm(){
    var x = document.div["maindiv"] ["principal"].value;
    if(x == "0 || -1"){
        alert("Enter a positive number");
        return false;
    }
}
        