function updateRate(rateval) 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}


function compute()
{
    var principal =parseFloat(document.getElementById('principal').value);
    var rate =parseFloat(document.getElementById('rate').value);
    var years =parseInt(document.getElementById('years').value);
    if(principal<0|| principal==0 || !document.getElementById('principal').value)
    {
        
        document.getElementById('result').innerHTML=alert("Please input a Positive Value");               
    }    
    else 
    {
        var amount = ((principal * years * rate)/100);        
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById('result').innerHTML ="</br>If you deposit "+principal+" &#8377</br>at an interest rate of "+rate+"%</br>You will receive an amount of Interest "+amount+" &#8377</br>in the year "+year+".</br>";   
    }
    
}
   