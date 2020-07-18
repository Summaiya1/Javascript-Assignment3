//Question # 1

var studentNames = [];
var strArray = ['a','b','c'];
var boolArray = [true , false];
var numArray = [1,2,3,4];
var mixArray = ['a',1,true];
var qualifications = ["SSC" , "HSC", "BCS", "BS"," BCOM"," MS"," M. Phil."," PhD"];

var body = (`<h1>Qualifications</h1>
              <ul></ul>`)

document.body.innerHTML = body;    

var list = document.querySelector('ul');

for(const q of qualifications) 
{

  list.innerHTML += (`<li>${q}</li>`)

}



//Question # 8



var studentNames = ['sara','rafiq','haleema'];
var totalMarks = [400,450,500]
var studentPercentage = [90,95,100];

var body = (`<p></p>`)

document.body.innerHTML = body;    

var p = document.querySelector('p');

for( let i=0; i <= 2; i++) 
{

  p.innerText += (`Score of ${studentNames[i]} is ${totalMarks[i]}.Percentage is ${studentPercentage[i]}%\n`)

}



// Question # 9

var colors = ['red','blue'];

var body = (`<ul></ul>`);
document.body.innerHTML = body;
var colorList = document.querySelector('ul');

for(const c of colors) 
{
   
    colorList.innerHTML += (`<li>${c}</li>`)

}


var enterColor1 = prompt('enter color to add in beginning');
colors.unshift(enterColor1);

/*
for(const c of colors) 
{
    
    colorList.innerHTML += (`<li>${c}</li>`)

}
*/
var enterColor2 = prompt('enter color to add in ending');
colors.push(enterColor2);

/*
for(const c of colors) 
{
    
  colorList.innerHTML += (`<li>${c}</li>`)

} */

colors.unshift('purple',"green");

/*
for(const c of colors) 
{
  colorList.innerHTML += (`<li>${c}</li>`)

} */

colors.shift();

var que1 = prompt('what color , you want to add ?');
var que2 = parseInt(prompt('and in what index'));

colors.splice(que2,0,que1);

var que3 = parseInt(prompt('At what index , you want to delete color'));
var que4 = parseInt(prompt('and how many colors?'));

colors.splice(que3, que4);

/*
for(const c of colors) 
{
  colorList.innerHTML += (`<li>${c}</li>`)

} */


// Question # 10


var studentScore = [100,99,56];


  

var body = (`<p></p>`)

document.body.innerHTML = body;    

var p = document.querySelector('p');

p.innerText = (`scores of student: ${studentScore[0]},${studentScore[1]},${studentScore[2]}\n`);

studentScore.sort(function(a, b) {
                    return a - b;
                  });
p.innerText += (` sorted scores of student: ${studentScore[0]},${studentScore[1]},${studentScore[2]}\n`);               


// Question # 11


var cityNames = ['karachi','lahore','islamabad','peshawar','quetta'];
var selectedAreas = cityNames.slice(2,4);

var body = (`<p></p>`)

document.body.innerHTML = body;    

var p = document.querySelector('p');

p.innerText = (`cities: ${cityNames[0]} ${cityNames[1]} ${cityNames[2]} ${cityNames[3]} ${cityNames[4]}\n
                selected cities: ${selectedAreas[0]} ${selectedAreas[1]} `);



// question # 12


var arr = ["This", "is", "my", "cat"]; 
var str = arr.join(' ');


var body = (`<p></p>`)
document.body.innerHTML = body;   

var p = document.querySelector('p');
p.innerText= (`Array :
            ${arr[0]} , ${arr[1]} , ${arr[2]} , ${arr[3]}
             String is :
             ${str}`);


// Question # 13

var devices = ['keyboard','mouse','CPU','PC'];

var body = (`<h1>Devices</h1>
              ${devices[0]} , ${devices[1]} , ${devices[2]} , ${devices[3]}
              <ul></ul>`)

document.body.innerHTML = body;    

var list = document.querySelector('ul');

for(let i=0 ; i<=3 ; i++) 
{
  
  list.innerHTML += (`<li>out:
                      ${devices.shift()}</li>`)

}

// Question # 14

var devices = ['keyboard','mouse','CPU','PC'];

var body = (`<h1>Devices</h1>
              ${devices[0]} , ${devices[1]} , ${devices[2]} , ${devices[3]}
              <ul></ul>`)

document.body.innerHTML = body;    

var list = document.querySelector('ul');

for(let i=0 ; i<=3 ; i++) 
{
  
  list.innerHTML += (`<li>out:
                      ${devices.pop()}</li>`)

}
















