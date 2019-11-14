workshops = [
    {
        "name": "Pandas and Exploratory Data Analysis",
        "image": "../images/workshops/pandas-workshop.jpg",
        "event_link": "https://www.facebook.com/events/528263211064252/",
        "materials_link": "",
        "description": "Learn more about the fundamentals of the Pandas library and about Exploratory Data Analysis. By the end of the workshop, you will have learned how to read in different data files, search/analyze data of your own, get the “big picture” insights into datasets, and create visualizations",
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


$(document).ready(function (){
    for (let i = 0; i < workshops.length; i++) {
        let item = workshops[i];
        let img = "";
        if (item.image !== "") {
            img =  `<img class="workshop-img" src="${item.image}" />`
        }
        let btns = "";
        if (item.workshop) {
            btns = `<div>
                        <a href="${item.event_link}" class="standard-btn">
                        Facebook Event
                        </a>
                        <a href="${item.materials_link}" class="standard-btn">
                        Workshop Materials
                        </a>
                    </div>`
        } else {
            btns = `<div>
                        <a href="${item.event_link}" class="standard-btn">
                            ${item.alt_btn}
                        </a>`
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
        let html = $.parseHTML(generatedHTML);
        $("#workshops").append(html);
    }
});
