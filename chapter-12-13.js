

// Question # 1



var character = prompt("enter any character ");

if(character.charCodeAt(0) >=65 && character.charCodeAt(0) <=90)
{
    var  body = ("It is uppercase letter");
    document.body.innerHTML = body;

}

else if(character.charCodeAt(0) >=97 && character.charCodeAt(0) <=122)
{
    var  body = ("It is lowercase letter");
    document.body.innerHTML = body;

}

else if(character.charCodeAt(0) >=47 && character.charCodeAt(0) <=57)
{
    var  body = ("It is number");
    document.body.innerHTML = body;
}




// Question # 2


var num1 = prompt('enter first number');
var num2 = prompt('enter second number');


if(+num1 > +num2)
{
    var  body = (`<p>${num1} is larger</p>`);
    document.body.innerHTML = body;

}

else if(+num1 < +num2)
{
    var  body = (`<p>${num2} is larger</p>`);
    document.body.innerHTML = body;

}

else if( num1 == num2)
{
    var  body = ("both are equal");
    document.body.innerHTML = body;
}



// Question # 3


var num = prompt('enter number');

if(+num > 0)
{
    var  body = (`<p>${num} is positive</p>`);
    document.body.innerHTML = body;

}

else if(+num < 0)
{
    var  body = (`<p>${num} is negative</p>`);
    document.body.innerHTML = body;

}

else if( num1 == 0)
{
    var  body = ("number is zero");
    document.body.innerHTML = body;
}



// Question # 4


var character = prompt('enter a character');

if( +character.charCodeAt(0) === 65 || +character.charCodeAt(0) === 69|| +character.charCodeAt(0) === 73 || +character.charCodeAt(0) === 79 || +character.charCodeAt(0) === 85 || +character.charCodeAt(0) === 97 || +character.charCodeAt(0) === 101 || +character.charCodeAt(0) === 105 ||+character.charCodeAt(0) === 111 || +character.charCodeAt(0) === 117  )
{
    var  body = ("character is vowel");
    document.body.innerHTML = body;
}
else{
    var  body = ("character is not  vowel");
    document.body.innerHTML = body;
}


//Question # 5



var correctPassword = "sara";
var enterPassword = prompt('enter password');

if(enterPassword == "")
{
    var  body = ("Please enter your pasword");
    document.body.innerHTML = body;
}
else if(enterPassword == correctPassword)
{
  var body = ("Correct! The password you entered matches the original password");
  document.body.innerHTML = body;
}
else 
{
    var body = ("Incorrect password");
    document.body.innerHTML = body;
}




//Question # 6

var greeting;
var hour = 13;
if (hour < 18)
{ greeting = "Good day";}
else
 {greeting = "Good evening"; } 

 // Question # 7

 var time_temp = 1900;
 var time = prompt('enter time');

 if(time >=2100 && time <=2359)
 {
     var  body = ("Good Night");
     document.body.innerHTML = body;
 }
 else if(time >=1700 && time < 2100)
 {
   var body = ("Good Evening");
   document.body.innerHTML = body;
 }
 else if(time >=1200 && time < 1700)
 {
     var body = ("Good afternoon");
     document.body.innerHTML = body;
 }

 else if(time >=0000 && time < 1200)
 {
     var body = ("Good Morning");
     document.body.innerHTML = body;
 }




