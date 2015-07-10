$(document).ready(function() {

  var sides = ["left", "right"];

  for (var i = 0; i < sides.length; ++i) {
      var cSide = sides[i];
      $(".sidebar." + cSide).sidebar({
          side: cSide
      });
  }

  $("a[data-action]").on("click", function() {
      var $this = $(this);
      var action = $this.attr("data-action");
      var side = $this.attr("data-side");
      $(".sidebar." + side).trigger("sidebar:" + action);
      return false;
  });



  $(".add-post").click(function() {
    $('.column-right').toggle("slow");
  });

  $( ".show-column-left" ).click(function() {
    $("aside.column-left").sidebar({side: "left"}).trigger("sidebar:open");
  });

  $(".offline").click(function() {
    $('.messages').toggle("slow");
  });

  $(".name").click(function() {
    $('.user-menu').toggle("slow");
  });
});

          
