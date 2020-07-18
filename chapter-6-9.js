// Question # 1

var a = 10;

var p = document.createElement("p");

p.innerText = (`The value of a is ${a}
              .......................
              The value of ++a is ${++a}
              now the value of a is ${a}
              
              The value of a++ is ${a++}
              now the value of a is ${a}
              
              The value of --a is ${--a}
              now the value of a is ${a}
              
              The value of a-- is ${a--}
              now the value of a is ${a}`);

document.body.append(p);   

// Question # 3

var a = 2 , b = 1;

var result = --a - --b + ++b + b--;

var p1 = document.createElement("p");

p1.innerText = (` a is ${a}
                  b is ${b}
                  result is ${result}`);

document.body.append(p1);  

// Question # 4

var body = (` 
<p>Enter your name</p>
<input type="text"> 
<button>SUBMIT</button>`);

document.body.innerHTML = body;

var text = document.querySelector('input');
var button = document.querySelector('button');
button.addEventListener('click',greeting);

function greeting(event)
{
    alert(`hello ${text.value}, welcome to my site`);
}


// Question # 5


var body = (` 
<p>Enter number</p>
<input type="text"> 
<button>SUBMIT</button>`);

document.body.innerHTML += body;

var p2 = document.createElement("p");

var text = document.querySelector('input');
var button = document.querySelector('button');
button.addEventListener('click',table);

function table(event)
{
    p2.innerText = "";
    var table_num =text.value;
    for(var i=1; i<=10; i++)
    {
        p2.innerText = p2.innerText.concat(`\n${table_num} x ${i} = ${table_num*i}`);
        document.body.append(p2);
    }
}

// Question # 6

var body = (` 
<input type="text" placeholder="Enter first subject name"><br>
<input type="text" placeholder="Enter second subject name"><br>
<input type="text" placeholder="Enter third subject name"><br>
<input type="number" placeholder="Enter first subject marks"><br>
<input type="number" placeholder="Enter second subject marks"><br>
<input type="number" placeholder="Enter third subject marks"><br>
<button>SUBMIT</button>
`);

document.body.innerHTML += body;

var  textInput = document.querySelectorAll('input');
var button = document.querySelector('button');
button.addEventListener('click',marksheet);

function marksheet(event)
{
  
    const table =(`<table>
                    <tr>
                        <td>Subject</td>
                        <td>Total marks</td>
                        <td>obtained marks</td>
                        <td>percentage</td>
                    </tr>
                    <tr>
                        <td>${textInput[0].value}</td>
                        <td>100</td>
                        <td>${textInput[3].value}</td>
                        <td>${textInput[3].value/100 *100}</td>
                    </tr>
                    <tr>
                        <td>${textInput[1].value}</td>
                        <td>100</td>
                        <td>${textInput[4].value}</td>
                        <td>${textInput[4].value /100 * 100}</td>
                    </tr>
                    <tr>
                        <td>${textInput[2].value}</td>
                        <td>100</td>
                        <td>${textInput[5].value}</td>
                        <td>${textInput[5].value /100 * 100}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>300</td>
                        <td>${+textInput[3].value + +textInput[4].value + +textInput[5].value}</td>
                        <td>${((+textInput[3].value + +textInput[4].value + +textInput[5].value)/300) * 100}%</td>
                    </tr>
                  </table>`);
 
                  
document.body.innerHTML = table;
}




