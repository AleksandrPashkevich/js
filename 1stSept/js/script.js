window.addEventListener('DOMContentLoaded', function(){

'use strict'

let deadline = '2020-09-01';

    function getTimeRemaining (endTime){
        let timeDifference = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor(timeDifference / 1000 % 60),
            mins = Math.floor(timeDifference/1000 / 60 %60),
            hours = Math.floor(timeDifference / 1000 /60 / 60 % 24),
            days = Math.floor(timeDifference/(1000*60*60*24));

            return{
                'total': timeDifference,
                'hours': hours,
                'minutes': mins,
                'seckonds': seconds,
                'days': days
            };
            
    }

    function setClock(id, endTime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            days = timer.querySelector('.days'),
            timeInterval = setInterval(updateClock, 1000);
              
        

        function updateClock(){
            
            let t = getTimeRemaining(endTime);
            days.textContent = t.days;
            if(t.hours >9){
            hours.textContent = + t.hours;
            } else {
                minutes.textContent = "0" + t.hours;
            }
            if (t.minutes > 9){
            minutes.textContent = t.minutes;
            } else {
                minutes.textContent = '0' + t.minutes;
            }
            if (t.seckonds > 9){
            seconds.textContent = t.seckonds;
            } else {
            seconds.textContent = '0' + t.seckonds;
            }
            console.log(t);

            if (t.total <= 0){
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }


        }

    }
    setClock('timer', deadline);
});
