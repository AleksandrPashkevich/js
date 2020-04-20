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

});