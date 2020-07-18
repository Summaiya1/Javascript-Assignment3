// Question # 1

document.body.innerHTML = (`
<form>
<p>Username:
 <input type="email" name="email" size="15"
 maxlength="30" />
</p>
<p>Password:
 <input type="password" name="password" size="15"
 maxlength="30" />
</p>
<button type="submit">Sign UP</button>
</form>
`);

var submit = document.getElementsByTagName("button");
var inputs = document.getElementsByTagName("input");
submit[0].addEventListener("click",showData);
function showData()
{
   var email = inputs[0].value;
   var password = inputs[1].value;
    document.body.innerHTML = (
        `
        <p>Your email</p>
        <p>${email}</p>
        <p>Your password</p>
        <p>${password}</p>
        `
    )

}


// Question # 2

var val = [1,2]

document.body.innerHTML =(
`
<div>
<div>
    <img src='pictures/pic1.jpg'>
    <p>Gorakh hills</p>
    <div id="first" style="display:none">
        <p>Price to tour is 20,000</p>
        <p>Members allowed are 4</p>
    </div>
    <button value=${val[0]}>More details</button>
</div>
<div>
   <img src='pictures/pic4.jpg'>
   <p>Murree</p>
   <div id="second" style="display:none">
        <p>Price to tour is 40,000</p>
        <p>Members allowed are 3</p>
    </div>
   <button value=${val[1]}>More details</button>
</div>
</div>

`
)
var first = document.getElementById('first');
var second = document.getElementById('second');

var buttons = document.getElementsByTagName('button');
for (const b of buttons)
{
    b.addEventListener("click",Details);
} 

function Details()
{
    if(this.value == 1)
  {
    first.style.display = 'block'
  }
  else if(this.value ==2)
  {
    second.style.display = 'block'
  }
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
       <td><button value=${prop}>Edit</button></td>
       </tr>`)
       index++;
    }
    var buttons = document.getElementsByTagName('button');
     for (var i=0; i <20 ;i++)
     {
         if(i % 2==0)
         {
            buttons[i].addEventListener("click",Delete);
         }
         else{
            buttons[i].addEventListener("click",Edit);
         }
        
        
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

function Edit()
{
    const val = this.value;
    document.body.innerHTML = (`
    <form>
    <p>Edit student Name:
    <input type="text"  size="15"
    maxlength="30" />
    </p>
    <p>Edit student Marks:
    <input type="number" size="15"
    maxlength="30" />
    </p>
    <button type="submit">edit</button>
    </form>
  `);
  var inputs = document.getElementsByTagName("input");
  var submit = document.getElementsByTagName("button");
  submit[0].addEventListener("click",changeData);

  function changeData()
  {
    for(let prop in dict) 
    {
        if (prop == val)
        {
          dict[prop] = [inputs[0].value, inputs[1].value]
        }
    }
    index = 0;
    Make_table()

  }
   

}





