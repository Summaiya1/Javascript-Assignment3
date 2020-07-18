// question # 1

var multidimension = [[]];

// question # 2

multidimension = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

var body = (`<p></p>`)

document.body.innerHTML = body;    

var p = document.querySelector('p');

for(let i=0; i<=2 ; i++)
{
    for(let j=0; j<=3 ; j++)
    {
        p.innerText +=(`${multidimension[i][j]}`);
    }
    p.innerText +=(`\n`);
}

// question # 3

var body = (`<p></p>`)

document.body.innerHTML = body;    

var p = document.querySelector('p');

for(let i=1; i<=10 ; i++)
{
      p.innerText +=(`${i}\n`);
}

// question # 4


var body = (` 
<p>Enter number to show its table</p>
<input type="text"> 
<p>Enter table length</p>
<input type="text"> 
<button>SUBMIT</button>`);

document.body.innerHTML += body;

var p2 = document.createElement("p");

var text = document.querySelectorAll('input');
var button = document.querySelector('button');
button.addEventListener('click',table);

function table(event)
{
    p2.innerText = "";
    var table_num =text[0].value;
    for(var i=1; i<= +text[1].value; i++)
    {
        p2.innerText = p2.innerText.concat(`\n${table_num} x ${i} = ${table_num*i}`);
        document.body.append(p2);
    }
}


// question # 5

fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var body = (`<p></p>`)

document.body.innerHTML = body;    

var p = document.querySelector('p');

for(let i=0; i<=4 ; i++)
{
      p.innerText +=(`Element at index ${i} is ${fruits[i]}\n`);
}


// question # 6

var body = (`<p>Counting:\n</p>`);

document.body.innerHTML = body;    

var p = document.querySelector('p');

for(let i=1; i<=15 ; i++)
{
      p.innerText +=(`${i}\n`);
}


document.body.innerHTML += (`<p>Reverse counting: \n</p>`);
var p1 = document.querySelectorAll('p');

for(let i=10; i >= 1 ; i--)
{
     p1[1].innerText +=(`${i}\n`);
 }
                             
 document.body.innerHTML += (`<p>even no: \n</p>`);
 var p2 = document.querySelectorAll('p');
 for(let i=0; i <= 20 ; i++)
 {
     if( i %2 == 0)
     {
        p2[2].innerText +=(`${i}\n`);
     }
      
  }

document.body.innerHTML += (`<p>odd no: \n</p>`);
 var p3 = document.querySelectorAll('p');
 for(let i=0; i <= 20 ; i++)
 {
     if( i %2 != 0)
     {
        p3[3].innerText +=(`${i}\n`);
     }
      
  }

  document.body.innerHTML += (`<p>series: \n</p>`);
  var p4 = document.querySelectorAll('p');
  for(let i=1; i <= 20 ; i++)
  {
      if( i %2 == 0)
      {
         p4[4].innerText +=(`${i}k\n`);
      }
       
   }


// question # 7
   A = ["cake", "apple pie", "cookie", "chips", "patties"] ;
   var body = (`<p></p>`);
  var temp = 0;

   document.body.innerHTML = body;    

   var p = document.querySelector('p');

   var item = prompt("enter any item for search");

   for(const a of A) {
    if (a === item) {
        p.innerText = (`${item} is available at index ${A.indexOf(item)} in our bakery`);
        temp++;
        break;
    }
   
    
  }

  if(temp != 1)
  {
      p.innerText = (`${item} is not  available  in our bakery`);
  }
 

  // question # 8 ,9

 
var A = [24, 53, 78, 91, 12];



var sorted = A.slice().sort(function(a, b) {
  return a - b;
});

var smallest = sorted[0];
var largest  = sorted[sorted.length - 1];

var body = (`<p></p>`);
document.body.innerHTML = body; 
var p = document.querySelector('p');

p.innerText += (` smallest number is ${smallest} , largest number is ${largest}`);




// question # 10

var body = (`<p>Multiple of five:</p>`)

document.body.innerHTML = body;    

var p = document.querySelector('p');

for(let i=1; i<=100 ; i++)
{   
    if(i % 5 ===0)
    {
        p.innerText +=(`${i}\n`);
    }
     
}



