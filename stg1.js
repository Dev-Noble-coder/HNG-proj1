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




function updateTimeAndDay() {
  const now = new Date();
  const isoString = now.toISOString();
  const utcTime = isoString.slice(11, 19);
  const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

   document.getElementById('time').textContent = ucTime;
  
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 60000);

 
 const date = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDayOfWeek = daysOfWeek[date.getDay()];
console.log(currentDayOfWeek)
document.getElementById('day').innerHTML = currentDayOfWeek
