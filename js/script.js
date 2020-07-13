var name = prompt("What is your name?");
var firstCharOfName = name.slice(0,1);
var firstCharOfNameCapital = firstCharOfName.toUpperCase();
var restOfName = name.slice(1,name.length);
restOfName = restOfName.toLowerCase();
var capitalisedName = firstCharOfNameCapital + restOfName;
alert("Hello " + capitalisedName);
