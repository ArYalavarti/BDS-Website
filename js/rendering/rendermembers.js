members = [
  {
    "image": "./images/team/anika.jpg",
    "name": "Anika Ahluwalia",
    "description": "Description",
    "bio": "Bio",
    "position": "Events"
  },
  {
    "image": "./images/team/lucas.jpg",
    "name": "Lucas Schroeder",
    "description": "Description",
    "bio": "Bio",
    "position": "Marketing"
  },
  {
    "image": "./images/team/johnny.jpg",
    "name": "John Roy",
    "description": "Description",
    "bio": "Bio",
    "position": "Webteam"
  },
  {
    "image": "./images/team/eli.jpg",
    "name": "Eli Silvert",
    "description": "Description",
    "bio": "Bio",
    "position": "Marketing"
  },
  {
    "image": "./images/team/raj.jpg",
    "name": "Raj Paul",
    "description": "Description",
    "bio": "Bio",
    "position": "Datasets"
  },
  {
    "image": "./images/team/mariel.jpg",
    "name": "Mariel Pacada",
    "description": "Description",
    "bio": "Bio",
    "position": "Workshops"
  },
  {
    "image": "./images/team/joanna.jpg",
    "name": "Joanna Tasmin",
    "description": "Description",
    "bio": "Bio",
    "position": "Finance"
  },
  {
    "image": "./images/team/michael.jpg",
    "name": "Michael Mao",
    "description": "Description",
    "bio": "Bio",
    "position": "Workshops"
  },
  {
    "image": "./images/team/shamay.jpg",
    "name": "Shamay Samuel",
    "description": "Description",
    "bio": "Bio",
    "position": "Datasets"
  },
  {
    "image": "./images/team/colton.jpg",
    "name": "Colton Rusch",
    "description": "Description",
    "bio": "Bio",
    "position": "Webteam"
  },
  {
    "image": "./images/team/christos.jpg",
    "name": "Christos Michaelides",
    "description": "Description",
    "bio": "Bio",
    "position": "Finance"
  },
  {
    "image": "./images/team/cindy.jpg",
    "name": "Cindy Li",
    "description": "Description",
    "bio": "Bio",
    "position": "Workshops"
  },
  {
    "image": "./images/team/ailita.jpg",
    "name": "Ailita Eddy",
    "description": "Description",
    "bio": "Bio",
    "position": "Events"
  },
  {
    "image": "./images/team/zsozso.jpg",
    "name": "Zsozso Biegl",
    "description": "Description",
    "bio": "Bio",
    "position": "Datasets"
  },
  {
    "image": "./images/team/leyton.jpg",
    "name": "Leyton Ho",
    "description": "Description",
    "bio": "Bio",
    "position": "Webteam"
  },
  {
    "image": "./images/team/camille.jpg",
    "name": "Camille Fougere",
    "description": "Description",
    "bio": "Bio",
    "position": "Marketing"
  }
]

$(document).ready(function (){
  for (var i = 0; i < members.length; i++ ) {
    var langhtml = ""
    var item = members[i]
    var html = '<div class="wide-container work-container w-container"> <div class="w-col w-col-3 team-item ' + item.position + '"> <div class="center-container"> <img class="team-image" src="' + item.image + '"> <div class="section-heading featured"><span>' + item.name + '</span><br/><span class="section-heading featured descript">' + item.position + '</span></div> </div> </div> </div>'

    html = $.parseHTML(html);
    $("#members").append(html);
  }
})

$(document).ready(function (){

  var iso = new Isotope(".grid", {
    itemSelector: ".team-item",
    layoutMode: "fitRows",
    filter: ".Datasets"
  });

  var filtersElem = document.querySelector(".filters-button-group");
  filtersElem.addEventListener("click", function(event) {
    if (!matchesSelector(event.target, "button")) {
      return;
    }
    var filterValue = event.target.getAttribute("data-filter");
    iso.arrange({ filter: filterValue });
  });

  var buttonGroups = document.querySelectorAll(".button-group");
  for (var i = 0, len = buttonGroups.length; i < len; i++) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup(buttonGroup);
  }

  function radioButtonGroup(buttonGroup) {
    buttonGroup.addEventListener("click", function(event) {
      if (!matchesSelector(event.target, "button")) {
        return;
      }
      buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
      event.target.classList.add("is-checked");
    });
  }
});
