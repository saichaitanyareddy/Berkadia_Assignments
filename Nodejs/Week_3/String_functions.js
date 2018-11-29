var s="hello Node";
console.log(s.charAt(0));//displays the character at specified index
-------------------------
h

var s1="good morning";
console.log(s1.concat(s));//concatenates s1 to s
--------------------------
good morninghello Node

console.log(s.endsWith("Node"));//checks whether the string ends with the given string or not and returns a boolean value
--------------------------------
true

console.log(s.startsWith("hello"));//checks whether the string starts with the given string or not and returns a boolean value
-----------------------------------
true

console.log(s.includes("hello"));//checks whether the string includes the given string or not and returns boolean value
---------------------------------
true

console.log(s.indexOf("h"));//Returns the position of the first found occurrence of a specified value in a string
----------------------------
0

console.log(s.lastIndexOf("o"));//Returns the position of the last found occurrence of a specified value in a string
--------------------------------
7

console.log(s.match("hello"));//Searches a string for a match against a regular expression, and returns the matches
------------------------------
[ 'hello', index: 0, input: 'hello Node', groups: undefined ]

console.log(s.replace("hello","hii"));//Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
--------------------------------------
hii Node

console.log(s.search("Node"));//Searches a string for a specified value, or regular expression, and returns the position of the match
------------------------------
6

console.log(s.slice(0,4));//Extracts a part of a string and returns a new string
--------------------------
hell

console.log(s.toUpperCase());//converts string into uppercase
------------------------------
HELLO NODE

console.log(s.toLowerCase());//converts string into lowercase
------------------------------
hello node

console.log(s.substring(0,3));//Extracts the characters from a string, between two specified indices
-------------------------------
hel

console.log(s.trim());//Removes whitespace from both ends of a string
------------------------
hello Node

