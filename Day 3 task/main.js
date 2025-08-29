//======================================TASK1=======================================
//Create an array of 10 numbers (it can include both positive and negative values).
var a = [-5 , -4 , -3 , -2 , -1 , 0 , -10 , -12 , 1 , -14 , -13 , 2 , -22 , 3 , 4 , 5];

//Use a for loop to iterate through the array and calculate the sum of all positive numbers.
function sumpositivenumbers(a){
    let sum = 0;
    for(let i=0 ; i<=a.length ; i++){
        if(a[i] > 0){
            sum += a[i];
        }else if(a[i]<0){
// 3. Use continue to skip any negative values during the iteration. 

            continue;
        }
    }
    return sum
}

const result = sumpositivenumbers(a);
console.log("sum of positive number is " , result );

//display sum of all numbers
function sumallnumbers(a){
    let summ = 0;
    for(let i = 0 ; i<a.length ; i++){
        summ += a[i];
    }
    return summ;
}

const all = sumallnumbers(a);
console.log(all);

//Finally, modify the array by adding a new number at the end, and remove the first element
a.shift(-5);
a.push(33);
console.log(a);


//===========================TASK 2============================================
// Create an object representing a student with name,age,grade, and isgraduated

var student = [{name:"ammar" , age:"25" , grade:"A" , isgraduated:"true"}];

//Display the student's name and age using console.log(). 
 student.forEach(student => {
      console.log(`Name: ${student.name}, Age: ${student.age}`);
    });


//Change the grade of the student to a new value (e.g., "A"). 
function updateStudentGrade(name, newGrade) {
    if (student.name === name) {
      student.grade = newGrade;
  }else{
    console.log("student undefined");
  }
}
updateStudentGrade("ammar" , "B");
console.log(updateStudentGrade());

//Use the Object.keys() method to display all the properties of the object. 
student.forEach(obj =>{
    const properties = Object.keys(obj);
    console.log(`the properties are "${obj.name}": `, properties );
})

//Use the Object.values() method to display all the values of the object. 
student.forEach(obj =>{
    const values = Object.values(obj);
    console.log(`the values are "${obj.name}": `, values );
})

//Add a new property called email to the object and set it to an email address. 
student[0].email = "ammar@example.com";

console.log(student);

//Use the delete keyword to remove the isGraduated property from the object and display the updated object 
let studentToUpdate = student[0];
delete studentToUpdate.isgraduated;
console.log(student[0]); 




//==========================================================TASK3===============================================

let sentence = "JavaScript is fun";

// Split sentence into words
let words = sentence.split(" ");

// Print total words
console.log("Total words:", words.length);

// Print each word with its length
words.forEach(word => {
  console.log(`${word} => ${word.length} letters`);
});


//trying to make the user enter the words and the function gives the details about the words that the user entered
/*
function fun1(){
let text = document.getElementById("name");
let words = 0;
let textArray = Array.from(text);


//Words
for (let i = 0; i < textArray.length; i++){
  if (textArray[i] === " "){
    words ++;
  }
}
let details = document.getElementById("details");
details.innerHTML = `<br>total words : ${text.value} <br> total words : ${words} `;
}
*/


//=================================================================TASK4===============================================
let users = [ 
  {name: "Ali", age: 22}, 
  {name: "Sara", age: 28}, 
  {name: "Mona", age: 35}, 
  {name: "Ahmed", age: 45} 
];

//Given an array of users (objects), categorize them into age groups: 
//• "Young": age < 25 
//• "Middle": 25 <= age <= 40 
//• "Old": age > 40 
let categorized = users.reduce((groups, user) => {
  if (user.age < 25) {
    groups.Young.push(user);
  } else if (user.age <= 40) {
    groups.Middle.push(user);
  } else {
    groups.Old.push(user);
  }
  return groups;
}, { Young: [], Middle: [], Old: [] });

console.log(categorized);

//===============================================================TASK5============================================================================
/*Given an array of categories, each containing products (nested arrays), do the following: 
1. Flatten all products into a single array. 
2. Count how many times each product appears. 
3. Return an object where the keys are product names and values are their counts. */ 
let categories = [
  ["Apple", "Banana", "Orange"],
  ["Banana", "Apple", "Apple"],
  ["Orange", "Mango", "Banana"]
];

// 1. Flatten all products
let allProducts = categories.flat();

// 2 & 3. Count occurrences of each product
let productCount = allProducts.reduce((counts, product) => {
  counts[product] = (counts[product] || 0) + 1;
  return counts;
}, {});

console.log(productCount);

//====================================================================TASK6==============================================================================
// 1. Create an object representing a student
let student2 = {
  name: "Ali",
  age: 20,
  grade: "B",
  isGraduated: false
};

// 2. Display the student's name and age
console.log("Name:", student2.name);
console.log("Age:", student2.age);

// 3. Change the grade of the student to a new value (e.g., "A")
student2.grade = "A";
console.log("Updated Grade:", student2.grade);

// 4. Use Object.keys() to display all the properties of the object
console.log("Properties:", Object.keys(student2));

// 5. Use Object.values() to display all the values of the object
console.log("Values:", Object.values(student2));

// 6. Add a new property called email
student.email = "ali@example.com";
console.log("With Email:", student2);

// 7. Use delete to remove the isGraduated property
delete student2.isGraduated;
console.log("After Removing isGraduated:", student2);
