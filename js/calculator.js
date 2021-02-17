



$(document).ready(function (){

    let beginDate =    $('#arrivalDate').on('change', event => {
                            var startDay = $(event.currentTarget).val();
                            console.log(startDay);
    })
});

/*
function sayHello () {
    alert('Hello World');
}

//Get Starting Date
let startDay = document.getElementById("arrivalDate").addEventListener("change", function() {
                    var input = this.value;
                    var dateInArray = input.split("-")
                    console.log(dateInArray);
                    
                    });
let startTime =  document.getElementById("arrivalTime").addEventListener("change", function() {
                    var input = this.value;
                    var timeInArray = input.split(":")
                    console.log(timeInArray);
                    return timeInArray;
                    });



console.log(startDay);


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
    let impoundCharge = Number(laborRate) * Number(laborHours);
    console.log(impoundCharge);
}

*/