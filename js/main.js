$(".language_item").click(function () {
  $(this).parent(".language_picker").toggleClass("checked");
});

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
        console.log(r);
        console.log(c);

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
