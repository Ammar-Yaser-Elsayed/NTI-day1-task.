
//============================== TASK 1 ===================================//
/* Guess the Secret Number
 Your mission is to design and implement a small game using JavaScript. The
 computer will secretly select a number, and the player must try to find it. This task
 will test your ability to use conditional statements and loops effectively.
 Requirements:
 The program must secretly choose a number between 1 and 50.
 The player should be able to attempt multiple guesses until they find the correct
 number.
 For every guess, the program must clearly inform the player if they are correct
 or not.
 The program must keep track of the number of attempts made by the player.
 Once the player succeeds, the program should announce the result in a clear
 and engaging way.
 Note: Focus on writing clean, readable code and make sure your game is
 interactive and user-friendly */

 let secretNumber=Math.floor(Math.random()*51);
 let guess;
 let Try = 0;

 console.log(secretNumber);
 

do {

        guess = parseInt(prompt("Guess a number between 1 and 50:"));

                Try++;

        if (guess === secretNumber) {
        alert(` Correct! \nYou found the secret number in ${Try} attempts.`);
        document.getElementById("sucssce").innerHTML = 
        `Your Number Is : ${guess} <br> Number of attempts: ${Try}`;  } else 
                {
                alert(" Wrong guess, try again!"); }

} while (guess !== secretNumber);

 
 
 




















//============================== TASK 2 ===================================//

/* 
1. Create an array of 10 numbers (it can include both positive and negative values). 
2. Use a for loop to iterate through the array and calculate the sum of all positive 
numbers. 
3. Use continue to skip any negative values during the iteration. 
4. Use console.log() to display: 
a. The sum of positive numbers. 
b. The sum of all numbers in the array (including both positive and negative). 
5. Finally, modify the array by adding a new number at the end, and remove the first 
element using the 

*/

let arr=[2,4,6,8,10,-3,-5,-7,-9,-11];
let sumPositive=0;
let totalSum=0;

for (n=0 ;n<arr.length;n++){
        if (arr[n]<0){
                continue;

        }
                sumPositive  += arr[n];

};
        console.log(sumPositive );

//==========================================//
for (n=0 ;n<arr.length;n++){
           totalSum += arr[n];

};
        console.log(totalSum);


arr.push(50);
console.log(arr);
arr.shift(0);
console.log(arr);






//============================== TASK 3 ===================================//
/*1. Create an object representing a student with the following properties: 
a. name (String). 
b. age (Number). 
c. grade (String). 
d. isGraduated (Boolean). 
2. Display the student's name and age using console.log(). 
3. Change the grade of the student to a new value (e.g., "A"). 
4. Use the Object.keys() method to display all the properties of the object. 
5. Use the Object.values() method to display all the values of the object. 
6. Add a new property called email to the object and set it to an email address. 
7. Use the delete keyword to remove the isGraduated property from the object and 
display the updated object*/


let student={
        name :"ahmed" ,
        age  : 25     ,
        grade: "C"    ,
        isGraduated :true ,
}
console.log(student.name  ,  student.age);
student.grade="A";
console.log(student.grade);
console.log(Object.keys(student));
console.log(Object.values(student));
student.email="ahmed@gmail.com";
console.log(student);
delete student.isGraduated;
console.log(student);



