$(".language_item").click(function () {
  $(this).parent(".language_picker").toggleClass("checked");
});

// progres circles
function drowProgress() {
  let $circleProgress = $(".circle_progress_wrap");

  if ($circleProgress) {
    $circleProgress.each(function (index, item) {
      let $circle = $(item).find(".progress_bar");
      let $val = parseInt($circle.attr("data-val"));

      if (isNaN($val)) {
        $val = 0;
      } else {
        let r = $circle.attr("r");
        let c = Math.PI * (r * 2);

        if ($val < 0) {
          $val = 0;
        }
        if ($val > 100) {
          $val = 100;
        }

        let pct = ((100 - $val) / 100) * c;
        $circle.css({ strokeDashoffset: pct });
      }
    });
  } else return;
}

drowProgress();

// Menu
const mobileMenuButton = $("#burger_toggle");

mobileMenuButton.click(function () {
  $(this).toggleClass("active");
  $("#mob_menu").toggleClass("active");
});

$(window).on("resize", function () {
  let window = $(this); //this = window
  console.log(window.width());
  if (window.width() >= 850 && mobileMenuButton.hasClass("active")) {
    mobileMenuButton.removeClass("active");
    $('#mob_menu').removeClass("active");
  }
});

