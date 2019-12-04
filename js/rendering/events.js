let disabledTooltips;

UPCOMING_EVENTS = [];

PAST_EVENTS = [
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
        btns = `<div>
                <a href="${item.event_link}" class="standard-btn">
                    ${item.alt_btn}
                </a>
                </div>`
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