// Landscape 

window.onresize = headerAndFooterPosition

function match() {
        header.style.position = "absolute"
        header.style.top = 0
        footer.style.position = "relative";
}

function headerAndFooterPosition() {
    if(window.matchMedia("(max-width: 900px)").matches && window.matchMedia("(orientation: landscape)").matches) {
        match()
    } else {
        header.setAttribute("class", "fixed");
        footer.style.position = "fixed";
        header.style.position = "fixed";
    }
}


// Links

class Link {
    constructor(item, drop) {
        this.dropDisp = drop.style.display = "none";
        item.click = item.addEventListener("click", function () {
            if (window.matchMedia("(max-width: 1000px)").matches) {
                drop.classList.remove('drop-animate')
                drop.classList.add('swing-in-top-fwd')
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
                drop.classList.add('drop-animate')
                drop.classList.remove('swing-in-top-fwd')
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
                drop.classList.add('drop-animate')
                drop.classList.remove('swing-in-top-fwd')
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
            header.style.position = "fixed";
            if(window.matchMedia("(max-width: 900px)").matches && window.matchMedia("(orientation: landscape)").matches) {
                match()
            }
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
// Single page + content generation
/////////////////

// Navigation links
// the link ID should correspond to the ID of the json file (this is how the link recognizes which json file to connect to)
// if more than one link connects to the same page, those links should have the same ID
// ex : typeOneWhatToKnow and typeOneWhatToKnowCombined link to the same page so they have the same ID
// the title is the name of the upper navigation items(vesti, proekti i inicijativi, edukacija, ishrana ...)

const navigationLinks = [
    homeBtn = {
        dom: document.getElementById('home-btn'),
        id: 1,
        title: "Home"
    },
    loginBtn= {
        dom: document.getElementById('profile'),
        id: 2,
        title: "Profile"
    },
    registerBtn= {
        dom: document.getElementById('register'),
        id: 3,
        title: "Register"
    },
    forgottenBtn= {
        dom: document.getElementById('forgotten-link'),
        id: 4,
        title: "Forgotten password"
    },
    forgottenBtn2= {
        dom: document.getElementById('forgotten-link-two'),
        id: 4,
        title: "Forgotten password"
    },
    typeOneWhatToKnow= {
        dom: document.getElementById('type-one-what-to-know'),
        id: 5,
        title: "Тип 1"
    },
    typeOneWhatToKnowCombined= {
        dom: document.getElementById('type-one-what-to-know-combined'),
        id: 5,
        title: "Тип 1"
    },
    newsOne= {
        dom: document.getElementById('news-one-id'),
        id: 6,
        title: "Вести"
    },
    typeTwoSignsAndSymptoms = {
        dom: document.getElementById("signs-and-symptoms"),
        id: 7,
        title: "Тип 2"
    },
    typeTwoSignsAndSymptomsCombined = {
        dom: document.getElementById("signs-and-symptoms-combined"),
        id: 7,
        title: "Тип 2"
    } 
]

// Pages
// if any change is made to the template page, those attributes must be copied over lower at the generatePage function 
// the title of the page is irrelevant if page is static
// the title of the page should correspond to the template type it represents (there should be a data-page="..." on the link item in the HTML)
// the static attribute determines whether the page is a template
const pages = [
    homePage = {
        dom: document.getElementById('home-page'),
        title: "homePage",
        static: true
    },
    contentPage = {
        dom: document.getElementById('content-page'),
        title: "contentPage",
        static: false,
        navTitle: document.getElementById("content-title"),
        contentTitle: document.getElementById("content-feature"),
        contentSubtitle: document.getElementById("content-subtitle"),
        parOne: document.getElementById("content-par-one"),
        parTwo: document.getElementById("content-par-two"),
        contentLowerSubtitle: document.getElementById("content-lower-subtitle"),
        parThree: document.getElementById("content-par-three"),
        parFour: document.getElementById("content-par-four"),
        contentImg: document.getElementById("content-img")
    }, 
    loginPage= {
        dom: document.getElementById('login-page'),
        title: "loginPage",
        static: true
    },
    registerPage= {
        dom: document.getElementById('register-page'),
        title: "registerPage",
        static: true
    },
    forgottenPage = {
        dom: document.getElementById('forgotten-page'),
        title: "forgottenPage",
        static: true
    },
]


// This function generates a page 
// if the page is static it displays the page itself
// if the page is !static it generates a new page with attributes from JSON
const generatePage = (items, pageToChange, nav) => {
    if(pageToChange.static) {
        pageToChange.dom.classList.remove('hidden')
    }
    else {
        // this is where contentPage is being handled
        pageToChange.dom.classList.remove('hidden')
        for (const item of items) {
            if(item.id === nav.id) {
                pageToChange.navTitle.innerHTML = nav.title
                pageToChange.contentTitle.innerHTML = item.title
                pageToChange.contentSubtitle.innerHTML = item.subtitle
                pageToChange.parOne.innerHTML = item.p1
                pageToChange.parTwo.innerHTML = item.p2
                pageToChange.contentLowerSubtitle.innerHTML = item.lowerSubtitle
                pageToChange.parThree.innerHTML = item.p3
                pageToChange.parFour.innerHTML = item.p4
                pageToChange.contentImg.setAttribute("src", item.img)
            }
        }       
    }
}

// This data should be taken from a JSON api call using fetch
// The point of this is to simulate different pages
// each attribute of each object corresponds to an element in the contentPage (contentPage is the only template page we have atm)
// the object ID should correspond to the ID of the link which connects to it (this is how the link recognizes which json file to connect to)
let fetchedJSONdata = [
    {
        title: 'Патот за да го разберете дијабетот започнува овде со нас',
        subtitle: 'Што треба да знаете за дијабетес тип 1',
        p1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        lowerSubtitle: "Пронајдете го балансот",
        p3: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't",
        p4: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam",
        id: 5,
        img: "images/doctor-monther-child-stock.png"
    },
    {
        title: 'Камп за млади дијабетес лидери',
        subtitle: ' ',
        p1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        p2: ' ',
        lowerSubtitle: "Приклyчете се сега!",
        p3: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        p4: " ",
        id: 6,
        img: "images/diabetes-camp.png"
    },
    {
        title: 'Знаци и симптоми карактеристични за тип 2 дијабетес',
        subtitle: ' ',
        p1: "Најчест тип на дијабетес (70–80% од сите пациенти со дијабетес). 80% од пациентите се натхранети. Синдром на инсулинска резистенција (метаболен синдром) често ѝ претходи на болеста: дебелина, зголемен крвен притисок, абнормално ниво на липиди (ви-соки триглицерид (2–3 mmol/L, ретко > 5 mmol/L) и низок HDL-холестерол) и често покачена концентрација на серумски урати.",
        p2: "Вообичаено дијагнозата е кај возрасни (по возраст од 35 години). Атеросклерозата е најзначајната компликација од болеста, како коронарна арте-риска болест, артериопатија на долните екстремитети и мозочни и други макровас-куларни болести (удар). Пациентите имаат значајна семејна историја на дијабетес, хипертензија и коронар-на артериска болест.",
        lowerSubtitle: " ",
        p3: " ",
        p4: " ",
        id: 7,
        img: "images/diabetes-placehold.png"
    }
]

// dont touch
const setEventListeners = () => {
    for (const link in navigationLinks) {
        navigationLinks[link].dom.addEventListener('click', (event) => {
            showPage(event.target.dataset.page, navigationLinks[link]);
        })
    }
};

// dont touch
const showPage = (page, nav) => {
    pages.forEach(p => p.dom.classList.add('hidden'))
    for (const p of pages) {
        p.title === page ? generatePage(fetchedJSONdata, p, nav) : null;
    }
    burgerCheck.checked = false;
    burgerChecked();
};
setEventListeners();

// The next line hides all the pages on initial load
pages.forEach(p => p.dom.classList.add('hidden'))
// The next line shows the home page on initial load
document.getElementById('home-page').classList.remove('hidden');

/*  == How to create a new link and content page == 

1. create the li in the correct nav-item
2. create an ID for that link
3. create a data-page attribute which points to the page you want to link to (put in contentPage if you want to use the template)
4. create a link object in the navigationLinks array
5. there should be a JSON object with the same ID as the link object (if there is no ID connection you get the default contentPage)


*/

