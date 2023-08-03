setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();


    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;



    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec;
    //am_pm;

    // Displaying the time
    document.querySelector(".clock").innerHTML = currentTime;

}

function showDate() {
    let time = new Date();
    let date = time.getDate();
    let gotday = time.getDay();
    let year = time.getFullYear();
    let gotmonth = time.getMonth();
    let day; let month;

    switch(gotmonth){
        case 0: month = "January"; break;
        case 1: month = "February"; break;
        case 2: month = "March"; break;
        case 3: month = "April"; break;
        case 4: month = "May"; break;
        case 5: month = "June"; break;
        case 6: month = "July"; break;
        case 7: month = "August"; break;
        case 8: month = "September"; break;
        case 9: month = "October"; break;
        case 10: month = "November"; break;
        case 11: month = "December"; break;    
    }   
    month = month.toUpperCase();

    switch (gotday) {
        case 0:
            day = "Sun";
            break;
        case 1:
            day = "Mon";
            break;
        case 2:
            day = "Tues";
            break;
        case 3:
            day = "Wednes";
            break;
        case 4:
            day = "Thurs";
            break;
        case 5:
            day = "fri";
            break;
        case 6:
            day = "satur";
            break;
    }
    day = day + "day";
    day = day.toUpperCase();
    let currentDate = date + " " + month + " " + year + " " + day;

    document.querySelector(".date").innerHTML = currentDate;
}


let button = document.querySelector(".btn");
let t = 0;
button.addEventListener('click', function () {
    if (t == 0) {
        let darkobj = document.querySelectorAll(".dark");
        for (let i = 0; i < darkobj.length; i++) {
            darkobj[i].classList.add("light");
            darkobj[i].classList.remove("dark");
            
        }

        t = 1;
    }
    else {
        let darkobj = document.querySelectorAll(".light");
        for (let i = 0; i < darkobj.length; i++) {
            darkobj[i].classList.add("dark");
            darkobj[i].classList.remove("light");
            
        }
        t = 0;
    }

})


showTime();
showDate();
