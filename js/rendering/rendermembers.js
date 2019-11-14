members = [
  {
    "image": "./images/team/temp.png",
    "name": "NAME",
    "description": "Description",
    "bio": "bio",
    "position": "datasets"
  },
  {
    "image": "./images/team/temp.png",
    "name": "NAME",
    "description": "Description",
    "bio": "bio",
    "position": "datasets"
  },
  {
    "image": "./images/team/temp.png",
    "name": "NAME",
    "description": "Description",
    "bio": "bio",
    "position": "datasets"
  },
  {
    "image": "./images/team/temp.png",
    "name": "NAME",
    "description": "Description",
    "bio": "bio",
    "position": "competition"
  },
  {
    "image": "./images/team/temp.png",
    "name": "NAME",
    "description": "Description",
    "bio": "bio",
    "position": "datasets"
  },
  {
    "image": "./images/team/temp.png",
    "name": "NAME",
    "description": "Description",
    "bio": "bio",
    "position": "datasets"
  }
]

$(document).ready(function (){
  for (var i = 0; i < members.length; i++ ) {
    var langhtml = ""
    var item = members[i]
    var html = '<div class="wide-container work-container w-container"> <div class="w-col w-col-3 team-item ' + item.position + '"> <div class="center-container"> <img class="team-image" src="' + item.image + '"> <div class="section-heading featured"><span>' + item.name + '</span></div> </div> </div> </div>'

    html = $.parseHTML(html);
    $("#members").append(html);
  }
})

$(document).ready(function (){

  var iso = new Isotope(".grid", {
    itemSelector: ".team-item",
    layoutMode: "fitRows",
    filter: ".datasets"
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
