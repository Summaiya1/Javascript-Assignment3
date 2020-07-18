document.body.innerHTML=(
    `
<div>
<h1> DOM </h1>
<div id="form-content" class="content">
<label for="first-name">First Name</label>
<input type="text" id="first-name" />
<label for="last-name">Last Name</label>
<input type="text" id="last-name" />
<label for="email">Email</label>
<input type="text" id="email" />
</div>
<div id="main-content" class="content">
<p class="render"> First Name : Alex</p>
<p class="render" id="lastName">Last Name: Bank</p>
<p class="render"> Email : alexbank@example.com</p>
<p class="render"> Country : Pakistan </p>
<p class="render"> contact : +92 300 1234567</p>
</div>
</div>
    `
)

// Question # 1

var main = document.getElementById("main-content");
var child_main1 = main.childNodes[1]
var child_main2 = main.childNodes[3]
var child_main3 = main.childNodes[5]
var child_main4 = main.childNodes[7]
var child_main5 = main.childNodes[9]

var render = document.getElementsByClassName('render');
for (const r of render)
{
  console.log(r.innerHTML);
}
render[0].value = "sara";
render[1].value = "bano"
render[2].value = "sarabano@gmail.com"

// Question # 2
var type = document.getElementById("form-content").nodeType;
console.log(type)
var type2 = document.getElementById("last-name").nodeType;
console.log(type2)
var mainContent = document.getElementById("main-content");
var firstchild = mainContent.firstChild;
var lastchild = mainContent.lastChild;
var nextSibling = document.getElementById("last-name").nextSibling;
var previousSibling = document.getElementById("last-name").previousSibling;
var emailParent = document.getElementById("email").parentNode;
var typeEmail = document.getElementById("email").nodeType;