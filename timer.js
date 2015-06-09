(function($) {
    $(document).ready(function() {
        // Sets a timer
        // @param timeleft - amount left in seconds
        function setTimer(timeleft) {
            //get the timer to timeleft seconds from now
            var end_time = new Date(Date.now() + timeleft*1000);

            var timer = setInterval(function() {
                //find time remaining
                var diff = end_time.getTime() - Date.now();
                //split it up into minutes and seconds
                var min = Math.floor(diff / 60 / 1000);
                var sec = Math.round(diff / 1000 % 60);

                //if it's zero set timers to 0 and stop counting down
                if(diff < 0) {
                    diff = 0;
                    clearInterval(timer);
                    window.location = 'node/1'
                }
                console.log(end_time + " " + diff);
                console.log(Math.round(diff / 1000));
                $("#drupaltimer").text(sec);

            }, 1000);
        }
        setTimer(20);
    });
}(jQuery));
