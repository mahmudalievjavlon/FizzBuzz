const elResult = document.querySelector(".result");
const elInput = document.querySelector("#age");
const elForm = document.querySelector(".form");

elForm.addEventListener("submit", function (evt){
    evt.preventDefault();
    elResult.textContent = "";

    const value = Number(elInput.value);

    if (value % 3 === 0 && value % 5 === 0) {
        elResult.textContent = "FizzBuzz";
    } else if (value % 5 === 0) {
        elResult.textContent = "Buzz";
    } else if (value % 3 === 0) {
        elResult.textContent = "Fizz";
    } else {
        elResult.textContent = value;
    }
})