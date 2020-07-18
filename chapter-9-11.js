// question # 1


var body = (` 
<p>Enter your city name</p>
<input type="text"> 
<button>SUBMIT</button>`);

document.body.innerHTML = body;

var text = document.querySelector('input');
var button = document.querySelector('button');
button.addEventListener('click',greeting);

function greeting(event)
{
    if(text.value === "karachi")
    {
        alert("welcome to city of lights");
    }

} 

// question # 2


var body = (` 
<p>Enter your gender name</p>
<input type="text"> 
<button>SUBMIT</button>`);

document.body.innerHTML = body;

var text = document.querySelector('input');
var button = document.querySelector('button');
button.addEventListener('click',greeting);

function greeting(event)
{
    if(text.value === "male")
    {
        alert("welcome, sir");
    }
    if(text.value === "female")
    {
        alert("welcome, mam");
    }

}

// question # 3

var body = (` 
<p>Enter your traffic light color</p>
<input type="text"> 
<button>SUBMIT</button>`);

document.body.innerHTML = body;

var text = document.querySelector('input');
var button = document.querySelector('button');
button.addEventListener('click',traffic);

function traffic(event)
{
    if(text.value === "red")
    {
        alert("must stop");
    }
    if(text.value === "yellow")
    {
        alert("ready to move");
    }
    if(text.value === "green")
    {
        alert(" move now");
    }

}


// question # 4


var body = (` 
<p>Enter fuel in litres</p>
<input type="number"> 
<button>SUBMIT</button>`);

document.body.innerHTML = body;

var text = document.querySelector('input');
var button = document.querySelector('button');
button.addEventListener('click',checknum);

function checknum(event)
{
    if(text.value < 0.25)
    {
        alert("Please refill the fuel in your car");
    }
}



// question # 5



var a = 4;
 if (++a === 5)
 { alert("given condition for variable a is true"); } 
 
 
var b = 82;
 if (b++ === 83)
 { alert("given condition for variable b is true"); } 
 
var c = 12;
if (c++ === 13){ alert("condition 1 is true"); }
if (c === 13){ alert("condition 2 is true"); } 
if (++c < 14){ alert("condition 3 is true"); }
if(c === 14){ alert("condition 4 is true"); } 
 
var materialCost = 20000;
 var laborCost = 2000; 
 var totalCost = materialCost + laborCost; 
 if (totalCost === laborCost + materialCost)
 { alert("The cost equals"); } 
 
if (true){ alert("True"); }
if (false){ alert("False"); } 

if("car" < "cat")
{ alert("car is smaller than cat"); }



//question # 6

var body = (` 
<input type="number" placeholder="Enter obtained marks"><br>
<input type="number" placeholder="Enter total marks"><br>
<button>submit</button>`);

document.body.innerHTML = body;

var  textInput = document.querySelectorAll('input');
var button = document.querySelector('button');
var grade,remarks;
button.addEventListener('click',marksheet);



function marksheet(event)
{
    
    var percentage = ( +textInput[0].value / +textInput[1].value ) * 100;
    if(percentage >= 80)
    {
        grade = 'A-one';
        remarks = 'excellent';
    }
    else if(percentage >= 70 && percentage < 80)
    {
        grade = 'A';
        remarks = 'good';
    }
    else if(percentage >=60 && percentage < 70)
    {
        grade = 'B';
        remarks = 'you need to improve';
    }
    else 
    {
        grade = 'Fail';
        remarks = 'Sorry';
    }

    var heading = (`<h1>Marksheet</h1>`);
    document.body.innerHTML = heading;

    var p = document.createElement("p");
    p.innerText=(`Total Marks: ${textInput[1].value}
                  Obtained Marks: ${textInput[0].value}
                  Percentage: ${percentage}%
                  Grade: ${grade}
                  Remarks : ${remarks}`);
    document.body.append(p);
    

}



// Question # 7 


var secretNumber = 5;

var guessNum = prompt("enter any number from 1 to 10");

if(+guessNum === secretNumber)
{
    var  body = (" Bingo! Correct answer");
    document.body.innerHTML = body;

}

else if (+guessNum === secretNumber + 1)
{
    var  body = (" Close enough to the correct answer");
    document.body.innerHTML = body;
}


// Question # 8


var num = prompt("enter any number");

if(+num % 3 === 0)
{
    var  body = ("Number is divisible by 3");
    document.body.innerHTML = body;

}

else if (+num % 3 != 0)
{
    var  body = ("Number is not divisible by 3");
    document.body.innerHTML = body;
}


// Question # 9


var num = prompt("enter any number");

if(+num % 2 == 0)
{
    var  body = ("Number is even");
    document.body.innerHTML = body;

}

else if (+num % 2 != 0)
{
    var  body = ("Number is odd");
    document.body.innerHTML = body;
}


// Question # 10


var temp = prompt("enter any temperature ");

if(+temp >40)
{
    var  body = ("It is too hot outside.");
    document.body.innerHTML = body;

}

else if (+temp > 30)
{
    var  body = ("The Weather today is Normal");
    document.body.innerHTML = body;
}

else if(+temp > 20)
{
    var  body = ("Today’s Weather is cool");
    document.body.innerHTML = body;
}

else if(+temp > 10)
{
    var  body = ("OMG! Today’s weather is so Cool");
    document.body.innerHTML = body;
}


//Question # 11


var body = (` 
<input type="number" placeholder='Enter first number'>
<input type="number" placeholder = 'Enter second number'>
<input type="text" placeholder = 'Enter operator' >
<br>
<br>
<button>ok</button>
<p></p>`);

document.body.innerHTML = body;

var inputs = document.querySelectorAll("input");
var button = document.querySelector('button');
var p = document.querySelector("p");
button.addEventListener('click',operate);

function operate(event)
{
    if(inputs[2].value == '+')
    {
        p.innerText = (`the answer is ${+inputs[0].value +  +inputs[1].value}`);
    }
    else if(inputs[2].value == '-')
    {
        p.innerText = (`the answer is ${+inputs[0].value -  +inputs[1].value}`);
    }
    if(inputs[2].value == '/')
    {
        p.innerText = (`the answer is ${+inputs[0].value /  +inputs[1].value}`);
    }
    if(inputs[2].value == '*')
    {
        p.innerText = (`the answer is ${+inputs[0].value *  +inputs[1].value}`);
    }
}










