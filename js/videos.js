// youtube displaying youtube video
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let videoplayer;

function onYouTubeIframeAPIReady() {
    document.getElementById("videotitle").innerText = localStorage.getItem("videotitle")
    player = new YT.Player('videoplayer', {
        videoId: localStorage.getItem("videoid"),
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




// functions for using next and previous button in youtube video
category = JSON.parse(localStorage.getItem('1'))
videos = JSON.parse(category[Object.keys(category)[0]])
title = localStorage.getItem("videotitle")
current_video_index = Object.keys(videos).indexOf(title);
if (current_video_index === 0) {
    document.getElementById("previousbtn").setAttribute("disable", "true");
    document.getElementById("previousbtn").setAttribute("style", "background-color:grey;")
} else if (current_video_index === (Object.keys(videos).length - 1)) {
    document.getElementById("nextbtn").setAttribute("disable", "true");
    document.getElementById("nextbtn").setAttribute("style", "background-color:grey;")
}
// previous button function 
previousbtnclicked = () => {

        if (current_video_index > 0) {
            previous_video_id = videos[Object.keys(videos)[current_video_index - 1]]["videoid"]
            previos_video_title = Object.keys(videos)[current_video_index - 1]
            localStorage.removeItem("videoid");
            localStorage.setItem("videoid", previous_video_id);
            localStorage.removeItem("videotitle");
            localStorage.setItem("videotitle", previos_video_title);

            onYouTubeIframeAPIReady()
            location.reload()
        }

    }
    // next button function 
nextbtnclicked = () => {
    if (current_video_index < (Object.keys(videos).length - 1)) {
        next_video_id = videos[Object.keys(videos)[current_video_index + 1]]["videoid"]
        next_video_title = Object.keys(videos)[current_video_index + 1]
        localStorage.removeItem("videoid");
        localStorage.setItem("videoid", next_video_id);
        localStorage.removeItem("videotitle");
        localStorage.setItem("videotitle", next_video_title);

        onYouTubeIframeAPIReady()
        location.reload()
    }
}


// function to take user to source code of this video 
go_to_source_code_btn_clicked = () => {
    let sourcecodelink = '../../blog/sourcecode/' + localStorage.getItem("videotitle") + '.html'
    document.getElementById("sourcecodelink").setAttribute("href", sourcecodelink)
}