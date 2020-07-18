var body = (`
<input type='text' placeholder="Enter number"></input>
<button>OK</button>
`);

document.body.innerHTML = body; 


// var isInt = (n) => {
//     if(parseInt(n) === n) {
//     return true;
// }
// }; 

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{

    if(input.value > 0)
    {
        document.body.innerHTML = (`User input: ${input.value}<br>
        round off value : ${Math.round(input.value)}<br>
        floor value: ${Math.floor(input.value)}<br>
        ceil value : ${Math.ceil(input.value)}<br>`);
    }
    else
    {
        document.body.innerHTML = (`please enter positive number and it should be integer`)
    }
 
});  


// Question # 2

var body = (`
<input type='text' placeholder="Enter number"></input>
<button>OK</button>
`);

document.body.innerHTML = body; 


const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{

    if( Number.isInteger(Number(input.value.substring(1))) === false & parseFloat(input.value.substring(1)) > 0  & input.value.substr(0,1) === '-' )
    {
        document.body.innerHTML = (`User input: ${input.value}<br>
        round off value : ${Math.round(input.value)}<br>
        floor value: ${Math.floor(input.value)}<br>
        ceil value : ${Math.ceil(input.value)}<br>`);
    }
    else
    {
        document.body.innerHTML = (`please enter negative number and it should be float`)
    }
 
});


// Question # 3


var body = (`
<input type='number' placeholder="Enter number"></input>
<button>OK</button>
`);

document.body.innerHTML = body; 


const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{

   if(input.value < 0)
   {
    var body = (`value is ${input.value} and  absolute value is ${Math.abs(input.value)}`);
    document.body.innerHTML = body
   }
   else
   {
   var body = (`Please enter negative value`);
   document.body.innerHTML = body
   }
   
 
}); 


// Question # 4

function randomIntFromInterval(min,max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
document.body.innerHTML = (` random dice value is ${randomIntFromInterval(1,6)}`) 

// Question # 5

var body = (`
<button>OK</button>
`);

var heads = 0;
var tails = 0;
document.body.innerHTML = body; 


const button = document.querySelector('button');
button.addEventListener('click',()=>{

    var x = (Math.floor(Math.random() * 2) == 0);
    if(x)
    {
    	document.body.innerHTML = (`${Math.floor(Math.random() * 2)} <br> it is head`);
    }else
    {
        document.body.innerHTML = (`${Math.floor(Math.random() * 2)} <br> it is tail`);
    }

});
  // Question # 6

function randomIntFromInterval(min,max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
document.body.innerHTML = (` random number between 1 and 100 is ${randomIntFromInterval(1,100)}`) 
 

  // Question # 7


  var regularExpression1 = /^(\d+(\.\d+)?\kg)$/
  var regularExpression2 = /^(\d+(\.\d+)?)$/
  var regularExpression3 = /^(\d+(\.\d+)?\kgs)$/
  var regularExpression4 = /^(\d+(\.\d+)?\kilograms)$/
  var regularExpression5 = /^(\d+(\.\d+)?\kilogram)$/
  
  
  var body = (`
  <input type='text' placeholder="Enter your weight"></input>
  <button>OK</button>
  `);
  
  document.body.innerHTML = body;  
  
  
  const input = document.querySelector('input');
  const button = document.querySelector('button');
  button.addEventListener('click',()=>{
      if(input.value.match(regularExpression1) || input.value.match(regularExpression2) || input.value.match(regularExpression3) || input.value.match(regularExpression4) || input.value.match(regularExpression5))  
      {
          document.body.innerHTML = (`thankyou your weight is recorded`)
      }
      else
      {
          document.body.innerHTML = (`Please enter valid weight`);
  
      }
      
  }); 

  // Question # 8
  
var body = (`
<input type='number' placeholder="Enter  number between 1 and 10"></input>
<button>OK</button>
`);

document.body.innerHTML = body; 

function secret_number(min,max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  const input = document.querySelector('input');
  const button = document.querySelector('button');
  button.addEventListener('click',()=>{
        const num = secret_number(1,10);
        if(input.value == num)
        {
            alert('wow you guessed correctnumber')
     
        }
        else
        {
           alert('Try again')
        }
 });
 