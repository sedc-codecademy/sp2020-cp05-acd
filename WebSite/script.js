/* ==========
VIDEO SECTION
*/

const prevBtn = document.getElementById("prev_btn");
const nextBtn = document.getElementById("next_btn");

const prevVid = document.getElementById("prev_video");
console.log(prevVid)

const videoNum = 0;

const videoList = [
    "https://www.youtube.com/embed/wmOW091P2ew",
    "https://www.youtube.com/embed/X9ivR4y03DE",
    "https://www.youtube.com/embed/wZAjVQWbMlE",
    "https://www.youtube.com/embed/UznxKiHrNx4"
]

let vidSection = {
    prevVid : videoList[videoNum],
    midVid : videoList[videoNum + 1],
    nextVid : videoList[videoNum + 2]
}

