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

let finalValue = totalValue/finances.length

let roundedValue = finalValue.toFixed(2)

document.write("<br>Average Change $", roundedValue)

