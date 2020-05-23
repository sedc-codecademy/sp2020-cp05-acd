/* ==========
VIDEO SECTION
*/

const prevBtn = document.getElementById("prev_btn");
const nextBtn = document.getElementById("next_btn");

const prevVid = document.getElementById("prev_video");
const midVid = document.getElementById("mid_video");
const nextVid = document.getElementById("next_video");

const videoList = [
    "https://www.youtube.com/embed/wmOW091P2ew",
    "https://www.youtube.com/embed/X9ivR4y03DE",
    "https://www.youtube.com/embed/wZAjVQWbMlE",
    "https://www.youtube.com/embed/UznxKiHrNx4"
]

let prevIterate = 0;
let midIterate = 1;
let nextIterate = 2;

prevVid.setAttribute("src", videoList[prevIterate]);
midVid.setAttribute("src", videoList[midIterate]);
nextVid.setAttribute("src", videoList[nextIterate]);

function iterate(mod) {
    if (mod === "+") {
        prevIterate++
        midIterate++
        nextIterate++  
        if (prevIterate < 0 ) {
            prevIterate = 0
        } else if (prevIterate > videoList.length - 1) {
            prevIterate = 0
        }
        prevVid.setAttribute("src", videoList[prevIterate])
        if (midIterate < 0 ) {
            midIterate = 0
        } else if (midIterate > videoList.length - 1) {
            midIterate = 0
        }
        midVid.setAttribute("src", videoList[midIterate])
        if (nextIterate < 0 ) {
            nextIterate = 0
        } else if (nextIterate > videoList.length - 1) {
            nextIterate = 0
        }
        nextVid.setAttribute("src", videoList[nextIterate])
    } else if (mod === "-") {
        prevIterate--
        midIterate--
        nextIterate--
        if (prevIterate < 0 ) {
            prevIterate = videoList.length - 1
        } else if (prevIterate > videoList.length - 1) {
            prevIterate = videoList.length - 1
        }
        prevVid.setAttribute("src", videoList[prevIterate])
        if (midIterate < 0 ) {
            midIterate = videoList.length - 1
        } else if (midIterate > videoList.length - 1) {
            midIterate = videoList.length - 1
        }
        midVid.setAttribute("src", videoList[midIterate])
        if (nextIterate < 0 ) {
            nextIterate = videoList.length - 1
        } else if (nextIterate > videoList.length - 1) {
            nextIterate = videoList.length - 1
        }
        nextVid.setAttribute("src", videoList[nextIterate])
    }
}

nextBtn.addEventListener("click", function() {
    iterate("+")
})

prevBtn.addEventListener("click", function() {
    iterate("-")
})
