function timer() {
    let deadline = '2021-07-15'; 
    setClock('timer', deadline);

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), 
        seconds = Math.floor((t/1000) % 60), 
        minutes = Math.floor((t/1000/60) % 60), 
        hours = Math.floor((t/(1000*60*60))); 
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
           

        function updateClock() {
            let t = getTimeRemaining(endtime);
            
            function addZero(el, num) {
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
}

module.exports = timer;