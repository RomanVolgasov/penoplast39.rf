// Greedy nav
var $nav = $(".greedy-nav");
var $btn = $(".greedy-nav .greedy-nav__btn");
var $vlinks = $(".greedy-nav .greedy-nav__visible-links");
var $hlinks = $(".greedy-nav .greedy-nav__hidden-links");
var breaks = [];
function updateNav() {
  var availableSpace = $btn.hasClass("greedy-nav_hidden") ? $nav.width() : $nav.width() - $btn.width() - 100;
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

// Ripple Effect
$(document).on('click', '.ripple', function(e) {
  var $rippleElement = $('<span class="ripple__effect" />'),
    $buttonElement = $(this),
    btnOffset = $buttonElement.offset(),
    xPos = e.pageX - btnOffset.left,
    yPos = e.pageY - btnOffset.top,
    size = parseInt(Math.min($buttonElement.height(), $buttonElement.width()) * 0.5),
    animateSize = parseInt(Math.max($buttonElement.width(), $buttonElement.height()) * Math.PI);

  $rippleElement
    .css({
      top: yPos,
      left: xPos,
      width: size,
      height: size,

      backgroundColor: $buttonElement.data("ripple-color")
    })
    .appendTo($buttonElement)
    .animate({
      width: animateSize,
      height: animateSize,
      opacity: 0
    }, 700, function() {
      $(this).remove();
    });
});

// Cards
$(".card__toggle").on("click", function(){
    
    // Card toggle state    
    $(".card__toggle").removeClass("card_active");
    $(this).addClass("card_active");
    
    var isAnimating = false;
    
    if( !isAnimating ){
        isAnimating = true;
        
        $(".card").find(".card__content").css("z-index", 0);
        $(".card").removeClass("card_active");

        var that = $(this);

        $(this).siblings().css("z-index",1);

        setTimeout(function(){
            that.parent().toggleClass("card_active").find(".card__content").on("transitionend", function(){
                isAnimating = false;
            }); ;
            
        },10);
    } else {
        return;
    }
});