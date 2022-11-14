// Add heading Financial Analysis
{
    document.write("Financial Analysis<br>-------------------------<br>");
}

// Log total number of months in data
{
    document.write("Total Months: " + finances.length)
}

// Total amount of profit/losses

let sum=0;

for(let i=0; i<finances.length; i++){
    sum=sum+finances[i][1]
}
document.write("<br>Total: $", sum)

// The average of the changes in Profit/Losses over the entire period

let differenceArray = []

for (let i=0; i<finances.length-1; i++){
    let initialMonth = finances[i];
    let followingMonth = finances[i+1];
    let difference = followingMonth[1]-initialMonth[1]
    differenceArray.push(difference)
}

let totalValue = differenceArray.reduce(function(a,b){
    return a+b

})

let finalValue = totalValue/85;

let roundedValue = finalValue.toFixed(2);

document.write("<br>Average Change $", roundedValue)

// Sort array

finances.sort(function(a, b) {
    return a[1] - b[1];
  })

  document.write("<br>Greatest Increase in Profits: ", finances.pop())

  document.write("<br>Greatest Decrease in Profits: ", finances.shift())

 