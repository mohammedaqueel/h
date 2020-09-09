var date = new Date();
            
var startDate = new Date("Sep 09, 2020 08:20:00");
            
var endDate = new Date("Oct 03, 2020 08:20:00");

var totalDays = endDate.getTime() - startDate.getTime();
totalDays = Math.floor( totalDays / (1000 * 60 * 60 * 24));

var daysPassed = date.getTime() - startDate.getTime();
daysPassed = Math.floor( daysPassed / (1000 * 60 * 60 * 24));

var daysLeft = endDate.getTime() - date.getTime();
daysLeft = Math.floor( daysLeft / (1000 * 60 * 60 * 24) + 1);

var percentage = Math.floor((daysPassed / totalDays) * 100);

document.querySelector(".percentage").innerHTML = percentage+"%";
document.querySelector(".passed-days").innerHTML = daysPassed+" Days Passed of "+totalDays+" Days";
document.querySelector(".left-days").innerHTML = daysLeft+" Days Left";
document.querySelector(".bar").style.width = percentage+"%";
document.querySelector(".today").innerHTML = date;
document.querySelector(".startDate").innerHTML = startDate;
document.querySelector(".endDate").innerHTML = endDate;
