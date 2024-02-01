let countDownTime = new Date("Dec, 31, 2024 00:00:00 ").getTime();
let x = setInterval(function(){
        let now = new Date().getTime();
        let distance = countDownTime - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60)) ;
        let minutes = Math.floor((distance % (1000 * 60 * 60 )) / ( 1000 * 60 )) ;
        let seconds = Math.floor((distance % (1000 * 60)) /  1000 ) ;

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

            if(distance < 0 ){
                clearInterval(x)
                document.getElementById("days").innerHTML = "00";
                document.getElementById("hours").innerHTML = "00";
                document.getElementById("minutes").innerHTML = "00";
                document.getElementById("seconds").innerHTML = "00";

            }

                if(minutes < 9){
                    document.getElementById("minutes").innerHTML = "0" + minutes;
                }
                if(hours < 9){
                    document.getElementById("hours").innerHTML = "0" + hours;
                }
                if(seconds < 10){
                    document.getElementById("seconds").innerHTML = "0" + seconds;

                }


}, 1000)