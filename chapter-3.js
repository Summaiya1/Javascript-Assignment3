// Question #1

var age = 19
alert("my age is " + age + " years old");

//Question # 2


var myStorage = window.localStorage;
var n = myStorage.getItem('no_of_times_visited');

function site_visited()
{
   if (n == null || n == NaN || n == undefined)
   {
       n = 0;
       myStorage.setItem('no_of_times_visited',n);
   }
   else{
       n++;
       myStorage.setItem('no_of_times_visited',n);
   }
}

site_visited();
alert("You have visited this site " + myStorage.getItem('no_of_times_visited') + " times");




// Question # 3

var birthYear = 2000;
var p = document.createElement("p");
p.innerText=(`My birthyear is ${birthYear}.\nDatatype of any declared variable is number.`);
document.body.append(p);


// Question # 4


var visitorName = 'Sara';
var productTitle = 'T-shirts';
var quantity = 5;


var p = document.createElement("p");
p.innerText=(`${visitorName} ordered ${quantity}  ${productTitle} on XYZ Clothing store`);
document.body.append(p);














