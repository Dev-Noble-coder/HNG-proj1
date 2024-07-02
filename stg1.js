const hamburger = document.querySelector(".open");
const sidebar = document.querySelector('.header')
console.log(sidebar.classList)
hamburger.addEventListener('click', () =>{
    if(sidebar.classList.contains("display")){
        sidebar.classList.remove('display')
    }
    else{
        sidebar.classList.add('display')
    }
})
sidebar.addEventListener('click', () => {
    sidebar.classList.remove('display')
})


function updateTime() {
   
    let currentTime = new Date();
    let currentTimeMillis = currentTime.getTime();
    let currentUTCTime = currentTime.toUTCString();
    
    console.log("Current time in milliseconds: " + currentTimeMillis);
    console.log("Current time in UTC: " + currentUTCTime);
    displayDate = String(currentTime).slice(15,29)
    document.getElementById('time').innerHTML= displayDate
 }
 
 setInterval(updateTime, 1000);

 
 const date = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDayOfWeek = daysOfWeek[date.getDay()];
console.log(currentDayOfWeek)
document.getElementById('day').innerHTML = currentDayOfWeek
