
// This uses an anonymous function to call a named function
document.getElementById("fizzbutton").addEventListener("click", function(){
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    if(num1 > num2) {
        alert("Number 1 must be less than Number 2");
    }

    runTheNumbers(num1, num2)
});

// This is the named function, it will only run when something else calls it
function runTheNumbers(num1, num2){
    for (let loop =num1; loop <= num2; loop++) {
        document.getElementById("result").innerText += loop;
    }    
}

// The premise of FizzBuzz is to take 2 user inputs and find all of their multiples between 1 and 100
// If the loop count is a multiple of input 1 it is a Fizz case
// If the loop count is a multiple of 2 it is a Buzz case
// If the loop count is a multiple of both inputs it is a FizzBuzz case
// The order you test is very important