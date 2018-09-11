//1. Concatenation works with strings only 
//Interpolation uses a string but wants to add something in the string
// aka the name of a constant or variable as a placeholder in a longer string

// var displayNameByConcatenation : String {
// 	return value1 + value2
// }
// var displayNameByInterpolation: String {
// 	return "\(vallue1)-\(value2)"
// }

//2. DRY = Don't Repeat Yourself. It is good to practice so that 
//you keep your code clean and simple so it's easy to maintain over time

//3.Declaring a variable identifies a type and a name with the variable
//Defining a variable will assign a value to it

//4. The difference between let and const is that you cannot reassign the value
//of a const, but you can do so with let. 

//5. Parent directory refers to a directory above another directory.Every directory, 
//except the root directory, lies beneath another directory. The higher 
//directory is called the parent directory, and the lower directory is 
//called a subdirectory. 

//6. man or help command

//7.hit tab to coplete the word in terminal to make it go faster

// Part 2: Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin'; 



console.log(a < b)
console.log(c > d)
console.log('Name' == 'Name')
console.log(a + b == c)
console.log(a * a == d)
console.log(e == 'Kevin')
console.log(48 == '48')

//Part 3: While Loops
//1) is the infinite loop
//2) is not an infinite loop because the variable is set to false so it will only
//run once while the first one will run infinitely. 

//3) Reading Code

//setting the letter variable to string "A"
let letters = "A";
//setting the i variable to 0
let i = 0;

//the variable i will print 1 to 20 times and stop at 20 and then it will print 20 A's
while (i < 20) {
	letters += "A";
	i++
}

console.log(letters);

//Part 4: Loops!

//1) for loops
//for loops count to a certain number span to which i can define. 
//while loops evaluate an expression and stop. they both execute code within
//the time until they are told not to.

//2) Basic for loop

for (let i = 0; i <= 999; i++) {
	console.log(i);
}

//3) The mechanics of a for loop

//the first part of the control statement: let i = 0
//the first part of the control statement: i <= 100;
//the first part of the control statement: i++

//4) for loop in reverse

for (let i = 999; i >= 0; i--) {
	console.log(i);
}

//5) More counting

for (let i = 1; i <= 10; i++) {
	console.log(`The value of i is: ${i} of 10`)
}










