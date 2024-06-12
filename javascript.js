let first = prompt("Enter a number: ");
let second = prompt("Enter another number: ");
let str = prompt("Enter a string: ");

let result1 = add7(first);
console.log(result1);
let result2 = multiply(first, second);
console.log(result2);
let result3 = capitalize(str);
console.log(result3);
let result4 = lastLetter(str);
console.log(result4);

function add7(num1) {
  return Number(num1) + 7;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function capitalize(text) {
  return text.at(0).toUpperCase() + text.slice(1).toLowerCase();
}

function lastLetter(text) {
  return text.at(-1);
}

/*let ask = (question, yes, no) => (confirm(question) ? yes : no);

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

/*let x = prompt("Enter a number: ");

if (isNaN(x)) {
  alert("Error: x must be a number"); //check x input type
} else {
  let n = prompt("To what power?: ");
  if (n < 1 || n % 1 !== 0 || isNaN(n)) {
    //check n is pos int
    alert("Error: n must be a positive integer");
  } else {
    alert(pow(x, n));
  }
}

function pow(x, n) {
  let powNum = 1,
    workNum = x;
  while (powNum < n) {
    workNum *= x;
    ++powNum;
  }
  return workNum;
}

/* function min(a,b) {
    return (a < b) ? a : b;
}


/*function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

//ternary variant
function checkAge (age) {
    return (age > 18) ? true : return confirm('Did parents allow you?');
}

// OR variant
function checkAge (age) {
    return (age > 18) || confirm('Did parents allow you?');
}
*/
