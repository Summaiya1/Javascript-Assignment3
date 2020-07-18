// Question # 1
function myDate()
{
    var d = new Date();
    document.body.innerText=(`Today date is ${d}`);
}

myDate();

// Question # 2

var body = (`
<input type='text' placeholder="Enter first name"></input>
<input type='text' placeholder="Enter last name"></input>
<button>Greet Me</button>
`);

document.body.innerHTML = body;  


const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    alert(`hello ${inputs[0].value} ${inputs[1].value}`);
});


// Question # 3


var body = (`
<input type='text' placeholder="Enter first no"></input>
<input type='text' placeholder="Enter last no"></input>
<button>add</button>
`);

document.body.innerHTML = body;  
function adding()
{
   document.write(`the addition of two number is ${+inputs[0].value + +inputs[1].value}`)
}

const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',adding);



// Question # 4

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


// Question # 5
var body = (`
<input type='number' placeholder="Enter number"></input>
<button>square</button>
`);

document.body.innerHTML = body;  
function squaring()
{
   document.write(`the square of  number is ${input.value * input.value}`)
}

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',squaring);





// Question # 6

var body = (`
<input type='number' placeholder="Enter number"></input>
<button>factorial</button>
`);

document.body.innerHTML = body;  
function factorial()
{
    let answer = 1;
    if (input.value == 0 || input.value == 1)
    {
        document.write(`the factorial of  number is ${answer}`);
    }
    else
    {
    for(var i = input.value; i >= 1; i--){
    answer = answer * i;
    }
    document.write(`the factorial of  number is ${answer}`);
}
}

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',factorial);



// Question # 7

var body = (` 
<input type="number" placeholder='Enter first number'>
<input type="number" placeholder = 'Enter second number'>
<br>
<button>ok</button>
<p></p>`);

document.body.innerHTML = body;
function counting()
{
    for(let i=inputs[0].value; i<=inputs[1].value ; i++)
    {
          document.body.innerHTML +=(`${i}\n`);
    }
}


const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',counting);  

// Question # 8

var body = (` 
<input type="number" placeholder='Enter hypotenuse'>
<input type="number" placeholder = 'Enter Base'>
<input type="number" placeholder = 'Enter Perpendicular'>
<br>
<button>ok</button>
<p></p>`);

document.body.innerHTML = body;

function squaring(n)
{
   return(n * n);
}

function calculateHypotenuse()
{
    const hyp = squaring(inputs[0].value);
    const base = squaring(inputs[1].value);
    const perp = squaring(inputs[2].value);

    const sum = base + perp;
    if(hyp == sum)
    {
        document.body.innerHTML = (`formula is true`);
    }
}


const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',calculateHypotenuse);


// Question # 9

var width = 20;
var heigth = 20;

function calcualteArea(width,height)
{
    var Area = width * height;
    return Area;
}


function calculateAreaByValue(width=30,height=30)
{
    var Area = width * height;
    return Area;
}


// Question # 10


var body = (`
<input type='text' placeholder="Enter string"></input>
<button>ok</button>
`);

document.body.innerHTML = body;  
const reverseString = ()=>
   {
      const x = input.value.split('');
      const y = x.reverse();
      const z = y.join('');
      console.log(z);
      return z;
   }
function palindromeString()
{
   if(input.value === reverseString())
   {
       document.body.innerHTML =('string is palindrome');
   }
   else
   {
    document.body.innerHTML =('string is not palindrome');
   }
}

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',palindromeString);




// Question # 11
 
 
var body = (`
<input type='text' placeholder="Enter input"></input>
<button>OK</button>
`);

document.body.innerHTML = body; 

const input = document.querySelector('input');
const button = document.querySelector('button');
const titlecase = (word) =>{
  for(var i=0 ; i <word.length ; i++)
  {
      if(i==0)
      {
         var result = word[i].toUpperCase();
      }
      else{
          result += word[i];

      }

  }
  return result;
  
};
var answer = [];

button.addEventListener('click',()=>{
    for(const word of input.value.split(" ")) 
    {
       
       answer.push(titlecase(word));
       
    }
    
    document.body.innerHTML = (`string: ${input.value} <br> Titlecase string : ${answer.join(' ')}`);

});



// Question # 12

var body = (`
<input type='text' placeholder="Enter input"></input>
<button>OK</button>
`);

document.body.innerHTML = body; 
var answer ={};
var length_array =[];
var big =0;
const input = document.querySelector('input');
const button = document.querySelector('button');
const length = (word) =>{
   answer[word.length] = word;
   length_array.push(word.length);
};


button.addEventListener('click',()=>{
    for(const word of input.value.split(" ")) 
    {
       const result = length(word);
       
    }
    big = Math.max(...length_array); // array destruction
  
    document.body.innerHTML = (`string: ${input.value} <br> high length  word is : ${answer[big]}`);

});



// QUESTION # 13


var body = (`
<input type='text' placeholder="Enter string"></input>
<input type='text' placeholder="Enter letter for checking its occurences"></input>
<button>ok</button>
`);

var occurence = 0;
document.body.innerHTML = body;  

function checkingOccurences()
{
    let arr = input[0].value.split('');
   for(let i=0; i < input[0].value.length ; i++)
   {
        if(arr[i] === input[1].value)
        {
            occurence++;
        }

   }
   document.body.innerHTML = (`The occurences of ${input[1].value} in ${input[0].value} are ${occurence}`);
}

const input = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',checkingOccurences);



// Question # 14

function calcCircumference(radius)
{
   return (2*Math.PI*radius);
}

function calcArea(radius)
{
    return (Math.PI * radius * radius);
}
