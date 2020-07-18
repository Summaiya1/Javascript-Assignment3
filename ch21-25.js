// Question # 1

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
 


// Question # 2

var body = (`
<input type='text' placeholder="Enter your favourite mobile phone model"></input>
<button>ok</button>
`);

document.body.innerHTML = body;  


const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click',()=>{
    document.write(`My favourite phone is:${input.value} and length of string is ${input.value.length}`);
}); 

// Question # 3


var string = 'Pakistan';
var arrstr = string.split('');


document.body.innerText = (`String is :'Pakistan'
 index of 'n' is : ${arrstr.indexOf('n')}`); 

 // Question # 4

 var str = 'Hello World';

var result = str.lastIndexOf('l');

document.body.innerText= ('last index of l in str is ' +result);

// Question # 5

var string  = 'Pakistan';
document.body.innerText= (`str ${string} and character at index 3 is ${string.charAt(3)}`);  

// Question # 6

var body = (`
<input type='text' placeholder="Enter first name"></input>
<input type='text' placeholder="Enter last name"></input>
<button>Greet Me</button>
`);

document.body.innerHTML = body;  


const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    alert(`hello ${inputs[0].value.concat(inputs[1].value)}`);
});  
 

// Question # 7

var str =  "hyderabad";
var result = str.replace('hyderabad' ,'Islamabad');

document.body.innerHTML = (`city : ${str} <br> After replacement : ${result}`);  


// Question # 8

var message = "Ali and Sami are best friends. They play cricket and football together";
var result = message.split('and').join('&');


document.body.innerHTML = (`message: ${message} <br> After replacement : ${result}`); 

// Question # 9
var strNum = '472';
var type = typeof strNum;
var num = parseInt(strNum);
var type1 = typeof num;

document.body.innerHTML = (`string: ${strNum} <br>  type: ${type} <br>  number: ${num} <br>  type: ${type1}`); 

// Question # 10

var body = (`
<input type='text' placeholder="Enter input"></input>
<button>OK</button>
`);

document.body.innerHTML = body;  


const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    document.body.innerHTML = (`string: ${input.value} <br> upperCase string : ${input.value.toUpperCase()}`);

}); 


// Question # 11

var body = (`
<input type='text' placeholder="Enter input"></input>
<button>OK</button>
`);

document.body.innerHTML = body; 

const input = document.querySelector('input');
const button = document.querySelector('button');
const titlecase = (array) =>{
  for(var i=0 ; i <array.length ; i++)
  {
      if(i==0)
      {
         var result = array[i].toUpperCase();
      }
      else{
          result += array[i];

      }

  }
  return result;
  
};

button.addEventListener('click',()=>{
    const strarr = input.value.split(""); 
    const answer =titlecase(strarr);
    document.body.innerHTML = (`string: ${input.value} <br> Titlecase string : ${answer}`);

});


// Question # 12
var num = 35.36 ;
var result = num.toString().replace('.','');

document.body.innerHTML = (`number: ${num} <br> string : ${result}`);



// Question # 13

var body = (`
<input type='text' placeholder="Enter input"></input>
<button>OK</button>
`);

document.body.innerHTML = body;  


const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
      
    const userInput = input.value;
    const userInputArray = userInput.split('');
    for(const d of userInputArray ) {
        if (d === "@" || d=== "." || d=== "," || d=== "!" || d=== "[" || d=== "]") {
            alert('Please enter valid username');
           break;
        }

    }

});  

// Question # 14

var A = ["cake", "apple pie","cookie", "chips", "patties"];

var item = prompt("welcome to ABC bakery. what do you want to buy sir/mam?")
var temp = 0;


for(const items of A ) {
  
    if (item.toLowerCase() == items){
        document.body.innerHTML = (`${item} is available at index ${A.indexOf(items)}`);
        temp++;
        break;
    }
    
}  

if(temp == 0)
{
    document.body.innerHTML = (`${item} is not available in our bakery `);
}  

// Question # 15

var regularExpression = /^[a-zA-Z0-9]\w{6,}$/


var body = (`
<input type='text' placeholder="Enter password"></input>
<button>OK</button>
`);

document.body.innerHTML = body;  


const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    if(input.value.match(regularExpression))  
    {
        document.body.innerHTML = (`thankyou`)
    }
    else
    {
        document.body.innerHTML = (`Please enter valid password`);

    }
    
}); 

// Question #16

var university = "University of Karachi";

for(const f of university.split(''))
{
    document.body.innerHTML += (`${f}<br>
    `);
}



// Question # 17


var body = (`
<input type='text' placeholder="Enter text"></input>
<button>OK</button>
`);

document.body.innerHTML = body;  


const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
   document.body.innerHTML = (`User input: ${input.value}<br>
                            last charachter of ${input.value} is ${input.value.substr(-1)}`);
}); 



// Question # 18

var str ="The quick brown fox jumps over the lazy dog";
var temp=0;

for(const items of str.split(' ') ) {
  
    if ('the' == items.toLowerCase()){
        temp++;
    }
    
}

document.body.innerHTML = (`string: ${str}<br>
There are ${temp} occurences of 'the`); 

