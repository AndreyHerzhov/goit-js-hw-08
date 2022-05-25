
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function(currentTime ) {
    localStorage.setItem("videoplayer-current-time", currentTime.seconds)
});
 
const savedData = localStorage.getItem("videoplayer-current-time")

player.setCurrentTime(savedData).then(function(seconds) {
    seconds = savedData
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});