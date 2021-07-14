window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for( let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadline = '2021-07-15'; //дата на яку наставлений таймер
    setClock('timer', deadline); //'timer' - це назва id елемента (батьківського) в якому знаходяться дочірні елементи із значеннями таймеру

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), //скільки секунд залишилось
        seconds = Math.floor((t/1000) % 60), // остаток секунд без хвилин і годин
        minutes = Math.floor((t/1000/60) % 60), // остаток хвилин без годин
        hours = Math.floor((t/(1000*60*60))); // остаток годин
        return {
            'total' : t,
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
           

            // hours.textContent = t.hours;
            // minutes.textContent = t.minutes;
            // seconds.textContent = t.seconds;
        

        function updateClock() {
            let t = getTimeRemaining(endtime);
            // addZero.apply(t);
            function addZero(el, num) {
                // console.log(this);
                if(num <= 9) {
                    el.textContent = '0' + num;
                } else {
                    el.textContent = num;
                }
            }
            addZero(seconds, t.seconds);
            addZero(minutes, t.minutes);
            addZero(hours, t.hours);

              
            
            if (t.total <=0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            } 
        }
    }

    //Modal Window
    let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';

    });

    //3.15
    class Options {
        constructor (height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        newDiv() {
            let div = document.createElement('div'),
                param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
            document.body.appendChild(div);
    
            div.textContent = 'Любой текст';
            div.style.cssText = param;
        }
    }
    
    let obj = new Options (100, 100, 'red', 15, 'start');
    obj.newDiv();
});








