// ********************* Chapter # 1 ************************


alert('Hello User, Welcome to my Website');

alert('Error! Please enter a valid Password.');

alert('Welcome to JS Land... \n Happy Coding!');

alert('Welcome to JS Land...');
alert('Happy Coding!');

alert('Hello! i can run JS through my web browser console.. ');



// ********************* Chapter # 2 ************************

var username;

var myName = 'Sufyan Baig';

var message = 'Hello World!';

alert(message);

var name = 'John Doe', age = '15 years old', course = 'Certified Mobile Application Development';

alert(name);
alert(age);
alert(course);

var pizza = 'PIZZA\nPIZZ\nPIZ\nPI\nP';

alert(pizza);

var email = 'sufyanbaig1996@gmail.com';

alert('My email address is ' + email);

var book = 'A smarter way to learn JavaScript';

alert('I am trying to learn from a book ' + book);

document.write('Yah! i can write HTML content through JavaScript<br>');

var line = '“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';

alert(line);


// ********************* Chapter # 3 ************************

age = 23;

alert(`I am ${age} years old`);

var track = 14;

alert(`You have visited this site ${track} times`);

var birthYear = 1996;

document.write(`MY birth year is ${birthYear} <br>Data Type of my declared variable is number<br>`);

var productTitle = 'Tshirt(s)', qty = 5;

document.write(`${name} ordered ${qty} ${productTitle} on XYZ Clothing Store.`);




// ********************* Chapter # 4 ************************



var num1, num2, num3;

// illegal variable names
// var 1num, 2num, 3num, 4num, 5num;

// legal variable names

var num4, num5, num6, num7, num8;


document.write(`<br><h1>Rules For Naming JS Variables</h1>
                    <p>Variable names can only contain numbers, alphabets, $ and _ .<br> For Example $my_1stVariable</p>
                    <p>Variable must begin with a letter, $ or _ . For example $name, _name or name.</p>
                    <p>Variable names are case Sensitive</p>
                    <p>Variable names should not be JS Keywords</p>`)




// ********************* Chapter # 5 ************************                    

var a = 3, b = 5, c = a + b;

document.write(`<br> sum of ${a} and ${b} is ${c}`);
c = b - a;
document.write(`<br> substraction of ${a} from ${b} is ${c}`);
c = a * b;
document.write(`<br> multiplication of ${a} and ${b} is ${c}`);
c = a / b;
document.write(`<br> division of ${a} in ${b} is ${c}`);


var num;
document.write('<br>Value after variable declaration is : ' + num);
num = 5;
document.write('<br>Initial value : ' + num);
num++;
document.write('<br>Value after increment is : ' + num);
num += 7;
document.write('<br>Value after addition is : ' + num);
num--;
document.write('<br>Value after decrement is : ' + num);
num = num % 3;
document.write('<br>The remainder is : ' + num);

var price = 600;
qty = 5;
var totalPrice = price * qty;

document.write(`<br><br>Total cost to buy ${qty} tickets to a movie is ${totalPrice}PKR.`)


document.write('<br><br><h1>Table of 4</h1>')
for (let i = 1; i < 11; i++) {
    var table = 4 * i;
    document.write(`<br>4 * ${i} = ${table}`);

}

document.write("<br><br>");

var Cels = 100;
var Farn = 38;
var celsInFarn = (Cels * 9 / 5) + 32;
var farnInCels = (Farn - 32) * 5 / 9;
document.write("" + Cels + "'C" + "is" + " " + celsInFarn + "'F" + "<br>");
document.write(Farn + "'F" + "is" + " " + farnInCels + "'C" + "<br>");

document.write("<br><br>");
var item1 = 300;
var item2 = 800;
var qty1 = 2;
var qty2 = 10;
var charges = 200;
document.write("Price of item 1 is" + item1 + "<br>");
document.write("quantity of item 1 is" + qty1 + "<br>");
document.write("Price of item 2 is" + item2 + "<br>");
document.write("Quantity of item 2 is" + qty2 + "<br>");
document.write("Shipping charges is" + charges + "<br>");

document.write("<br><br>");

var total = 980;
var obtained = 809;
var percentage = (obtained / total) * 100;

document.write("Tota Marks:" + total + "<br>");
document.write("Marks obtained:" + obtained + "<br>");
document.write("percentage:" + percentage + "<br>");

document.write("<br><br>");

var us = 1;
var riyal = 25;
// convert dollar in to rupees;
var convertDollar = us * 154;
// convert riyal in to rupees;
var convertRiyal = riyal * 28;
document.write("1 US Dollar =" + " " + convertDollar + "Pakistani Rupee" + "<br>");
document.write("25 Saudi Riyal =" + " " + convertRiyal + "Pakistani Rupee" + "<br>");
var num = (2 + 5 * 10) / 2;
document.write("the result of the expression is" + " " + num + "<br>");

document.write("<br><br>");

var year = 2020;
var birthYear = 2000;
var age = year - birthYear;
document.write("current year:" + "" + year + "<br>");
document.write("birth year:" + "" + birthYear + "<br>");
document.write("Your age is:" + age + "<br>");

document.write("<br><br>");

var radius = 8;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("Radius of circle:" + radius + "<br>");
document.write("The circumference of the circle is:" + circumference + "<br>");
document.write("The area is:" + area + "<br>");

document.write("<br><br>");

var snack = "Chilli Milli";
var age = 24;
var maximum_age = 66;
document.write("favourite snack :" + snack + "<br>");
document.write("current age:" + age + "<br>");
document.write("estimated maximum age:" + maximum_age + "<br>");

document.write("<br><br>");

// ********************* Chapter # 6 ************************   

var a = 10;
document.write("The value of a is:" + a + "<br>");
document.write("................................." + "<br>");
a = ++a;
document.write("The value of ++a is:" + a + "<br>");
document.write("The value of a is:" + a + "<br>");
a = a++;
document.write("The value of a++ is:" + a + "<br>");
document.write("The value of   a is:" + a + "<br>");
var a = --a;
document.write("The value of --a is:" + a + "<br>");
document.write("The value of a is:" + a + "<br>");
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is" + a + "<br>");
document.write(" b is" + b + "<br>");
document.write("result is" + result + "<br>");


var table = prompt("enter table number");
for (var i = 1; i <= 10; i++) {
    if (table > 0) {
        document.write(table + "x" + i + "=" + table * i);
        document.write("<br>");
    }
    else {
        document.write(5 + "x" + i + "=" + 5 * i);
        document.write("<br>");
    }

    
}

var eng=parseInt(prompt("enter english marks"));
var math=parseInt(prompt("enter math marks"));
var urdu=parseInt(prompt("enter urdu marks"));
var all=parseInt(eng+math+urdu);
var perc=(all/300)*100;
document.write("<b>subject Total marks obtained marks percentage"+"<br>");
document.write("English        100             "+eng+"     "+eng+"%"+"<br>");
document.write("math           100             "+math+"     "+math+"%"+"<br>");
document.write("urdu        100             "+urdu+"     "+urdu+"%"+"<br>");
document.write(" 300"+" "+all+ " "+perc+"%"+"<br>");


// Assignment # 9-10
// “city” name as input from user
var city=prompt("enter city name");
if(city==="karachi"){
    document.write("“Welcome to city of lights"+"<br>");


}
var gender=prompt("enter gender");
if(gender==="male"){
    document.write("Good Morning Sir"+"<br>");

}
else{
    document.write("Good Morning Ma’am"+"<br>");

}
// road traffic signal
var lal=prompt("enter signal color");
var green=prompt("enter signal  color");
var yello=prompt("enter signal  color");
document.write("<table><tr><td>Signal color"+" "+"Message</td></tr></table>"+"<br>");
document.write("<td>Red"+" "+"Must Stop</td>"+"<br>"+"Yellow"+""+"Ready to move"+"<br>"+"Green"+" "+"Move now");
// a program to take input remaining fuel in car
var fuel=prompt("enter remaining fuel in litre");
if(fuel===0.25){
    document.write("Please refill the fuel in your car");

}
// check whether alert message

// total marks, marks obtained, percentage, grade
      document.write("total marks:"+" " +"300"+"<br>");
      document.write("marks obtained:"+" "+all+"<br>");
      document.write("percentage:"+perc+"%"+"<br>");
      if(perc<=100 && perc==80 ){
          document.write("grade:A-one"+"<br>");
      }
      if(perc<80 && perc==70){
          document.write("grade:A"+"<br>")
          
      }
      if(perc< 70 && perc==60){
        document.write("grade:B"+"<br>")
        
    }
    if(perc<60 && perc==50){
        document.write("grade:C"+"<br>")
        
    }
    if(perc<50 && perc==40){
        document.write("grade:D"+"<br>")
        
    }
    else{
        document.write("fail"+"<br>");
    }
    // Guess game
    var sec=2;
    var guess=prompt("guess the secret number."+"<br>");
    if(guess==sec){
        document.write("Bingo! Correct answer"+"<br>")
    }
    if(guess==sec+1){
        document.write("Close enough to the correct answer"+"<br>");

    }
    // divisible by 3
    var divisible=prompt("given number");
    if((divisible%3)==0){
        document.write("your number is divisible by 3"+"<br>");
    }
// temperature update
var temp=prompt("enter temperature"+"<br>");
if(temp>40){
    document.write("It is too hot outside."+"<br>");

}
if(temp>30 && temp<40){
    document.write(" The Weather today is Normal."+"<br>");

}
if(temp>20 && temp<=30){
    document.write("Today’s Weather is cool.");

}
if(temp>10 && temp<=20){
    document.write("OMG! Today’s weather is so Cool"+"<br>");

}
// calculator
var firstnumber=parseInt(prompt("enter first number"));
var secondnumber=parseInt(prompt("enter 2nd number"));
var oper=parseInt(prompt("enter operator"));
if(oper=="+"){
    var a=firstnumber+secondnumber;
    alert(a+"<br>");
}
if(oper=="-"){
    var a=firstnumber-secondnumber;
    alert(a+"<br>");

}
if(oper=="*"){
    var a=firstnumber*secondnumber;
    alert(a+"<br>");
}
if(oper=="/"){
    var a=firstnumber/secondnumber;
  
    alert(a+"<br>");
}
// Assignment # 13-15
var qualific=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write('Qualifications'+"<br>");
for(var i=0; i<qualific.length; i++){

document.write(qualific[i]+"<br>");
}
// the scores & percentages of students
var names=["micahel","john","Tony"];
var scores=[320,230,480];
for(var i=0; i<scores.length; i++){
    var p=(scores[i]/500)*100;
    document.write("score of"+" "+names[i]+""+"is"+scores[i]+" "+"percentages:"+""+p+"%"+"<br>");

}
// color names
var color=["red","orange","yellow","black","voilet"];
for(var i=0; i<color.length; i++){
    document.write(color[i]+"<br>");
}
color.unshift(prompt("enter a  color that you wnat to add at the begining"));

for(var i=0; i<color.length; i++){
    document.write(color[i]+"<br>");
}
color.push(prompt("enter a  color that you wnat to add at the end"));

for(var i=0; i<color.length; i++){
    document.write(color[i]+"<br>");
}
color.unshift(prompt("enter a  color that you wnat to add at the begining"),prompt("enter a  color that you wnat to add at the begining"));
for(var i=0; i<color.length; i++){
    document.write(color[i]+"<br>");
}
color.shift();
for(var i=0; i<color.length; i++){
    document.write(color[i]+"<br>");
}
// ascending order using Array’s sort method.
var sc=[210,232,333,320,290];
for(var i=0; i<sc.length; i++){
    document.write("scores of student"+sc[i]+",");
}
document.write("<br>");
// an array with city names
var cities=["karachi","islamabad","quetta","lahore"];
document.write("Cities  list"+"<br>");
for(var i=0; i<cities.length; i++){
    document.write(cities[i]+",");

}
// Assignment # 17-20
for(i=0; i<=10; i++){
    document.write(i+"<br>");
}
var mul=prompt("table number");
var len=prompt("table lenght");
for(var i=1; i<=len; i++ ){
    document.write(mul+"x"+i+"="+2*i);
document.write("<br>");
 var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
 for(var i=0; i<fruits.length; i++){
     document.write("element at index"+i+" "+fruits[i]+"<br>");
 }



}
// Counting
for(var i=0; i<=15; i++){
    document.write(i+",");
}
// Reverse counting
for(var i=10; i>0; i--){
    document.write(i+",");


}
// even
for(var i=0; i<=20; i+2){
    document.write(i+ " ,");
}
// Odd
for(var i=1; i<20; i+2){
    document.write(i+",");

}
//  Series
for(var i=2; i<=20; i+2){
    document.write(i+"k"+",");
}


