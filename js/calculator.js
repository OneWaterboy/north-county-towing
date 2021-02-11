
function sayHello () {
    alert('Hello World');
}

//Get Starting Date
let startDay = document.getElementById("arrivalDate").addEventListener("change", function() {
                    var input = this.value;
                    console.log(input);
                    });
let startTime =  document.getElementById("arrivalTime").addEventListener("change", function() {
                    var input = this.value;
                    console.log(input);
                    });

//Get Pick Up Date or Estimated Pick Up Date

let pickUpDate = document.getElementById("outDate").addEventListener("change", function() {
                    var input = this.value;
                    console.log(input);
                    });
let pickUpTime = document.getElementById("outTime").addEventListener("change", function() {
                    var input = this.value;
                    console.log(input);
                    });


//Determine Cost Based off of fee rates

let laborRate = document.getElementById("laborCharges").addEventListener("change", function() {
                    var input = this.value;
                    return input;
                    });
let laborHours = document.getElementById("laborHoursSelect").addEventListener("change", function() {
                    var input = this.value;
                    return input;
                    });



function calculateTowingFees () {
    let begin = startDay + startTime;
    let end = pickUpDate + pickUpTime;  // Need To Figure out how to build out a date object and the n subtract to get sotrage hours
    let impoundCharge = parseInt(laborRate) * parseInt(laborHours);
    console.log(begin);
    console.log(end);
    console.log(impoundCharge);
}