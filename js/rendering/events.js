let disabledTooltips;

UPCOMING_EVENTS = [
    {
        "name": "BCC x BDS IBM Chief Analytics Office Info Session",
        "image": "../images/events/ibm_info_session_graphic.png",
        "description": "The smartest companies today fully leverage data analytics for strategic decision making. The " +
            "IBM Chief Analytics Office, a division of IBM Corporate Headquarters, combines business knowledge with big " +
            "data to direct the future of IBM’s strategic transformation. Do you want to drive significant change within a " +
            "leading global company and influence C-suite level decisions? <br/><br/>The IBM Chief Analytics Office is an elite " +
            "analytics consulting team that is tasked by IBM executives to pursue our most complex strategic issues. " +
            "Our work is a combination of data science and management consulting. Through state of the art technology " +
            "and the power of artificial intelligence, we strive to improve traditional business decision-making and processes.\n " +
            "<br/><br/>Join IBM for a virtual info session on September 24, 2020 at 4PM EDT and coffee chats with current IBM " +
            "consultants on September 25, 2020 with the Brown Consulting Club and Brown Data Science to learn more " +
            "about their upcoming recruitment opportunities!\n",
        "event_link": "https://www.facebook.com/events/249443373013308/",
        "materials_link": "",
        "alt_btn": "Facebook Event",
        "workshop": false
    },
];

PAST_EVENTS = [
    {
        "name": "Training end-to-end Neural Taggers Without Labeled Data",
        "image": "../images/workshops/bach.jpg",
        "description": "Join us for a workshop about sequence tagging with Professor Bach! <br/><br/>" +
            "Sequence tagging is an important class of structured prediction problems in which each element in an " +
            "input sequence is tagged with a class. It arises in many natural language processing applications, such " +
            "as named entity recognition (NER), semantic role labeling (SRL), and sentence compression. However, the " +
            "expense of collecting large hand-labeled datasets for training sequence taggers has long motivated the " +
            "search for alternative sources of supervision.<br/><br/>" +
            "In this workshop, Professor Bach will introduce WISER, a novel framework for training sequence tagging " +
            "models with weak supervision from user-written rules. We will show how to use WISER to train " +
            "state-of-the-art recurrent neural networks (RNNs) for sequence tagging without any labeled data.",
        "event_link": "https://www.facebook.com/events/770708983434823/",
        "materials_link": "",
        "alt_btn": "Facebook Event",
        "workshop": false
    },
    {
        "name": "Clinical Machine Learning with Carsten Eickhoff, Dec. 11th in CIT 368 @ 5:15 PM",
        "image": "../images/workshops/eickhoff.jpg",
        "event_link": "https://www.facebook.com/events/549893552532622/",
        "materials_link": "",
        "description": "The application of machine learning within the medical field has proved itself invaluable." +
            " As the leader of the AI Lab at Brown's Center for Biomedical Informatics, Carsten Eickhoff’s work focuses" +
            "on artificial intelligence for improving patient safety, individual health, and quality of medical care." +
            "<br/> <br/> Carsten’s talk on clinical machine learning will investigate two topics: forecasting " +
            "complications in post cardio-surgical care and diagnosing rare diseases from doctors’ notes. There will " +
            "be something for everyone in this presentation, whether you come from a CS background or you’re a " +
            "beginner and have a passion for learning about new topics.",
        "alt_btn": "Facebook Event",
        "workshop": false
    },
    {
        "name": "Pandas and Exploratory Data Analysis",
        "image": "../images/workshops/pandas-workshop.jpg",
        "event_link": "https://www.facebook.com/events/528263211064252/",
        "materials_link": "https://drive.google.com/open?id=1LG-odgjd6tFqNPAs7lVm6GV3CYe2A5ZO",
        "description": "Learn more about the fundamentals of the Pandas library and about Exploratory Data Analysis. By the end of the workshop, you will have learned how to read in different data files, search/analyze data of your own, get the “big picture” insights into datasets, and create visualizations",
        "alt_btn": "",
        "workshop": true
    },
    {
        "name": "Tech Talk with diiVE",
        "image": "",
        "event_link": "https://www.godiive.com/",
        "materials_link": "",
        "description": "Brown Data Science is hosting an event with diiVe today, October 31, from 12-1 PM in CIT 368. Come to hear from a Brown alum about the organization she co-founded! Elspeth Boynton, Brown alumna '11, is coming to campus to share her journey from Brown to consulting multinational companies in Cape Town, South Africa. Currently, Elspeth also runs a summer abroad program for university students and recent graduates, offering courses in Management Consulting, Data Science and Blockchain Tech. Check diiVe out and come chat to her about her experiences from rural NGOs to Big 4 firms.",
        "alt_btn": "Learn more about diiVE!",
        "workshop": false,
    }
];


$(document).ready(function () {
    (UPCOMING_EVENTS.length === 0) ? $("#inProgress").show() : renderWorkshops("upcomingEvents", UPCOMING_EVENTS);
    renderWorkshops("pastEvents", PAST_EVENTS);

    initTooltips();
});


/**
 * Initializes all given events on page under the provided div
 */
function renderWorkshops(id, workshops) {
    for (let workshop of workshops) {
        $(`#${id}`).append(generateEventHTML(workshop));
    }
}


/**
 * Generate the event HTML required to render event on screen
 */
function generateEventHTML(item) {
    let img = "";
    if (item.image !== "") {
        img =  `<img class="workshop-img" src="${item.image}" />`
    }
    let btns = "";
    if (item.workshop) {
        let eventClass = "standard-btn";
        let tippyContent = "";
        let href = "";
        if (item.materials_link === "") {
            eventClass = "standard-btn workshop-disabled";
            tippyContent = "Materials have not been released yet";
        } else {
            href = `href="${item.materials_link}"`;
        }
        btns = `<div>
                <a href="${item.event_link}" class="standard-btn">
                Facebook Event
                </a>
                <a ${href} class="${eventClass}"
                data-tippy-content="${tippyContent}"
                >
                Workshop Materials
                </a>
                </div>`
    } else {
        if (item.event_link !== "") {
            btns = `<div>
            <a href="${item.event_link}" class="standard-btn">
                ${item.alt_btn}
            </a>
            </div>` 
        }
    }

    let generatedHTML = `<div class="wide-container work-container w-container">
                            <h4 class="navy-text-block">${item.name}</h4>
                            <img class="divider-small" src="../images/main/divider-small-navy.png"><br/>
                            <p class="navy-text left event-text">
                                ${item.description}
                            </p>
                            <div class="center-container">
                                ${img}${btns}  
                            </div>
                        </div>`;
    return $.parseHTML(generatedHTML);
}


/**
 * Initializes the page tooltips
 */
function initTooltips() {
    disabledTooltips = tippy(".workshop-disabled", {
        animation: "scale",
        arrow: true,
        arrowType: "round",
        theme: "bds",
        hideOnClick: true,
        inertia: true,
        sticky: true,
        placement: "bottom",
    });
}
