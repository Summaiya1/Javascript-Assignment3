// Question # 1  // Question # 2

var body = (` 
<input type="text">
<input type="text">
<br>
<br>
<button>ADD</button>
<button>SUBTRACT</button>
<button>MULTIPLY</button>
<button>DIVIDE</button>

<p></p>`);

document.body.innerHTML = body;

var numbers = document.querySelectorAll("input");
var button = document.querySelectorAll('button');
var p = document.querySelector("p");
button[0].addEventListener('click',adding);
button[1].addEventListener('click',subtracting);
button[2].addEventListener('click',multiplying);
button[3].addEventListener('click',dividing);



function adding(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) + parseInt(num2);
    p.innerText=(`Sum of ${num1} and ${num2} is ${result}`);
}

function subtracting(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) - parseInt(num2);
    p.innerText=(`Subtraction of ${num1} and ${num2} is ${result}`);
}

function multiplying(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) * parseInt(num2);
    p.innerText=(`Multiplication of ${num1} and ${num2} is ${result}`);
}

function dividing(event)

{  
    var num1 = numbers[0].value;
    var num2 = numbers[1].value;
    var result = parseInt(num1) / parseInt(num2);
    p.innerText=(`Division of ${num1} and ${num2} is ${result}`);
}


// Question # 3

var temp;

var p1 = document.createElement("p");
p1.innerText=(`Value of variable after declaration is ${temp}`);
document.body.append(p1);

temp = 5;
p1.innerText = p1.innerText.concat(`\ninitial value is : ${temp}`);

temp++;
p1.innerText = p1.innerText.concat(`\nValue after increment is : ${temp}`);

temp = temp + 7;
p1.innerText = p1.innerText.concat(`\nValue after addition is : ${temp}`);

temp--;
p1.innerText = p1.innerText.concat(`\nValue after decrement is : ${temp}`);


temp = temp % 3;
p1.innerText = p1.innerText.concat(`\nThe remainder is : ${temp}`);


// Question # 4

var ticketPrice = 600;

var p2 = document.createElement("p");
p2.innerText=(`Total price to buy  5 tickets  for movie is ${ticketPrice* 5}PKR`);
document.body.append(p2);

//Question # 5

var p3 = document.createElement("p");

var table_num = 4;
for(var i=1; i<=10; i++)
{
    p3.innerText = p3.innerText.concat(`\n${table_num} x ${i} = ${table_num*i}`);
    document.body.append(p3);
}

//Question # 6


var temp_centigrade = 25;
var temp_fahrenheit = 70;

var celsius = (temp_fahrenheit - 32) * (5/9);
var fahrenheit = (temp_centigrade * 9/5 ) + 32;


var p4= document.createElement("p");
var p5= document.createElement("p");
p4.innerText=(`${temp_centigrade}C is ${fahrenheit}F`);
p5.innerText=(`${temp_fahrenheit}F is ${celsius}C`);
document.body.append(p4);
document.body.append(p5);


//Question # 7

var priceOfItem1 = 650 , priceOfItem2 = 100 , quantityItem1 = 3 , quantityItem2 = 7 , shippingCharges = 100;
var totalPrice = (priceOfItem1 * quantityItem1) + (priceOfItem2 * quantityItem2) + shippingCharges;

var p6= document.createElement("p");
document.body.innerHTML += (`<h1>Shopping Cart</h1>`);

p6.innerText=(`
                 Price of Item1 is ${priceOfItem1}\n
                Quantity of Item1 is ${quantityItem1}\n            
                Price of Item2 is ${priceOfItem2}\n 
                Quantity of Item2 is ${quantityItem2}\n   
                Shipping charges is ${shippingCharges}\n \n 
                Total cost of your order is ${totalPrice}
`);
document.body.append(p6);


// Question # 8

var totalMarks = 500;
var obtainedMarks = 400;

var p7= document.createElement("p");
document.body.innerHTML += (`<h1>Marks Sheet</h1>`);

p7.innerText = (`Total marks: ${totalMarks}\n
                 Obtained marks: ${obtainedMarks}\n
                 Percentage: ${obtainedMarks/totalMarks * 100}%`);

document.body.append(p7);               

//Question # 9

var usDollars =10;
var saudiRiyals =25;

var dollarsToPakRupee = usDollars * 104.80 ;
var riyalsToPakRupee = saudiRiyals * 28;

var total = dollarsToPakRupee + riyalsToPakRupee;

var p8 = document.createElement("p");
document.body.innerHTML += (`<h1>Currency in PKR</h1>`);

p8.innerText = (`Total currency in PKR: ${total}`);

document.body.append(p8); 

//Question # 10

var temp1 = 1;
temp1 = (temp1 + 5 ) * 10 / 2 ;
console.log(temp1);

//Question # 11

var currentYear = 2020;
var birthYear = 2000;

var p9 = document.createElement("p");
document.body.innerHTML += (`<h1>Age Calculator</h1>`);

p9.innerText = (`Birth Year : ${birthYear}
                 Current Year : ${currentYear}
                 Your Age: ${currentYear - birthYear}`);

document.body.append(p9); 


// Question # 12

var radius = 20;
var piValue = 3.142;
var circumference = 2 * piValue * radius;
var area = piValue * Math.pow(radius,2);


var p10 = document.createElement("p");
document.body.innerHTML += (`<h1>The Geometrizer</h1>`);

p10.innerText = (`Radius of circle : ${radius}
                 The circumference is: ${circumference}
                 The area is: ${area}`);

document.body.append(p10); 


// Question # 13

var fav_snack = "chips" , currentAge = 15 , maxAge = 65 , perDay = 3;

var p11 = document.createElement("p");
document.body.innerHTML += (`<h1>The Lifetime Supply Calculator</h1>`);
p11.innerText = (`Favourite Snack : ${fav_snack}
                  Current age : ${currentAge}
                  Estimated Maximum Age : ${maxAge}
                  Amount Of Snacks per day : ${perDay}
                  You will need ${(maxAge - currentAge) * perDay} to last you until the ripe old age of ${maxAge}`);

document.body.append(p11); 




























