// Question # 1,2


document.body.innerHTML = (`
<h2>Book Your Tours</h2>
<div>
    <img src="pictures/pic1.jpg">
    <img src="pictures/pic2.jpg">
    <img src="pictures/pic3.jpg">
    <img src="pictures/pic4.jpg">
</div>

`)

var images = document.getElementsByTagName('img');

for (var i=0; i <=3 ; i++)
{
    images[i].addEventListener("click",message);
}

function message()
{
    alert("Thankyou for booking tour from us")
}


// Question # 3



const dict = {0:["ahmed",34],
               1:["sara",98] ,
               2:["haleema",100],
               3:["abdulah",67],
               4:["abeer",80],
               5:["maysa",98] ,
               6:["eeshal",70],
               7:["huzaifa",67],
               8:["eeraj",58] ,
               9:["abid",10]}

var t = document.getElementsByTagName('table');
var index = 0;
var buttons = document.getElementsByTagName('button');
Make_table()


function Make_table()
{
    document.body.innerHTML = (`
        <table width="400" cellpadding="10" cellspacing="5">
            <tr>
                <td>Index</td>
                <td>Name</td>
                <td>Marks</td>
            </tr>
        </table>
    `)
    for(let prop in dict) 
    {
       t[0].innerHTML += (`
       <tr>
       <td>${index}</td>
        <td>${dict[prop][0]}</td>
        <td>${dict[prop][1]}</td>
       <td><button value=${prop}>Delete</button></td>
       </tr>`)
       index++;
    }
    for (const b of buttons)
    {
        b.addEventListener("click",Delete);
    }
    
}



function Delete()
{

    for(let prop in dict) 
    {
        if (prop == this.value)
        {
           delete dict[prop];
        }
    }
    index = 0;
    Make_table()
}



// Question # 4


document.body.innerHTML = (`

<div>
    <img src="pictures/pic1.jpg" onMouseover="src='pictures/pic4.jpg'"  onMouseout="src='pictures/pic1.jpg'">
    
</div>

`)

// Question# 5

var count = 0;

document.body.innerHTML = (
`
 <div>${count}</div>
 <button onClick="increase();">+</button><br>
 <button onClick="decrease();">-</button>
`
)
var number = document.getElementsByTagName('div');

function increase()
{
    count++;
    number[0].innerText = count;
}

function decrease()
{
    count--;
    number[0].innerText = count;
}







