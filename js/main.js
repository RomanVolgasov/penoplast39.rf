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

// Features Cards
$(".features-card__toggle").on("click", function(){
    
    // Card toggle state    
    $(".features-card__toggle").removeClass("features-card_active");
    $(this).addClass("features-card_active");
    
    var isAnimating = false;
    
    if( !isAnimating ){
        isAnimating = true;
        
        $(".features-card").find(".features-card__content").css("z-index", 0);
        $(".features-card").removeClass("features-card_active");

        var that = $(this);

        $(this).siblings().css("z-index",1);

        setTimeout(function(){
            that.parent().toggleClass("features-card_active").find(".features-card__content").on("transitionend", function(){
                isAnimating = false;
            }); ;
            
        },10);
    } else {
        return;
    }
});

// Каталог
// Блок отвечает за поведения класса .catalog-shoping-card-left-side (фасад)
$(".psb-tu-2530").click(function() {
  $(".psb-tu-2530").addClass("catalog-shoping-card_active");
  $(".psb-tu-2550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-2580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-25100").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2530").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2550").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2580").removeClass("catalog-shoping-card_active");
  $(".psb-gost-25100").removeClass("catalog-shoping-card_active");
  $("#line-25").addClass("one");
  $("#line-25").removeClass("two");
  $("#line-25").removeClass("three");
  $("#line-25").removeClass("four");
  $("#line-25").removeClass("five");
  $("#line-25").removeClass("six");
  $("#line-25").removeClass("seven");
  $("#line-25").removeClass("eight");
})

$(".psb-tu-2550").click(function() {
  $(".psb-tu-2550").addClass("catalog-shoping-card_active");
  $(".psb-tu-2530").removeClass("catalog-shoping-card_active");
  $(".psb-tu-2580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-25100").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2530").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2550").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2580").removeClass("catalog-shoping-card_active");
  $(".psb-gost-25100").removeClass("catalog-shoping-card_active");
  $("#line-25").addClass("two");
  $("#line-25").removeClass("one");
  $("#line-25").removeClass("three");
  $("#line-25").removeClass("four");
  $("#line-25").removeClass("five");
  $("#line-25").removeClass("six");
  $("#line-25").removeClass("seven");
  $("#line-25").removeClass("eight");
})

$(".psb-tu-2580").click(function() {
  $(".psb-tu-2580").addClass("catalog-shoping-card_active");
  $(".psb-tu-2550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-2530").removeClass("catalog-shoping-card_active");
  $(".psb-tu-25100").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2530").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2550").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2580").removeClass("catalog-shoping-card_active");
  $(".psb-gost-25100").removeClass("catalog-shoping-card_active");
  $("#line-25").addClass("three");
  $("#line-25").removeClass("two");
  $("#line-25").removeClass("one");
  $("#line-25").removeClass("four");
  $("#line-25").removeClass("five");
  $("#line-25").removeClass("six");
  $("#line-25").removeClass("seven");
  $("#line-25").removeClass("eight");
})

$(".psb-tu-25100").click(function() {
  $(".psb-tu-25100").addClass("catalog-shoping-card_active");
  $(".psb-tu-2550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-2580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-2530").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2530").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2550").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2580").removeClass("catalog-shoping-card_active");
  $(".psb-gost-25100").removeClass("catalog-shoping-card_active");
  $("#line-25").addClass("four");
  $("#line-25").removeClass("two");
  $("#line-25").removeClass("three");
  $("#line-25").removeClass("one");
  $("#line-25").removeClass("five");
  $("#line-25").removeClass("six");
  $("#line-25").removeClass("seven");
  $("#line-25").removeClass("eight");
})

$(".psb-gost-2530").click(function() {
  $(".psb-gost-2530").addClass("catalog-shoping-card_active");
  $(".psb-tu-2550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-2580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-2530").removeClass("catalog-shoping-card_active");
  $(".psb-tu-25100").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2550").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2580").removeClass("catalog-shoping-card_active");
  $(".psb-gost-25100").removeClass("catalog-shoping-card_active");
  $("#line-25").addClass("five");
  $("#line-25").removeClass("two");
  $("#line-25").removeClass("three");
  $("#line-25").removeClass("one");
  $("#line-25").removeClass("four");
  $("#line-25").removeClass("six");
  $("#line-25").removeClass("seven");
  $("#line-25").removeClass("eight");
})

$(".psb-gost-2550").click(function() {
  $(".psb-gost-2550").addClass("catalog-shoping-card_active");
  $(".psb-tu-2550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-2580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-2530").removeClass("catalog-shoping-card_active");
  $(".psb-tu-25100").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2530").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2580").removeClass("catalog-shoping-card_active");
  $(".psb-gost-25100").removeClass("catalog-shoping-card_active");
  $("#line-25").addClass("six");
  $("#line-25").removeClass("two");
  $("#line-25").removeClass("three");
  $("#line-25").removeClass("one");
  $("#line-25").removeClass("four");
  $("#line-25").removeClass("five");
  $("#line-25").removeClass("seven");
  $("#line-25").removeClass("eight");
})

$(".psb-gost-2580").click(function() {
  $(".psb-gost-2580").addClass("catalog-shoping-card_active");
  $(".psb-tu-2550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-2580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-2530").removeClass("catalog-shoping-card_active");
  $(".psb-tu-25100").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2530").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2550").removeClass("catalog-shoping-card_active");
  $(".psb-gost-25100").removeClass("catalog-shoping-card_active");
  $("#line-25").addClass("seven");
  $("#line-25").removeClass("two");
  $("#line-25").removeClass("three");
  $("#line-25").removeClass("one");
  $("#line-25").removeClass("four");
  $("#line-25").removeClass("five");
  $("#line-25").removeClass("six");
  $("#line-25").removeClass("eight");
})

$(".psb-gost-25100").click(function() {
  $(".psb-gost-25100").addClass("catalog-shoping-card_active");
  $(".psb-tu-2550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-2580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-2530").removeClass("catalog-shoping-card_active");
  $(".psb-tu-25100").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2530").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2550").removeClass("catalog-shoping-card_active");
  $(".psb-gost-2580").removeClass("catalog-shoping-card_active");
  $("#line-25").addClass("eight");
  $("#line-25").removeClass("two");
  $("#line-25").removeClass("three");
  $("#line-25").removeClass("one");
  $("#line-25").removeClass("four");
  $("#line-25").removeClass("five");
  $("#line-25").removeClass("six");
  $("#line-25").removeClass("seven");
})
// Блок отвечает за поведение класса .catalog-shoping-card-right-side (фасад)
$(".psb-tu-2530").click(function() {
  $("#first-25").addClass("catalog-shoping-card_active");
  $("#second-25").removeClass("catalog-shoping-card_active");
  $("#third-25").removeClass("catalog-shoping-card_active");
  $("#fourth-25").removeClass("catalog-shoping-card_active");
  $("#five-25").removeClass("catalog-shoping-card_active");
  $("#six-25").removeClass("catalog-shoping-card_active");
  $("#seven-25").removeClass("catalog-shoping-card_active");
  $("#eight-25").removeClass("catalog-shoping-card_active");
})

$(".psb-tu-2550").click(function() {
  $("#first-25").removeClass("catalog-shoping-card_active");
  $("#second-25").addClass("catalog-shoping-card_active");
  $("#third-25").removeClass("catalog-shoping-card_active");
  $("#fourth-25").removeClass("catalog-shoping-card_active");
  $("#five-25").removeClass("catalog-shoping-card_active");
  $("#six-25").removeClass("catalog-shoping-card_active");
  $("#seven-25").removeClass("catalog-shoping-card_active");
  $("#eight-25").removeClass("catalog-shoping-card_active");
})

$(".psb-tu-2580").click(function() {
  $("#first-25").removeClass("catalog-shoping-card_active");
  $("#second-25").removeClass("catalog-shoping-card_active");
  $("#third-25").addClass("catalog-shoping-card_active");
  $("#fourth-25").removeClass("catalog-shoping-card_active");
  $("#five-25").removeClass("catalog-shoping-card_active");
  $("#six-25").removeClass("catalog-shoping-card_active");
  $("#seven-25").removeClass("catalog-shoping-card_active");
  $("#eight-25").removeClass("catalog-shoping-card_active");
})

$(".psb-tu-25100").click(function() {
  $("#first-25").removeClass("catalog-shoping-card_active");
  $("#second-25").removeClass("catalog-shoping-card_active");
  $("#third-25").removeClass("catalog-shoping-card_active");
  $("#fourth-25").addClass("catalog-shoping-card_active");
  $("#five-25").removeClass("catalog-shoping-card_active");
  $("#six-25").removeClass("catalog-shoping-card_active");
  $("#seven-25").removeClass("catalog-shoping-card_active");
  $("#eight-25").removeClass("catalog-shoping-card_active");
})

$(".psb-gost-2530").click(function() {
  $("#first-25").removeClass("catalog-shoping-card_active");
  $("#second-25").removeClass("catalog-shoping-card_active");
  $("#third-25").removeClass("catalog-shoping-card_active");
  $("#fourth-25").removeClass("catalog-shoping-card_active");
  $("#five-25").addClass("catalog-shoping-card_active");
  $("#six-25").removeClass("catalog-shoping-card_active");
  $("#seven-25").removeClass("catalog-shoping-card_active");
  $("#eight-25").removeClass("catalog-shoping-card_active");
})

$(".psb-gost-2550").click(function() {
  $("#first-25").removeClass("catalog-shoping-card_active");
  $("#second-25").removeClass("catalog-shoping-card_active");
  $("#third-25").removeClass("catalog-shoping-card_active");
  $("#fourth-25").removeClass("catalog-shoping-card_active");
  $("#five-25").removeClass("catalog-shoping-card_active");
  $("#six-25").addClass("catalog-shoping-card_active");
  $("#seven-25").removeClass("catalog-shoping-card_active");
  $("#eight-25").removeClass("catalog-shoping-card_active");
})

$(".psb-gost-2580").click(function() {
  $("#first-25").removeClass("catalog-shoping-card_active");
  $("#second-25").removeClass("catalog-shoping-card_active");
  $("#third-25").removeClass("catalog-shoping-card_active");
  $("#fourth-25").removeClass("catalog-shoping-card_active");
  $("#five-25").removeClass("catalog-shoping-card_active");
  $("#six-25").removeClass("catalog-shoping-card_active");
  $("#seven-25").addClass("catalog-shoping-card_active");
  $("#eight-25").removeClass("catalog-shoping-card_active");
})

$(".psb-gost-25100").click(function() {
  $("#first-25").removeClass("catalog-shoping-card_active");
  $("#second-25").removeClass("catalog-shoping-card_active");
  $("#third-25").removeClass("catalog-shoping-card_active");
  $("#fourth-25").removeClass("catalog-shoping-card_active");
  $("#five-25").removeClass("catalog-shoping-card_active");
  $("#six-25").removeClass("catalog-shoping-card_active");
  $("#seven-25").removeClass("catalog-shoping-card_active");
  $("#eight-25").addClass("catalog-shoping-card_active");
})

// Блок отвечает за поведения класса .catalog-shoping-card-left-side (пол)
$(".psb-tu-3530").click(function() {
  $(".psb-tu-3530").addClass("catalog-shoping-card_active");
  $(".psb-tu-3550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-3580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-35100").removeClass("catalog-shoping-card_active");
  $(".psb-super-3530").removeClass("catalog-shoping-card_active");
  $(".psb-super-3550").removeClass("catalog-shoping-card_active");
  $(".psb-super-3580").removeClass("catalog-shoping-card_active");
  $(".psb-super-35100").removeClass("catalog-shoping-card_active");
  $("#line-35").addClass("one");
  $("#line-35").removeClass("two");
  $("#line-35").removeClass("three");
  $("#line-35").removeClass("four");
  $("#line-35").removeClass("five");
  $("#line-35").removeClass("six");
  $("#line-35").removeClass("seven");
  $("#line-35").removeClass("eight");
})

$(".psb-tu-3550").click(function() {
  $(".psb-tu-3550").addClass("catalog-shoping-card_active");
  $(".psb-tu-3530").removeClass("catalog-shoping-card_active");
  $(".psb-tu-3580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-35100").removeClass("catalog-shoping-card_active");
  $(".psb-super-3530").removeClass("catalog-shoping-card_active");
  $(".psb-super-3550").removeClass("catalog-shoping-card_active");
  $(".psb-super-3580").removeClass("catalog-shoping-card_active");
  $(".psb-super-35100").removeClass("catalog-shoping-card_active");
  $("#line-35").addClass("two");
  $("#line-35").removeClass("one");
  $("#line-35").removeClass("three");
  $("#line-35").removeClass("four");
  $("#line-35").removeClass("five");
  $("#line-35").removeClass("six");
  $("#line-35").removeClass("seven");
  $("#line-35").removeClass("eight");
})

$(".psb-tu-3580").click(function() {
  $(".psb-tu-3580").addClass("catalog-shoping-card_active");
  $(".psb-tu-3550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-3530").removeClass("catalog-shoping-card_active");
  $(".psb-tu-35100").removeClass("catalog-shoping-card_active");
  $(".psb-super-3530").removeClass("catalog-shoping-card_active");
  $(".psb-super-3550").removeClass("catalog-shoping-card_active");
  $(".psb-super-3580").removeClass("catalog-shoping-card_active");
  $(".psb-super-35100").removeClass("catalog-shoping-card_active");
  $("#line-35").addClass("three");
  $("#line-35").removeClass("two");
  $("#line-35").removeClass("one");
  $("#line-35").removeClass("four");
  $("#line-35").removeClass("five");
  $("#line-35").removeClass("six");
  $("#line-35").removeClass("seven");
  $("#line-35").removeClass("eight");
})

$(".psb-tu-35100").click(function() {
  $(".psb-tu-35100").addClass("catalog-shoping-card_active");
  $(".psb-tu-3550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-3580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-3530").removeClass("catalog-shoping-card_active");
  $(".psb-super-3530").removeClass("catalog-shoping-card_active");
  $(".psb-super-3550").removeClass("catalog-shoping-card_active");
  $(".psb-super-3580").removeClass("catalog-shoping-card_active");
  $(".psb-super-35100").removeClass("catalog-shoping-card_active");
  $("#line-35").addClass("four");
  $("#line-35").removeClass("two");
  $("#line-35").removeClass("three");
  $("#line-35").removeClass("one");
  $("#line-35").removeClass("five");
  $("#line-35").removeClass("six");
  $("#line-35").removeClass("seven");
  $("#line-35").removeClass("eight");
})

$(".psb-super-3530").click(function() {
  $(".psb-super-3530").addClass("catalog-shoping-card_active");
  $(".psb-tu-3550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-3580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-3530").removeClass("catalog-shoping-card_active");
  $(".psb-tu-35100").removeClass("catalog-shoping-card_active");
  $(".psb-super-3550").removeClass("catalog-shoping-card_active");
  $(".psb-super-3580").removeClass("catalog-shoping-card_active");
  $(".psb-super-35100").removeClass("catalog-shoping-card_active");
  $("#line-35").addClass("five");
  $("#line-35").removeClass("two");
  $("#line-35").removeClass("three");
  $("#line-35").removeClass("one");
  $("#line-35").removeClass("four");
  $("#line-35").removeClass("six");
  $("#line-35").removeClass("seven");
  $("#line-35").removeClass("eight");
})

$(".psb-super-3550").click(function() {
  $(".psb-super-3550").addClass("catalog-shoping-card_active");
  $(".psb-tu-3550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-3580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-3530").removeClass("catalog-shoping-card_active");
  $(".psb-tu-35100").removeClass("catalog-shoping-card_active");
  $(".psb-super-3530").removeClass("catalog-shoping-card_active");
  $(".psb-super-3580").removeClass("catalog-shoping-card_active");
  $(".psb-super-35100").removeClass("catalog-shoping-card_active");
  $("#line-35").addClass("six");
  $("#line-35").removeClass("two");
  $("#line-35").removeClass("three");
  $("#line-35").removeClass("one");
  $("#line-35").removeClass("four");
  $("#line-35").removeClass("five");
  $("#line-35").removeClass("seven");
  $("#line-35").removeClass("eight");
})

$(".psb-super-3580").click(function() {
  $(".psb-super-3580").addClass("catalog-shoping-card_active");
  $(".psb-tu-3550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-3580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-3530").removeClass("catalog-shoping-card_active");
  $(".psb-tu-35100").removeClass("catalog-shoping-card_active");
  $(".psb-super-3530").removeClass("catalog-shoping-card_active");
  $(".psb-super-3550").removeClass("catalog-shoping-card_active");
  $(".psb-super-35100").removeClass("catalog-shoping-card_active");
  $("#line-35").addClass("seven");
  $("#line-35").removeClass("two");
  $("#line-35").removeClass("three");
  $("#line-35").removeClass("one");
  $("#line-35").removeClass("four");
  $("#line-35").removeClass("five");
  $("#line-35").removeClass("six");
  $("#line-35").removeClass("eight");
})

$(".psb-super-35100").click(function() {
  $(".psb-super-35100").addClass("catalog-shoping-card_active");
  $(".psb-tu-3550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-3580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-3530").removeClass("catalog-shoping-card_active");
  $(".psb-tu-35100").removeClass("catalog-shoping-card_active");
  $(".psb-super-3530").removeClass("catalog-shoping-card_active");
  $(".psb-super-3550").removeClass("catalog-shoping-card_active");
  $(".psb-super-3580").removeClass("catalog-shoping-card_active");
  $("#line-35").addClass("eight");
  $("#line-35").removeClass("two");
  $("#line-35").removeClass("three");
  $("#line-35").removeClass("one");
  $("#line-35").removeClass("four");
  $("#line-35").removeClass("five");
  $("#line-35").removeClass("six");
  $("#line-35").removeClass("seven");
})
// Блок отвечает за поведение класса .catalog-shoping-card-right-side (пол)
$(".psb-tu-3530").click(function() {
  $("#first-35").addClass("catalog-shoping-card_active");
  $("#second-35").removeClass("catalog-shoping-card_active");
  $("#third-35").removeClass("catalog-shoping-card_active");
  $("#fourth-35").removeClass("catalog-shoping-card_active");
  $("#five-35").removeClass("catalog-shoping-card_active");
  $("#six-35").removeClass("catalog-shoping-card_active");
  $("#seven-35").removeClass("catalog-shoping-card_active");
  $("#eight-35").removeClass("catalog-shoping-card_active");
})

$(".psb-tu-3550").click(function() {
  $("#first-35").removeClass("catalog-shoping-card_active");
  $("#second-35").addClass("catalog-shoping-card_active");
  $("#third-35").removeClass("catalog-shoping-card_active");
  $("#fourth-35").removeClass("catalog-shoping-card_active");
  $("#five-35").removeClass("catalog-shoping-card_active");
  $("#six-35").removeClass("catalog-shoping-card_active");
  $("#seven-35").removeClass("catalog-shoping-card_active");
  $("#eight-35").removeClass("catalog-shoping-card_active");
})

$(".psb-tu-3580").click(function() {
  $("#first-35").removeClass("catalog-shoping-card_active");
  $("#second-35").removeClass("catalog-shoping-card_active");
  $("#third-35").addClass("catalog-shoping-card_active");
  $("#fourth-35").removeClass("catalog-shoping-card_active");
  $("#five-35").removeClass("catalog-shoping-card_active");
  $("#six-35").removeClass("catalog-shoping-card_active");
  $("#seven-35").removeClass("catalog-shoping-card_active");
  $("#eight-35").removeClass("catalog-shoping-card_active");
})

$(".psb-tu-35100").click(function() {
  $("#first-35").removeClass("catalog-shoping-card_active");
  $("#second-35").removeClass("catalog-shoping-card_active");
  $("#third-35").removeClass("catalog-shoping-card_active");
  $("#fourth-35").addClass("catalog-shoping-card_active");
  $("#five-35").removeClass("catalog-shoping-card_active");
  $("#six-35").removeClass("catalog-shoping-card_active");
  $("#seven-35").removeClass("catalog-shoping-card_active");
  $("#eight-35").removeClass("catalog-shoping-card_active");
})

$(".psb-super-3530").click(function() {
  $("#first-35").removeClass("catalog-shoping-card_active");
  $("#second-35").removeClass("catalog-shoping-card_active");
  $("#third-35").removeClass("catalog-shoping-card_active");
  $("#fourth-35").removeClass("catalog-shoping-card_active");
  $("#five-35").addClass("catalog-shoping-card_active");
  $("#six-35").removeClass("catalog-shoping-card_active");
  $("#seven-35").removeClass("catalog-shoping-card_active");
  $("#eight-35").removeClass("catalog-shoping-card_active");
})

$(".psb-super-3550").click(function() {
  $("#first-35").removeClass("catalog-shoping-card_active");
  $("#second-35").removeClass("catalog-shoping-card_active");
  $("#third-35").removeClass("catalog-shoping-card_active");
  $("#fourth-35").removeClass("catalog-shoping-card_active");
  $("#five-35").removeClass("catalog-shoping-card_active");
  $("#six-35").addClass("catalog-shoping-card_active");
  $("#seven-35").removeClass("catalog-shoping-card_active");
  $("#eight-35").removeClass("catalog-shoping-card_active");
})

$(".psb-super-3580").click(function() {
  $("#first-35").removeClass("catalog-shoping-card_active");
  $("#second-35").removeClass("catalog-shoping-card_active");
  $("#third-35").removeClass("catalog-shoping-card_active");
  $("#fourth-35").removeClass("catalog-shoping-card_active");
  $("#five-35").removeClass("catalog-shoping-card_active");
  $("#six-35").removeClass("catalog-shoping-card_active");
  $("#seven-35").addClass("catalog-shoping-card_active");
  $("#eight-35").removeClass("catalog-shoping-card_active");
})

$(".psb-super-35100").click(function() {
  $("#first-35").removeClass("catalog-shoping-card_active");
  $("#second-35").removeClass("catalog-shoping-card_active");
  $("#third-35").removeClass("catalog-shoping-card_active");
  $("#fourth-35").removeClass("catalog-shoping-card_active");
  $("#five-35").removeClass("catalog-shoping-card_active");
  $("#six-35").removeClass("catalog-shoping-card_active");
  $("#seven-35").removeClass("catalog-shoping-card_active");
  $("#eight-35").addClass("catalog-shoping-card_active");
})

// Блок отвечает за поведения класса .catalog-shoping-card-left-side (дом)
$(".psb-tu-1550").click(function() {
  $(".psb-tu-1550").addClass("catalog-shoping-card_active");
  $(".psb-tu-1580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-15100").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1530").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1550").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1580").removeClass("catalog-shoping-card_active");
  $(".psb-gost-15100").removeClass("catalog-shoping-card_active");
  $("#line-15").addClass("one");
  $("#line-15").removeClass("two");
  $("#line-15").removeClass("three");
  $("#line-15").removeClass("four");
  $("#line-15").removeClass("five");
  $("#line-15").removeClass("six");
  $("#line-15").removeClass("seven");
})

$(".psb-tu-1580").click(function() {
  $(".psb-tu-1580").addClass("catalog-shoping-card_active");
  $(".psb-tu-1550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-15100").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1530").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1550").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1580").removeClass("catalog-shoping-card_active");
  $(".psb-gost-15100").removeClass("catalog-shoping-card_active");
  $("#line-15").addClass("two");
  $("#line-15").removeClass("one");
  $("#line-15").removeClass("three");
  $("#line-15").removeClass("four");
  $("#line-15").removeClass("five");
  $("#line-15").removeClass("six");
  $("#line-15").removeClass("seven");
})

$(".psb-tu-15100").click(function() {
  $(".psb-tu-15100").addClass("catalog-shoping-card_active");
  $(".psb-tu-1550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-1580").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1530").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1550").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1580").removeClass("catalog-shoping-card_active");
  $(".psb-gost-15100").removeClass("catalog-shoping-card_active");
  $("#line-15").addClass("three");
  $("#line-15").removeClass("two");
  $("#line-15").removeClass("one");
  $("#line-15").removeClass("four");
  $("#line-15").removeClass("five");
  $("#line-15").removeClass("six");
  $("#line-15").removeClass("seven");
})

$(".psb-gost-1530").click(function() {
  $(".psb-gost-1530").addClass("catalog-shoping-card_active");
  $(".psb-tu-1550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-1580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-15100").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1550").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1580").removeClass("catalog-shoping-card_active");
  $(".psb-gost-15100").removeClass("catalog-shoping-card_active");
  $("#line-15").addClass("four");
  $("#line-15").removeClass("two");
  $("#line-15").removeClass("three");
  $("#line-15").removeClass("one");
  $("#line-15").removeClass("five");
  $("#line-15").removeClass("six");
  $("#line-15").removeClass("seven");
})

$(".psb-gost-1550").click(function() {
  $(".psb-gost-1550").addClass("catalog-shoping-card_active");
  $(".psb-tu-1550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-1580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-15100").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1530").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1580").removeClass("catalog-shoping-card_active");
  $(".psb-gost-15100").removeClass("catalog-shoping-card_active");
  $("#line-15").addClass("five");
  $("#line-15").removeClass("two");
  $("#line-15").removeClass("three");
  $("#line-15").removeClass("one");
  $("#line-15").removeClass("four");
  $("#line-15").removeClass("six");
  $("#line-15").removeClass("seven");
})

$(".psb-gost-1580").click(function() {
  $(".psb-gost-1580").addClass("catalog-shoping-card_active");
  $(".psb-tu-1550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-1580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-15100").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1530").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1550").removeClass("catalog-shoping-card_active");
  $(".psb-gost-15100").removeClass("catalog-shoping-card_active");
  $("#line-15").addClass("six");
  $("#line-15").removeClass("two");
  $("#line-15").removeClass("three");
  $("#line-15").removeClass("one");
  $("#line-15").removeClass("four");
  $("#line-15").removeClass("five");
  $("#line-15").removeClass("seven");
})

$(".psb-gost-15100").click(function() {
  $(".psb-gost-15100").addClass("catalog-shoping-card_active");
  $(".psb-tu-1550").removeClass("catalog-shoping-card_active");
  $(".psb-tu-1580").removeClass("catalog-shoping-card_active");
  $(".psb-tu-15100").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1530").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1550").removeClass("catalog-shoping-card_active");
  $(".psb-gost-1580").removeClass("catalog-shoping-card_active");
  $("#line-15").addClass("seven");
  $("#line-15").removeClass("two");
  $("#line-15").removeClass("three");
  $("#line-15").removeClass("one");
  $("#line-15").removeClass("four");
  $("#line-15").removeClass("five");
  $("#line-15").removeClass("six");
})

// Блок отвечает за поведение класса .catalog-shoping-card-right-side (дом)
$(".psb-tu-1550").click(function() {
  $("#first-15").addClass("catalog-shoping-card_active");
  $("#second-15").removeClass("catalog-shoping-card_active");
  $("#third-15").removeClass("catalog-shoping-card_active");
  $("#fourth-15").removeClass("catalog-shoping-card_active");
  $("#five-15").removeClass("catalog-shoping-card_active");
  $("#six-15").removeClass("catalog-shoping-card_active");
  $("#seven-15").removeClass("catalog-shoping-card_active");
})

$(".psb-tu-1580").click(function() {
  $("#first-15").removeClass("catalog-shoping-card_active");
  $("#second-15").addClass("catalog-shoping-card_active");
  $("#third-15").removeClass("catalog-shoping-card_active");
  $("#fourth-15").removeClass("catalog-shoping-card_active");
  $("#five-15").removeClass("catalog-shoping-card_active");
  $("#six-15").removeClass("catalog-shoping-card_active");
  $("#seven-15").removeClass("catalog-shoping-card_active");
})

$(".psb-tu-15100").click(function() {
  $("#first-15").removeClass("catalog-shoping-card_active");
  $("#second-15").removeClass("catalog-shoping-card_active");
  $("#third-15").addClass("catalog-shoping-card_active");
  $("#fourth-15").removeClass("catalog-shoping-card_active");
  $("#five-15").removeClass("catalog-shoping-card_active");
  $("#six-15").removeClass("catalog-shoping-card_active");
  $("#seven-15").removeClass("catalog-shoping-card_active");
})

$(".psb-gost-1530").click(function() {
  $("#first-15").removeClass("catalog-shoping-card_active");
  $("#second-15").removeClass("catalog-shoping-card_active");
  $("#third-15").removeClass("catalog-shoping-card_active");
  $("#fourth-15").addClass("catalog-shoping-card_active");
  $("#five-15").removeClass("catalog-shoping-card_active");
  $("#six-15").removeClass("catalog-shoping-card_active");
  $("#seven-15").removeClass("catalog-shoping-card_active");
})

$(".psb-gost-1550").click(function() {
  $("#first-15").removeClass("catalog-shoping-card_active");
  $("#second-15").removeClass("catalog-shoping-card_active");
  $("#third-15").removeClass("catalog-shoping-card_active");
  $("#fourth-15").removeClass("catalog-shoping-card_active");
  $("#five-15").addClass("catalog-shoping-card_active");
  $("#six-15").removeClass("catalog-shoping-card_active");
  $("#seven-15").removeClass("catalog-shoping-card_active");
})

$(".psb-gost-1580").click(function() {
  $("#first-15").removeClass("catalog-shoping-card_active");
  $("#second-15").removeClass("catalog-shoping-card_active");
  $("#third-15").removeClass("catalog-shoping-card_active");
  $("#fourth-15").removeClass("catalog-shoping-card_active");
  $("#five-15").removeClass("catalog-shoping-card_active");
  $("#six-15").addClass("catalog-shoping-card_active");
  $("#seven-15").removeClass("catalog-shoping-card_active");
})

$(".psb-gost-15100").click(function() {
  $("#first-15").removeClass("catalog-shoping-card_active");
  $("#second-15").removeClass("catalog-shoping-card_active");
  $("#third-15").removeClass("catalog-shoping-card_active");
  $("#fourth-15").removeClass("catalog-shoping-card_active");
  $("#five-15").removeClass("catalog-shoping-card_active");
  $("#six-15").removeClass("catalog-shoping-card_active");
  $("#seven-15").addClass("catalog-shoping-card_active");
})