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