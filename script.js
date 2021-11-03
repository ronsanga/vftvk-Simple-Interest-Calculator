function compute() {
    var principal = document.getElementById("principal").value;
    if (principal<=0) {
        document.getElementById("principal").focus();
        alert("enter a positive number");
    }
    else {
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var ans=document.getElementById("result");
    ans.innerHTML="If you deposit <mark>" + principal + "</mark>,<br/>" + " at an intrest rate of <mark>" + rate + "</mark>%.<br>" + "you will receive an amount of <mark>" + interest + "</mark>,<br>" + "in the year <mark>" + year + "</mark>";
    }
}

function newintrest() {
    var ans=document.getElementById("rate_val");
    ans.innerHTML=document.getElementById("rate").value+"%";
}
