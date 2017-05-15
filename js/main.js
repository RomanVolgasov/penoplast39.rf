var $nav = $(".greedy-nav");
var $btn = $(".greedy-nav .greedy-nav__btn");
var $vlinks = $(".greedy-nav .greedy-nav__visible-links");
var $hlinks = $(".greedy-nav .greedy-nav__hidden-links");

var breaks = [];

function updateNav() {
  
  var availableSpace = $btn.hasClass("greedy-nav_hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    // Record the width of the list
    breaks.push($vlinks.width());

    // Move item to the hidden list
    $vlinks.children().last().prependTo($hlinks);

    // Show the dropdown btn
    if($btn.hasClass("greedy-nav_hidden")) {
      $btn.removeClass("greedy-nav_hidden");
    }

  // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    if(availableSpace > breaks[breaks.length-1]) {

      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass("greedy-nav_hidden");
      $hlinks.addClass("greedy-nav_hidden");
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Recur if the visible list is still overflowing the nav
  if($vlinks.width() > availableSpace) {
    updateNav();
  }

}

// Window listeners

$(window).resize(function() {
    updateNav();
});

$btn.on("click", function() {
  $hlinks.toggleClass("greedy-nav_hidden");
});

updateNav();