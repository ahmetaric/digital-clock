setInterval(() => {
    const time = document.querySelector(".time");
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let dayNight = "AM"


    if( hour > 12){
        hour = hour - 12;
        dayNight = "PM";

    }

    if(hour < 10){
        hour = "0" + hour;
    }

    if(second < 10){
        second = "0" + second;
    }

    if(minute < 10){
        minute = "0" + minute;
    }

   time.innerHTML = `${hour}:${minute}:${second} ${dayNight}`; 
    
})  
   
    
   
