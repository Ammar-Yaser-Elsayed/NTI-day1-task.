//1. Create an array of 10 numbers (it can include both positive and negative values). 
var num =[1,-2,-3,4,5,-6,7,8,9,10]
//2. Use a for loop to iterate through the array and calculate the sum of all positive numbers. 
var resu=0
var allNum=0

for (let i = 0; i <num.length; i++) {
    allNum+=num[i]
    if(num[i]<0){
        continue;//Use continue to skip any negative values during the iteration.
    }
    resu +=num[i] 
  
}
//- 4. Use console.log() to display:
// - The sum of positive numbers.

console.log(resu);

//b. The sum of all numbers in the array (including both positive and negative). 

console.log(allNum);
/////////////////////////////////////////////////////////////

// Task2: 
// 1. Create an object representing a student with the following properties:
// a. name (String). 
// b. age (Number). 
// c. grade (String). 
// d. isGraduated (Boolean).

let student={
    name:"amr",
    age:24,
    garde:"third",
    isGraduted:false,
}

//Display the student's name and age using console.log().
console.log(student.name);
console.log(student.age);
//3. Change the grade of the student to a new value (e.g., "A"). 
student.garde="a"
console.log(student);
//4. Use the Object.keys() method to display all the properties of the object. 
var show=Object.keys(student)
console.log(show);
//5. Use the Object.values() method to display all the values of the object. 
var value=Object.values(student)
console.log(value);

//6. Add a new property called email to the object and set it to an email address. 
student.email="ahmedmohamed@gmail.com"
console.log(student);

//7. Use the delete keyword to remove the isGraduated property from the object and display the updated object
delete student.isGraduted
console.log(student);




/////////////
//  Your mission is to design and implement a small game using JavaScript. The
//  computer will secretly select a number, and the player must try to find it. This task
//  will test your ability to use conditional statements and loops effectively.
//  Requirements:
//  The program must secretly choose a number between 1 and 50.
//  The player should be able to attempt multiple guesses until they find the correct
//  number.
//  For every guess, the program must clearly inform the player if they are correct
//  or not.
//  The program must keep track of the number of attempts made by the player.
//  Once the player succeeds, the program should announce the result in a clear
//  and engaging way.
//  Note: Focus on writing clean, readable code and make sure your game is
//  interactive and user-friendly

const minnumber = 1;
const maxnumber = 50;
const answer = Math.floor (Math.random() * (maxnumber - minnumber +1));
console.log(answer)

let attemps = 0;
let guess;
let running = true;


while(running){
    guess = window.prompt(`guess the number between ${minnumber} and ${maxnumber}`);
    
    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }else if(guess < minnumber || guess > maxnumber){
        window.alert("please enter a valid number");
    }else {
        attemps ++;
        if(guess > answer){
            window.alert("number is wrong, Try again");
        }else if(guess < answer){
            window.alert("number is wrong, Try again");
        }else {
            window.alert(`correct ! the answer is ${answer}. It took you ${attemps} attemps.`);
            running = false;
           
        }
}
}

result = document.getElementById("result");
result.innerHTML = `correct ! the answer is ${answer}. It took you ${attemps} attemps.`;
    