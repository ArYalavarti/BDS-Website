members = [
    {
      "image": "./images/team/anika.png",
      "name": "Anika Ahluwalia",
      "description": "Description",
      "bio": "Bio",
      "position": "Web"
    },
    {
      "image": "./images/team/dharam.png",
      "name": "Dharam Madnani",
      "description": "Description",
      "bio": "Bio",
      "position": "Workshops"
    },
    {
      "image": "./images/team/camille.png",
      "name": "Camille Fougere",
      "description": "Description",
      "bio": "Bio",
      "position": "Marketing"
    },
    {
      "image": "./images/team/william.png",
      "name": "William Yang",
      "description": "Description",
      "bio": "Bio",
      "position": "Marketing"
    },
  {
    "image": "./images/team/adwith.png",
    "name": "Adwith Mukherjee",
    "description": "Description",
    "bio": "Bio",
    "position": "Projects"
  },
  {
    "image": "./images/team/colby.png",
    "name": "Colby Anderson",
    "description": "Description",
    "bio": "Bio",
    "position": "Projects"
  },
  {
    "image": "./images/team/temp.png",
    "name": "Shre Kapoor",
    "description": "Description",
    "bio": "Bio",
    "position": "Projects"
  },
  {
    "image": "./images/team/temp.png",
    "name": "Sreehari Rammohan",
    "description": "Description",
    "bio": "Bio",
    "position": "Projects"
  },
  {
    "image": "./images/team/temp.png",
    "name": "Eunice Hong",
    "description": "Description",
    "bio": "Bio",
    "position": "Web"
  },
  {
    "image": "./images/team/temp.png",
    "name": "Emily Ye",
    "description": "Description",
    "bio": "Bio",
    "position": "Workshops"
  },
  {
    "image": "./images/team/temp.png",
    "name": "Filip Kierzenka",
    "description": "Description",
    "bio": "Bio",
    "position": "Workshops"
  },
  {
    "image": "./images/team/temp.png",
    "name": "Jinhoo Hong",
    "description": "Description",
    "bio": "Bio",
    "position": "Workshops"
  },
  {
    "image": "./images/team/michelle.png",
    "name": "Michelle Mai",
    "description": "Description",
    "bio": "Bio",
    "position": "Workshops"
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
      filter: ".Marketing"
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
