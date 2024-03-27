const billamount=Number(prompt("Bill : ",))
const serviceQuality=Number(prompt("service quality : "))
const Noofpeople=Number(prompt("enter number of people : "))
const TipPerPerson=(billamount*(serviceQuality/100))/ Noofpeople;
console.log("Bill :",billamount, ", Service Quality :", serviceQuality ,", Number of People :",Noofpeople, ", Tip:", TipPerPerson);