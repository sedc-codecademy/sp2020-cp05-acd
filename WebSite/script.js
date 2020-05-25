/* ==========
VIDEO SECTION
*/

const videoSec = {
    prevBtn : document.getElementById("prev_btn"),
    nextBtn : document.getElementById("next_btn"),
    prevBtnXs : document.getElementById("prev_btn_xs"),
    nextBtnXs : document.getElementById("next_btn_xs"),
    prevVid : document.getElementById("prev_video"),
    midVid : document.getElementById("mid_video"),
    nextVid : document.getElementById("next_video"),
    videoList : [
        "https://www.youtube.com/embed/wmOW091P2ew",
        "https://www.youtube.com/embed/X9ivR4y03DE",
        "https://www.youtube.com/embed/wZAjVQWbMlE",
        "https://www.youtube.com/embed/UznxKiHrNx4"
    ],
    prevIterate : 0,
    midIterate : 1,
    nextIterate : 2
}

videoSec.prevVid.setAttribute("src", videoSec.videoList[videoSec.prevIterate])
videoSec.midVid.setAttribute("src", videoSec.videoList[videoSec.midIterate])
videoSec.nextVid.setAttribute("src", videoSec.videoList[videoSec.nextIterate])

function iterate(mod) {
    if (mod === "+") {
        videoSec.prevIterate++
        videoSec.midIterate++
        videoSec.nextIterate++  
        if (videoSec.prevIterate < 0 ) {
            videoSec.prevIterate = 0
        } else if (videoSec.prevIterate > videoSec.videoList.length - 1) {
            videoSec.prevIterate = 0
        }
        videoSec.prevVid.setAttribute("src", videoSec.videoList[videoSec.prevIterate])
        if (videoSec.midIterate < 0 ) {
            videoSec.midIterate = 0
        } else if (videoSec.midIterate > videoSec.videoList.length - 1) {
            videoSec.midIterate = 0
        }
        videoSec.midVid.setAttribute("src", videoSec.videoList[videoSec.midIterate])
        if (videoSec.nextIterate < 0 ) {
            videoSec.nextIterate = 0
        } else if (videoSec.nextIterate > videoSec.videoList.length - 1) {
            videoSec.nextIterate = 0
        }
        videoSec.nextVid.setAttribute("src", videoSec.videoList[videoSec.nextIterate])
    } else if (mod === "-") {
        videoSec.prevIterate--
        videoSec.midIterate--
        videoSec.nextIterate--
        if (videoSec.prevIterate < 0 ) {
            videoSec.prevIterate = videoSec.videoList.length - 1
        } else if (videoSec.prevIterate > videoSec.videoList.length - 1) {
            videoSec.prevIterate = videoSec.videoList.length - 1
        }
        videoSec.prevVid.setAttribute("src", videoSec.videoList[videoSec.prevIterate])
        if (videoSec.midIterate < 0 ) {
            videoSec.midIterate = videoSec.videoList.length - 1
        } else if (videoSec.midIterate > videoSec.videoList.length - 1) {
            videoSec.midIterate = videoSec.videoList.length - 1
        }
        videoSec.midVid.setAttribute("src", videoSec.videoList[videoSec.midIterate])
        if (videoSec.nextIterate < 0 ) {
            videoSec.nextIterate = videoSec.videoList.length - 1
        } else if (videoSec.nextIterate > videoSec.videoList.length - 1) {
            videoSec.nextIterate = videoSec.videoList.length - 1
        }
        videoSec.nextVid.setAttribute("src", videoSec.videoList[videoSec.nextIterate])
    }
}

videoSec.nextBtn.addEventListener("click", function() {
    iterate("+")
})

videoSec.prevBtn.addEventListener("click", function() {
    iterate("-")
})

videoSec.nextBtnXs.addEventListener("click", function() {
    iterate("+")
})

videoSec.prevBtnXs.addEventListener("click", function() {
    iterate("-")
})



