members = [
  {
    "image": "./images/team/temp.png",
    "name": "NAME",
    "description": "Description",
    "bio": "bio",
    "position": "directors"
  },
  {
    "image": "./images/team/temp.png",
    "name": "NAME",
    "description": "Description",
    "bio": "bio",
    "position": "web"
  },
  {
    "image": "./images/team/temp.png",
    "name": "NAME",
    "description": "Description",
    "bio": "bio",
    "position": "marketing"
  },
  {
    "image": "./images/team/temp.png",
    "name": "NAME",
    "description": "Description",
    "bio": "bio",
    "position": "marketing"
  },
  {
    "image": "./images/team/temp.png",
    "name": "NAME",
    "description": "Description",
    "bio": "bio",
    "position": "marketing"
  },
  {
    "image": "./images/team/temp.png",
    "name": "NAME",
    "description": "Description",
    "bio": "bio",
    "position": "marketing"
  }
]

$(document).ready(function (){
  for (var i = 0; i < members.length; i++ ) {
    var langhtml = ""
    var item = members[i]
    var html = '<div class="item member-continer ' + item.position +'">' +
                  '<div class="center-container">' +
                    '<img class="team-image" src="' + item.image + '">' +
                    '<div class="section-heading featured">' +
                      '<span>' + item.name + '</span><br/>' +
                      '<span class="section-heading featured descript">' +
                        item.description +
                    '</div>' +
                  '</div>' +
                '</div>'
    html = $.parseHTML(html);
    $("#members").append(html);
  }
})

function filter(category) {
  $("#members").isotope({ filter: '.' + category });
}

$(document).ready(function (){
  $('#members').isotope({
    itemSelector: ".item",
    layoutMode: "fitRows",
    filter: ".web"
  });
})
