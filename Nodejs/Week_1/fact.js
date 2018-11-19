var readline=require('readline-sync');
var num1=readline.question("enter number");
var fact=1;
for(var i=1;i<=num1;i++)
{
 	fact=fact*i;
}
console.log(fact);

--------------------------------------------------


F:\js>node fact.js
enter number5
120




