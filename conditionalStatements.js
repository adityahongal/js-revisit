let age = 18;
let name = "Jan"

if (age >= 18) {
    if (name === "John") {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote, Name not matching.");
    }
}

else {
    console.log("You are not eligible to vote.");
}

// else if

let a = 10;
let b = 20;

if (a > b) {
    console.log("a is greater than b");
}
else if (b > a) {
    console.log("b is greater than a");
}
else {
    console.log("a is equal to b");
}

// switch statements

let grade = "X";

console.log("Grade is: " + grade);

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    default:
        console.log("Failed");
        break;
}