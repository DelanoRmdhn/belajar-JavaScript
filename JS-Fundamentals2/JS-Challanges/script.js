/* 
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method

3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 
*/

//1 dan 2
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  bmi: function () {
    this.markBmi = this.mass / (this.height * this.height);
    return this.markBmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  bmi: function () {
    this.johnBmi = this.mass / (this.height * this.height);
    return this.johnBmi;
  },
};

/*
note : untuk menambahkan properti dari dalam function kita bisa menggunakan this. untuk contohnya ada pada baris 28 dan 38  
*/

console.log(mark);
console.log(john);

//3
console.log(mark.bmi(), john.bmi());
const sentences =
  mark.bmi > john.bmi
    ? `${mark.fullName} BMI (${mark.bmi()}) is higher than ${
        john.fullName
      } BMI (${john.bmi()})`
    : `${john.fullName} BMI (${john.bmi()}) is higher than ${
        mark.fullName
      } BMI (${mark.bmi()})`;

console.log(sentences);
