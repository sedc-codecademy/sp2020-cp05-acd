// Links

class Link {
    constructor(item, drop) {
        this.dropDisp = drop.style.display = "none";
        item.click = item.addEventListener("click", function () {
            if (window.matchMedia("(max-width: 1000px)").matches) {
                for (const i of dropList) {
                    if (drop !== i) {
                        i.style.display = "none";
                    }
                }
                if (drop.style.display === "none") {
                    drop.style.display = "flex";
                }
                else if (drop.style.display === "flex") {
                    drop.style.display = "none";
                }
            }
        });
        item.mouseOver = item.addEventListener("mouseover", function () {
            if (window.matchMedia("(min-width: 1000px)").matches) {
                if (drop.style.display === "none") {
                    drop.style.display = "flex";
                }
                else if (drop.style.display === "flex") {
                    drop.style.display = "none";
                }
            }
        });
        item.mouseOut = item.addEventListener("mouseout", function () {
            if (window.matchMedia("(min-width: 1000px)").matches) {
                if (drop.style.display === "none") {
                    drop.style.display = "flex";
                }
                else if (drop.style.display === "flex") {
                    drop.style.display = "none";
                }
            }
        });
    }
}



const firstItem = document.getElementById("first-item");
const firstDrop = document.getElementById("first-drop");
const firstLink = new Link(firstItem, firstDrop);

const secondItem = document.getElementById("second-item");
const secondDrop = document.getElementById("second-drop");
const secondLink = new Link(secondItem, secondDrop);

const thirdItem = document.getElementById("third-item");
const thirdDrop = document.getElementById("third-drop");
const thirdLink = new Link(thirdItem, thirdDrop);

const fourthItem = document.getElementById("fourth-item");
const fourthDrop = document.getElementById("fourth-drop");
const fourthLink = new Link(fourthItem, fourthDrop);

const fifthItem = document.getElementById("fifth-item");
const fifthDrop = document.getElementById("fifth-drop");
const fifthLink = new Link(fifthItem, fifthDrop);

const sixthItem = document.getElementById("sixth-item");
const sixthDrop = document.getElementById("sixth-drop");
const sixthLink = new Link(sixthItem, sixthDrop);

const seventhItem = document.getElementById("seventh-item");
const seventhDrop = document.getElementById("seventh-drop");
const seventhLink = new Link(seventhItem, seventhDrop);

const eighthItem = document.getElementById("eighth-item");
const eighthDrop = document.getElementById("eighth-drop");
const eighthLink = new Link(eighthItem, eighthDrop);

const dropList = [firstDrop,secondDrop,thirdDrop,fourthDrop,fifthDrop,sixthDrop,seventhDrop,eighthDrop]

// burger-bar 

const burgerCheck = document.getElementById("burger-bar");
const header = document.getElementsByTagName("header")[0];
const footer = document.getElementsByTagName("footer")[0];

const burgerChecked = () => {
        if(burgerCheck.checked) {
            header.removeAttribute("class");
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            header.style.position = "absolute"
            header.style.top = 0
            footer.style.position = "relative";
        } else if (!burgerCheck.checked) {
            header.setAttribute("class", "fixed");
            footer.style.position = "fixed";
            header.style.position = "fixed"
    }
}

burgerCheck.addEventListener("click", burgerChecked)

// Video-section

if(document.getElementById("video-content") !== null) {
    const videoList = [
        "https://www.youtube.com/embed/UznxKiHrNx4",
        "https://www.youtube.com/embed/TKGBNNRWYts",
        "https://www.youtube.com/embed/JAjZv41iUJU"
    ]
    
    class videoSection {
        constructor(counter, dom) {
            this.counter = counter,
            this.dom = dom,
            dom.setAttribute("src",videoList[counter])
        } 
    }
    
    const prevVideo = new videoSection(0, document.getElementById("video-previous"))
    const centerVideo = new videoSection(1, document.getElementById("video-center"))
    const nextVideo = new videoSection(2, document.getElementById("video-next"))
    
    class rightBtn {
        constructor(video) {
            this.click = document.getElementById("btn-right").addEventListener("click", function() {
                if(video.counter === videoList.length - 1) {
                    video.counter = 0;
                    video.dom.setAttribute("src", videoList[video.counter])
                } else {
                    video.counter++;
                    video.dom.setAttribute("src", videoList[video.counter])
                }
            })
        }
    }
    class leftBtn {
        constructor(video) {
            this.click = document.getElementById("btn-left").addEventListener("click", function() {
                if(video.counter === 0) {
                    video.counter = videoList.length - 1;
                    video.dom.setAttribute("src", videoList[video.counter])
                } else {
                    video.counter--;
                    video.dom.setAttribute("src", videoList[video.counter])
                }
            })
        }
    }
    
        
        const rightBtn1 = new rightBtn(prevVideo);
        const rightBtn2 = new rightBtn(centerVideo);
        const rightBtn3 = new rightBtn(nextVideo);
        
        const leftBtn1 = new leftBtn(prevVideo);
        const leftBtn2 = new leftBtn(centerVideo);
        const leftBtn3 = new leftBtn(nextVideo);
    
}


//////////////////
// Single page
/////////////////

// Navigation links
const navigationLinks = {
    homeBtn: document.getElementById('home-btn'),
    contentBtn: document.getElementById('content-btn'),
    loginBtn: document.getElementById('profile'),
    registerBtn: document.getElementById('register'),
    forgottenBtn: document.getElementById('forgotten-link'),
    forgottenBtn2: document.getElementById('forgotten-link-two'),
    contentBtnCombined: document.getElementById('content-btn-combined')
}

// Pages
const pages = {
    homePage: document.getElementById('home-page'),
    contentPage: document.getElementById('content-page'),
    loginPage: document.getElementById('login-page'),
    registerPage: document.getElementById('register-page'),
    forgottenPage: document.getElementById('forgotten-page')
}

const setEventListeners = () => {
    for (const link in navigationLinks) {
        navigationLinks[link].addEventListener('click', (event) => {
            // data-page attribute in the HTML should have the same name as the pages property
            showPage(event.target.dataset.page);
        })
    }
};

// show the page sent as argument
const showPage = (page) => {
    for (const pageKey in pages) {
        //this line hides all pages
        pages[pageKey].classList.add('hidden');
    }
    // on this line the proper page which navigation link was clicked is shown
    pages[page].classList.remove('hidden');
    burgerCheck.checked = false;
    burgerChecked();
};

setEventListeners();
//shownPage is called here with the initial page, which is home
showPage('homePage');

