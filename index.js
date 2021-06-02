

name=prompt("Enter Your name")
age=prompt("Enter your age:")
alert(`Your name is ${name} and you are ${age}years old.`)
month=prompt("Enter month:");
if(month==1){
    alert("January");
}
else if(month==2){
    alert("February");
}
else if(month==3){
    alert("March");
}
else if(month==4){
    alert("April");
}
else if(month==5){
    alert("May");
}
else if(month==6){
    alert("June");
}else if(month==7){
    alert("July");
}
else if(month==8){
    alert("August");
}
else if(month==9){
    alert("September");
}
else if(month==10){
    alert("October");
}
else if(month==11){
    alert("November");
}else if(month==12){
    alert("December");
}
else{
    alert("Not a month of the year!");
}

alert("Where are you in the scool calendar?");
monthOfTheYear=prompt("Enter the month of the year:")
if(monthOfTheYear==1 || monthOfTheYear==2 ||monthOfTheYear==3 ||monthOfTheYear==4){
    alert("You are in the first quater of the year.");
}
else if(monthOfTheYear==5 ||monthOfTheYear==6 ||monthOfTheYear==7 ||monthOfTheYear==8){
    alert("You are in the second quater of the school year");
}
 else if(monthOfTheYear==9 ||monthOfTheYear==10 ||monthOfTheYear==11 ){
    alert("You are in the last quater of the school year");
}
else if(monthOfTheYear==12){
    alert("The holiday is here.");
}
else{
    alert("Not part of the school calendar.")
}
alert("Have a nice term!")