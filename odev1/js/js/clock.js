
let myName=document.querySelector("#myName")
let namee=prompt("adınız")
if(namee){
    myName.innerHTML=`${namee}`

}
else{
    myName.innerHTML=`NULL`
}
function showTime(){
    var date = new Date();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();
    var day=date.getDate();
    var month=date.getMonth();
    var year=date.getFullYear();
    if(hour<10){
        hour="0"+hour;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(second<10){
        second="0"+second;
    }
    var tm=document.querySelector("#myClock")
    tm.innerHTML=`${hour}:${minute}:${second} ${day}:${month+1}:${year}`
    setTimeout(showTime,1000);}
showTime();