var interval;
function analogtime(){
 
let datetime=  new Date();
let hours=  datetime.getHours();
let minutes= datetime.getMinutes();
let seconds= datetime.getSeconds();
let am_or_pm= document.getElementById("am_or_pm");

if(hours>=12){
  am_or_pm.innerHTML="PM"; 
}
else{
am_or_pm.innerHTML="AM";
}
if(hours>12){
  hours= hours  - 12;
  
 } 
 document.getElementById("hours").innerHTML=hours;
 if(hours<10){
  document.getElementById("hours").innerHTML="0"+ hours;
 }
document.getElementById("minutes").innerHTML=minutes;
if(minutes<10){
document.getElementById("minutes").innerHTML="0"+ minutes;
}
document.getElementById("seconds").innerHTML=seconds;
if(seconds<10){
  document.getElementById("seconds").innerHTML="0"+seconds;
}


}
  btnstart.onclick=function(){ 
   
  interval= setInterval(analogtime,1000);
     
    };
    function stop(){
     
        clearInterval(interval);
      };







 
  

