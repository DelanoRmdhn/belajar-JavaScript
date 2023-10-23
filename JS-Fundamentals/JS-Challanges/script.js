/* 
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.


TEST DATA:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//JAWAB

// 1)
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 126) / 3;

console.log(scoreDolphins, scoreKoalas);

//2)
if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy!");
} else if (scoreKoalas >= scoreDolphins) {
  console.log("Koalas win the trophy!");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy!");
}

//3) BONUS 1
if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy!");
} else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy!");
}
//4) BONUS 2
else if (scoreDolphins && scoreKoalas >= 100 && scoreDolphins === scoreKoalas) {
  console.log("Both teams Win the trophy!");
} else {
  console.log("Nobody wins the trophy!");
}
