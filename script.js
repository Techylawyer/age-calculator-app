const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

const dayOutput = document.getElementById('dd');
const monthOutput = document.getElementById('mm');
const yearOutput = document.getElementById('yy');

const dayError = document.getElementById('error-day');
const monthError = document.getElementById('error-month');
const yearError = document.getElementById('error-year');

const dayLabel = document.getElementById('label-day');
const monthLabel = document.getElementById('label-month');
const yearLabel = document.getElementById('label-year');

const answer = document.querySelector('button');

answer.addEventListener('click', validateDate)

const date = new Date();

let currentDay = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();


function validateDate() {
  dayError.innerText = ''
  monthError.innerText = ''
  yearError.innerText = ''

  if (yearInput.value == "" && monthInput.value == "" && dayInput.value == ""){
    yearError.innerText = "This field is required";
    monthError.innerText = "This field is required";
    dayError.innerText = "This field is required";
    dayError.style.color = "hsl(0, 100%, 67%)";
    monthError.style.color = "hsl(0, 100%, 67%)";
    yearError.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayLabel.style.color = "hsl(0, 100%, 67%)";
    monthLabel.style.color = "hsl(0, 100%, 67%)";
    yearLabel.style.color = "hsl(0, 100%, 67%)";
    
  } else if (yearInput.value > currentYear && (monthInput.value < 1 || monthInput.value > 12) && (dayInput.value < 1 || dayInput.value > 31)) {
    yearError.innerText = "Must be in the past";
    monthError.innerText = "Must be a valid month";
    dayError.innerText = "Must be a valid day";
    dayError.style.color = "hsl(0, 100%, 67%)";
    monthError.style.color = "hsl(0, 100%, 67%)";
    yearError.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayLabel.style.color = "hsl(0, 100%, 67%)";
    monthLabel.style.color = "hsl(0, 100%, 67%)";
    yearLabel.style.color = "hsl(0, 100%, 67%)";

  }else if (yearInput.value > currentYear) {
    yearError.innerText = "Must be in the past";
    yearError.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayLabel.style.color = "hsl(0, 100%, 67%)";
    monthLabel.style.color = "hsl(0, 100%, 67%)";
    yearLabel.style.color = "hsl(0, 100%, 67%)";

  } else if (monthInput.value < 1 || monthInput.value > 12) {
    monthError.innerText = "Must be a valid month";
    monthError.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayLabel.style.color = "hsl(0, 100%, 67%)";
    monthLabel.style.color = "hsl(0, 100%, 67%)";
    yearLabel.style.color = "hsl(0, 100%, 67%)";

   } else if (dayInput.value > 30 && (monthInput.value == 4  || monthInput.value == 6 || monthInput.value == 9 || monthInput.value == 11)) {
    dayError.innerText = "Must be a valid date";
    dayError.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayLabel.style.color = "hsl(0, 100%, 67%)";
    monthLabel.style.color = "hsl(0, 100%, 67%)";
    yearLabel.style.color = "hsl(0, 100%, 67%)";

  } else if (dayInput.value > 28 && monthInput.value == 2) {
    dayError.innerText = "Must be a valid date";
    dayError.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayLabel.style.color = "hsl(0, 100%, 67%)";
    monthLabel.style.color = "hsl(0, 100%, 67%)";
    yearLabel.style.color = "hsl(0, 100%, 67%)";

  }else if (dayInput.value < 1 || dayInput.value > 31){
    dayError.innerText = "Must be a valid date";
    dayError.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayLabel.style.color = "hsl(0, 100%, 67%)";
    monthLabel.style.color = "hsl(0, 100%, 67%)";
    yearLabel.style.color = "hsl(0, 100%, 67%)";

  }else  {
    if (currentDay < dayInput.value){
      dayOutput.innerText = ((currentDay - dayInput.value) + 30)
    } if(currentDay > dayInput.value){
      dayOutput.innerText = currentDay - dayInput.value
    } if(currentMonth > monthInput.value){
       monthOutput.innerText =  (currentMonth - monthInput.value)
    } if(currentMonth < monthInput.value) {
    monthOutput.innerText = ((currentMonth - monthInput.value) + 12)
    currentYear = currentYear - 1  
    } 

    yearOutput.innerText = (currentYear - yearInput.value)
       }

    }