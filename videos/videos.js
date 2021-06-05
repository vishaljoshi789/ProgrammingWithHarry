let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let videoplayer;
// if (window.innerWidth < 800) {
//     width = window.innerWidth;
// } else {
//     width = 1000;
// }

function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoplayer', {
        // height: '500',
        // width: `${width}`,
        videoId: document.getElementById("videoplayer").className,
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}
var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}


let title;