
 //Question # 1

 var d = new Date();
 document.body.innerText=(`Today date is ${d}`);

 // Question # 2

var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.body.innerText=(`Current Month  is ${months[d.getMonth()]}`); 



// Question # 3
var d = new Date();
var months = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
document.body.innerText=(`Today  is ${months[d.getDay()]}`);


 // Question # 4

 var d = new Date();
 if(d.getDay() === 5 | d.getDay() === 6) 
 {
    document.body.innerText=(`It's funday`);

 }

 
 

 // Question # 5

 var d = new Date();
 if(d.getDate() <= 15) 
 {
    document.body.innerText=(`First fifteen days of month`);

 }
 else{
    document.body.innerText=(`last days of month`);
 }



// question # 6

var d = new Date();

document.body.innerText=(`Current date is ${d}
                           elapsed milliseconds since January 1,1970 is ${Date.UTC(2020,6)}
                           elapsed minutes since January 1,1970 is ${Date.UTC(2020,6)/60000}`);



// question # 7

var d = new Date();
if(d.getHours() > 12)
{
    document.body.innerText=(`it's PM`)
}
else if(d.getHours() <= 12)
{
    document.body.innerText=(`it's AM`)
}



// Question # 8

var laterDate = new Date(2020,11,31,00,00,00);

document.body.innerText=(`${laterDate}`);


// Question # 9

const oneDayMilliseconds = 24 * 60 * 60 * 1000;
var startingDateRamadan = new Date(2020,3,23);
var todayDate =  new Date(2020,6,19);

// .getTime() for milliseconds

const diffDays = Math.round(Math.abs((todayDate.getTime() - startingDateRamadan.getTime() ) / oneDayMilliseconds));
document.body.innerText=(`${diffDays} days have been passed from 1st day of ramadan`);


// Question # 9


var refDate = new Date(2015,11,5);
var todayDate =  new Date(2020,6,19);

var todayDateMilliseconds = todayDate.getTime();
var refDateMilliseconds = refDate.getTime();
var totalSeconds = (todayDateMilliseconds - refDateMilliseconds ) / 60000;

document.body.innerText= (`${totalSeconds} has been passed`);


// Question # 10

var currentDate = new Date(2020,6,19,10,34,46);
var PreviousDate =  new Date(2020,6,19,9,34,46);

document.body.innerText = (`Current Date is ${currentDate} , one hour ago it was ${PreviousDate}`)



// Question # 11


var currentDate = new Date(2020,6,19,10,34,46);
var PreviousDate =  new Date(1920,6,19,9,34,46);

document.body.innerText = (`Current Date is ${currentDate} , 100 years back it was ${PreviousDate}`)


// Question # 12

var body = (`
<input type='number' placeholder="Enter your age "></input>
<button>OK</button>
`);

document.body.innerHTML = body; 


const input = document.querySelector('input');
const button = document.querySelector('button');
const currentYear = 2020;

button.addEventListener('click',()=>{
    const birthYear = currentYear - input.value;
   document.body.innerText = (`Your birth year is ${birthYear}`);
 
});  

// Question # 13

//Math.round(num * 100) / 100
var noOfUnits = 410;
var chargesPerUnit = 16;
var latePaymentSurCharge = 350;
var netAmountPayable = noOfUnits * chargesPerUnit;
var grossAmountPayable = netAmountPayable + latePaymentSurCharge;

var nameCustomer = 'ABC customer';
var month = 'February';

var body =(`
<h1>K-Electric Bill</h1>
<p>Customer Name :${nameCustomer}<br>
Month : ${month}<br>
Number Of Units: ${noOfUnits}<br>
Charges per unit: ${chargesPerUnit}<br><br>

Net amount payable(within Due Date): ${netAmountPayable}<br>
late payment surcharge : ${latePaymentSurCharge}<br>
Gross Amount Payable : ${grossAmountPayable}
</p>
`);

document.body.innerHTML = body;


