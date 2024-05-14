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
