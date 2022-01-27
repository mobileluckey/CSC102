function StartTheCountdown(){
    // This function will start the countdown

    // declare my varables
    var countdown = 10;  //This will be displayed on the screen for the user to see

    var timeout = 10000;  //actual time in milliseconds
 //                         1000 milliseconds equals 1 second
// Blast Off!!    
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = "Blast Off !!!";
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 0
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 1
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 2
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 3
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 4  
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 5    
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 6     
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 7
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 8
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;

// 9
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;
// 10
 setTimeout(() => {
     document.getElementById("CountdownDisplay").innerHTML = countdown;
     countdown = countdown - 1;
 }, timeout)
 timeout=timeout-1000;
}


function simCount() {
    var currentTime = 10;
    /*  for (initial condition, ending condition - stop when not true, what to 
after each loop) i++ same as  i = i+1*/
    for (var i = 1; i < 12; i++) {
            //Counts down from 10 to 0
        setTimeout(function () { 
              //Displays a sentence next to the counter
            document.getElementById("CountdownDisplay").innerHTML = "The time left is " + currentTime;
            currentTime = currentTime - 1;
        }, 1000 * i);
    }
}


function bestCountdown() {
    var currTime = 10;
    for (var i = 1; i <= 12; i++) { //for loop to count down to include a zero.

        if (i == 12) {
            setTimeout(function () { //When timer reaches zero it displays "Blast..."
                document.getElementById("CountdownDisplay").innerHTML = 
"Blast Off!!!...Houston, we have Lift Off!!"; //Printed on screen when timer reaches 0
            }, 1000 * i);

        } else if (i > 6) {
            setTimeout(function () { //Displays the warning when timer is below 6
                document.getElementById("CountdownDisplay").innerHTML =
                    "WARNING!!! Less than half way to launch. Time left is  " + currTime;
                currTime = currTime - 1;                
            }, 1000 * i);
            
        } else {
            setTimeout(function () { //Displays "T - " while timer is above 6
                document.getElementById("CountdownDisplay").innerHTML = "T minus " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}


function simpleDo() {
    var currTime = 10;
    var i = 1;
    do {
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "the time left is" + currTime;
            currTime = currTime - 1;
        }, 1000 * i);
        i += 1;
    } while (i < 12);
}





function whileCount() {
    var currTime = 10;
    var i = 1;
    while (i < 12) {
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = 
"Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = 
                "Warning Less than half way to launch, time left = " + 
currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
}