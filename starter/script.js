// Add heading Financial Analysis
{
    document.write("Financial Analysis<br>-------------------------<br>");
}

// Log total number of months in data
{
    document.write("Total Months: " + finances.length)
}

// Total amount of profit/losses

for ( var j=0; j < finances.length; j++ )
  {
     document.write("<br>Total: $", finances[j][1]);
  }