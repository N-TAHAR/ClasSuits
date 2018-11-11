// Page1 Trends/News appear
var ids = ['trends', 'news'];

ids.forEach(function(id) {
  var element = document.getElementById(id);
  var waypoint = new Waypoint({
    element: element,
    handler: function() {
      element.classList.add('reset')
    },
    offset: 350
  });
});

// Page2 How it works appear
var page2 = document.getElementById("page2");

var waypoint = new Waypoint({
  element: page2,
  handler: function() {
    page2.classList.add('r-page')
  },
  offset: 400
});

// Footer Storelist appear

var store = document.querySelectorAll('.storelist li h2');
var span = document.querySelectorAll('.storelist li h2 span');
var uls = document.querySelectorAll('.storelist li ul');

for(let i = 0; i < store.length; i++) {
  store[i].addEventListener('click', function () {
    if (uls[i].style.height == '250px') {
      uls[i].style.height = '0px';
      uls[i].style.opacity = '0';
      span[i].style.width = '6%';
    }else{
      uls[i].style.height = '250px';
      uls[i].style.opacity = '1';
      span[i].style.width = '100%';
    }
  }); 
}

for (let i = 0; i < store.length; i++) {
  var waypoint = new Waypoint({
    element: store[i],
    handler: function() {
      store[i].classList.add('anim')
    },
    offset: 550
  });
};