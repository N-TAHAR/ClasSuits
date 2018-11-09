var ids = ['trends', 'news'];


ids.forEach(function(id) {
  var element = document.getElementById(id);
  console.log(element);
  var waypoint = new Waypoint({
    element: element,
    handler: function() {
      console.log('reached')
      element.classList.add('reset')
    },
    offset: 250
  });
});

var page2 = document.getElementById("page2");
console.log(page2);
var waypoint = new Waypoint({
  element: page2,
  handler: function() {
    console.log('reached')
    page2.classList.add('r-page')
  },
  offset: 400
});