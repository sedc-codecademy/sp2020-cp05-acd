/* ==========
VIDEO SECTION
*/

const prevBtn = document.getElementById("prev_btn");
const nextBtn = document.getElementById("next_btn");

let prevVid = document.getElementById("prev_video");
let midVid = document.getElementById("mid_video");
let nextVid = document.getElementById("next_video");

const videoList = [
    "https://www.youtube.com/embed/wmOW091P2ew",
    "https://www.youtube.com/embed/X9ivR4y03DE",
    "https://www.youtube.com/embed/wZAjVQWbMlE",
    "https://www.youtube.com/embed/UznxKiHrNx4"
]

let videoNum = 0;

prevVid.setAttribute("src", videoList[videoNum]);
midVid.setAttribute("src", videoList[videoNum + 1]);
nextVid.setAttribute("src", videoList[videoNum + 2]);

let videoPos = function(prev, mid, next, vidNum) {
    prev.setAttribute("src", videoList[vidNum])
    mid.setAttribute("src", videoList[vidNum + 1])
    next.setAttribute("src", videoList[vidNum + 2])
}

nextBtn.addEventListener("click", function() {
    videoNum++
    videoPos(prevVid, midVid, nextVid, videoNum);
})

prevBtn.addEventListener("click", function() {
    videoNum--
    videoPos(prevVid, midVid, nextVid, videoNum);
})
