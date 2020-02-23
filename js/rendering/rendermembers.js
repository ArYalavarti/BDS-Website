members = [
    {
      "image": "./images/team/zsozso.png",
      "name": "Zsozso Biegl",
      "description": "Description",
      "bio": "Bio",
      "position": "Datasets"
    },
    {
      "image": "./images/team/temp.png",
      "name": "Michael Mao",
      "description": "Description",
      "bio": "Bio",
      "position": "Workshops"
    },
    {
      "image": "./images/team/anika.png",
      "name": "Anika Ahluwalia",
      "description": "Description",
      "bio": "Bio",
      "position": "Events"
    },
    {
      "image": "./images/team/lucas.png",
      "name": "Lucas Schroeder",
      "description": "Description",
      "bio": "Bio",
      "position": "Marketing"
    },
    {
      "image": "./images/team/johnny.png",
      "name": "John Roy",
      "description": "Description",
      "bio": "Bio",
      "position": "Web"
    },
    {
      "image": "./images/team/temp.png",
      "name": "Diana Lee",
      "description": "Description",
      "bio": "Bio",
      "position": "Events"
    },
    {
      "image": "./images/team/eli.png",
      "name": "Eli Silvert",
      "description": "Description",
      "bio": "Bio",
      "position": "Marketing"
    },
    {
      "image": "./images/team/raj.png",
      "name": "Raj Paul",
      "description": "Description",
      "bio": "Bio",
      "position": "Datasets"
    },
    {
      "image": "./images/team/joanna.png",
      "name": "Joanna Tasmin",
      "description": "Description",
      "bio": "Bio",
      "position": "Finance"
    },
    {
      "image": "./images/team/ashton.png",
      "name": "Ashton Lam",
      "description": "Description",
      "bio": "Bio",
      "position": "Finance"
    },
    {
      "image": "./images/team/shamay.png",
      "name": "Shamay Samuel",
      "description": "Description",
      "bio": "Bio",
      "position": "Datasets"
    },
    {
      "image": "./images/team/christos.png",
      "name": "Christos Michaelides",
      "description": "Description",
      "bio": "Bio",
      "position": "Finance"
    },
    {
      "image": "./images/team/cindy.png",
      "name": "Cindy Li",
      "description": "Description",
      "bio": "Bio",
      "position": "Workshops"
    },
    {
      "image": "./images/team/dharam.png",
      "name": "Dharam Madnani",
      "description": "Description",
      "bio": "Bio",
      "position": "Workshops"
    },
    {
      "image": "./images/team/ailita.png",
      "name": "Ailita Eddy",
      "description": "Description",
      "bio": "Bio",
      "position": "Events"
    },
    {
      "image": "./images/team/leyton.png",
      "name": "Leyton Ho",
      "description": "Description",
      "bio": "Bio",
      "position": "Web"
    },
    {
      "image": "./images/team/camille.png",
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
