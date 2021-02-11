
function sayHello () {
    alert('Hello World');
}

//Get Starting Date
let startDay = document.getElementById("arrivalDate").addEventListener("change", function() {
                    var input = this.value;
                    console.log(input);
                    });
let startTime =  document.getElementById("arrivalTime").value;

//Get Pick Up Date or Estimated Pick Up Date

let pickUpDate = document.getElementById("outDate").addEventListener("change", function() {
                    var input = this.value;
                    console.log(input);
                    });
let pickUpTime = document.getElementById("outTime").value;


//Variables to determine cost calculations

let laborHours = document.getElementById("laborHoursSelect").value;
let laborFees = document.getElementById("laborHoursSelect").value;


function calculateTowingFees () {
    let begin = startDay;
    let end = pickUpDate;
    console.log(end - begin);
}