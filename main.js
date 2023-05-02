//date now

 let nowdate=new Date();
let year = nowdate.getFullYear();
 let nowday=nowdate.getDate();

// let month = nowdate.getMonth()+1;
// let newday=document.getElementById('day');
// let newyear=document.getElementById('year');
// let newmonth = document.getElementById("month");
// function requir(){
// return document.getElementsByTagName("input").length === 0
//   ? (document.getElementById("error").innerHTML = "filed is required")
//   : "";
// }
//input

let input_day = document.querySelector(".input-day");
// console.log(input_day)
let input_month = document.querySelector(".input-month");
let input_year = document.querySelector(".input-year");
let isvalid=false;
//output
let output_day = document.querySelector(".output-day");
let output_month = document.querySelector(".output-month");
let output_year = document.querySelector(".output-year");
//error
let errorday=document.querySelector('.error-day');
let erroryear=document.querySelector('.error-year');
let errormonth = document.querySelector(".error-month");
//button
let button=document.querySelector('.btn');
button.addEventListener('click',calcage)
//day
input_day.addEventListener('input',function(){

  console.log(+input_day.value)
  if(+input_day.value.length === 0){
isvalid=false
errorday.textContent='filed is required'
isvalid=false
return  
}
else{
  errorday.textContent = "";
  
}
if(input_day.value>31){
  isvalid=false
  errorday.textContent = "must be less than 31";
 isvalid=false
   return;
}
else{
    errorday.textContent = "";

  }
if(input_day.value<=0){
   errorday.textContent = "must be more than 0";
   return;
}
else{
 errorday.textContent = "";
 return;  
}
})
//year
input_year.addEventListener("input", function () {
  console.log(+input_year.value);
  isvalid = false;
  if (+input_year.value.length === 0) {
    erroryear.textContent = "filed is required";
isvalid = false;
    return;
  } else {
    erroryear.textContent = "";
  }
  if (input_year.value > year) {
    isvalid = false;
    erroryear.textContent = "must be  in the past";
   isvalid = false;
    return;
  } else {
    erroryear.textContent = "";
  }
  if (input_year.value <= 0) {
    erroryear.textContent = "must be more than 0";
    return;
  } else {
    erroryear.textContent = "";
    return;
  }
});
//month
input_month.addEventListener("input", function () {
  console.log(+input_year.value);
  isvalid = false;
  if (+input_month.value.length === 0) {
    errormonth.textContent = "filed is required";
isvalid = false;
    return;
  } else {
    errormonth.textContent = "";
  }
  if (input_month.value > 12) {
    isvalid = false;
    errormonth.textContent = "must be  less than 12 ";
    isvalid = false;
    return;
  } else {
    errormonth.textContent = "";
  }
  if (input_month.value <= 0) {
    isvalid = false;
    errormonth.textContent = "must be more than 0";
    isvalid=false
    return;

  } else {
    errormonth.textContent = "";
    return;
  }
});



function calcage(){
  if(true){
  let  birthday=`${input_month.value}/${input_day.value}/${input_year.value}`
let newbirthday=new Date(birthday);
console.log(newbirthday)
let diff=new Date()-newbirthday;
console.log(diff)
let agedate=new Date(diff)
console.log(agedate)
let ageyeaar=agedate.getFullYear()-1970;
console.log(ageyeaar)
let agemont=agedate.getUTCMonth()
let ageday=agedate.getUTCDay()-1;
//display
output_year.innerHTML=ageyeaar;
output_month.innerHTML=agemont;
output_day.innerHTML=ageday
}
  else{
    alert('is not valid')
  }
}


