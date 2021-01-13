function FizzBuzz(value1, value2) {
  let returnArray = [];
  returnArray[0] = "";
  for (let loop = 1; loop <= 100; loop++) {
    returnArray[loop] =
      (loop % value1 == 0 ? "Fizz" : "") + (loop % value2 == 0 ? "Buzz" : "") ||
      loop;
  }
  return returnArray;
}

function buzzTable() {
  let output = [];
  let headTemplate = document.getElementById("fizzheader");
  let rowTemplate = document.getElementById("fizzbuzz-row-items");

  let templateHTML = rowTemplate.innerHTML;
  let resultsHTML = headTemplate.innerHTML;

  let val1 = parseInt(document.getElementById("FizzValue").value);
  let val2 = parseInt(document.getElementById("BuzzValue").value);

  output = FizzBuzz(val1, val2);
  for (loop = 1; loop < output.length; loop += 5) {
    resultsHTML += templateHTML
      .replace("{{val1}}", output[loop])
      .replace("{{val2}}", output[loop + 1])
      .replace("{{val3}}", output[loop + 2])
      .replace("{{val4}}", output[loop + 3])
      .replace("{{val5}}", output[loop + 4]);
  }
  document.getElementById("results").innerHTML = resultsHTML;
}

// The premise of FizzBuzz is to take 2 user inputs and find all of their multiples between 1 and 100
// If the loop count is a multiple of input 1 it is a Fizz case
// If the loop count is a multiple of 2 it is a Buzz case
// If the loop count is a multiple of both inputs it is a FizzBuzz case
// The order you test is very important
