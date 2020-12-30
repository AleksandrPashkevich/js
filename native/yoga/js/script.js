window.addEventListener('DOMContentLoaded', function(){

    'use strict'

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContant = document.querySelectorAll('.info-tabcontent');

    function hideTabContant(a){
        for(let i = a; i<tabContant.length; i++){
            tabContant[i].classList.remove('show');
            tabContant[i].classList.add('hide');
        }
    }

    hideTabContant(1);

    function showTabContant(b){
        if(tabContant[b].classList.contains('hide')){
            tabContant[b].classList.remove('hide');
            tabContant[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;

        if(target && target.classList.contains('info-header-tab')){
            for(let i=0; i<tab.length; i++){
                if(target === tab[i]){
                    hideTabContant(0);
                    showTabContant(i);
                }
            }
        }
    });

    let deadline = '2020-08-01';

    function getTimeRemaining (endTime){
        let timeDifference = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor(timeDifference / 1000 % 60),
            mins = Math.floor(timeDifference/1000 / 60 %60),
            hours = Math.floor(timeDifference / (1000 * 60 * 60));

            return{
                'total': timeDifference,
                'hours': hours,
                'minutes': mins,
                'seckonds': seconds
            };
            
    }

    function setClock(id, endTime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
              timeInterval = setInterval(updateClock, 1000);
        

        function updateClock(){
            let t = getTimeRemaining(endTime);
            hours.textContent = + t.hours;
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