
//Question 1
var a=prompt("Ebter first value");
var b=prompt("Enter value to which you want to raise your first value");
document.write("Your first value "+a+"<br>The power given "+ b+"<br>The answer is : "+raised(a,b)+"<br>");
function raised(a,b)
{
    var i,val;
val=a;
for(i=1;i<b;i++)
{
val=val*a;
}
return val;
}
//question 2:
var year=prompt("Enter year you wanna find is leap or not");

    if (year % 400 == 0) {
        document.write(year+" is a leap year.");
    }
    else if (year % 100 == 0) {
        document.write(year+" is not a leap year.");
    }
    else if (year % 4 == 0) {
        document.write(year+" is a leap year.");
    }
    // all other years are not leap year
    else {
        document.write(year+" is not a leap year.");
    }
//Question 3:
        var len1 = 4;
        var len2 = 6;
        var len3 = 5;
        area(len1, len2, len3);
        function area(len1, len2, len3) {
            var s = cals(len1, len2, len3);
            var area = s * (s - len1) * (s - len3) * (s - len2);
            document.write("<br>First side length is " + len1 + "<br>Second side length is " + len2 + "<br>Third side length is " + len3 + "<br>The area of triangle is  " + area);

        }
        function cals(len1f, len2f, len3f) {
            var sf = (len1f + len3f + len2f) / 2;
            return sf;
        }
        //Question 4:
        var stdm1=+prompt("Enter marks obtained in 1st subjects out of 100");
        var stdm2=+prompt("Enter marks obtained in 2nd subjects out of 100");
        var stdm3=+prompt("Enter marks obtained in 3rd subjects out of 100");
        mainff(stdm1,stdm2,stdm3);
        function mainff(m1,m2,m3){
document.write("<br>The average marks are : "+average(m1,m2,m3));
document.write("<br>Percentege is : "+percentage(m1,m2,m3));

        }
        function average(ma,mb,mc)
        {
            return (ma+mb+mc/3);
        }
        function percentage(ma,mb,mc)
        {
            return (ma+mb+mc)/300*100;
        }
//Question 5:
var stri=prompt("Enter any string");
var string=stri.toLowerCase();
var find=prompt("Enter wich character's position you wanna find");
findindex(string,find);
function findindex()
{
  var a=parseInt(string.indexOf(find));
  a=a+1;
document.write("<br>"+find+" present at index : "+ a);
}
//Question 6
  var s=prompt("Enter sentence");
  var r=remove(s);
  
  function remove(str) {             
    let newString = " ";                            
    for (let i = 0; i < str.length; i++)  
{           
      if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u")                                   
       {           
       newString += str[i];         
      };   
    };   
    return newString;   
  };  
  document.write(r);
 // Question 7:
    var i, found = 0, count = 0;

    var str=prompt("Enter string");
    
    for (i = 0; i <str.length; i++)
    { var aa=isVowel(str[i]);
        if (aa)
        {
            found++;
        }
        else
        {
            found = 0;
        }

        if (found == 2)
        {
            document.write( str[i - 1]+"  "+str[i]);
            found = 1;
            count++;
        }
    }

    document.write("<br>Total number of occurences :"+ count++);

function isVowel( ch)
{
    switch(ch)
    {
        case 'A': 
        case 'a': 
        case 'E':  
        case 'e':
        case 'I':
        case 'i':
        case 'O':
        case 'o':
        case 'U':
        case 'u':
            return 1;
        default:
            return 0;
    }
}
//Question 8
var distance=prompt("Enter distance in KM");
document.write("<br>"+distance+" in meters ="+ meter(distance));
document.write("<br>"+distance+" in centimeters ="+ centimeter(distance))
document.write("<br>"+distance+" in foots ="+ foot(distance))
document.write("<br>"+distance+" in inches ="+ inches(distance))

function meter(km)
{
    return km*1000;
}
function centimeter(km)
{
    return km*100000;
}

function foot(km)
{
    return km*3280.84;
}
function inches(km)
{
    return km*39370.1;
}
//Question 9:
var overtime=prompt("Enter the overtime you worked in hours ");
document.write("<br>Yoour overtime earnings are : "+calovertime(overtime)+" Rs");
function calovertime(overtime)
{
return overtime*12;
}
//Qustion 10:
var hundred=0,fifty=0,ten=0,a=0;
var currency=+prompt("Enter amount you want to be withdraw");
document.write("<br>You Entered : "+currency);

for (var i=1; i<= currency;i++)
{
    if(currency>100)
    {
hundred++;
currency=currency-100;
    }
    else if(currency>=50 && currency<100 && currency>=10)
    {
fifty++;
 currency=currency-50;
    }
    else if(currency>=10&&currency<50)
    {
        currency=currency-10;
ten++;
    }
    else
    {
        currency=currency-currency;
    }
    
}
document.write("<br>rupees given : "+currency);
document.write("<br>Hundred notes given : "+hundred);
document.write("<br>Fifty notes given : "+fifty);
document.write("<br>Ten notes given : "+ten);
