var scrollingMenu = $(".js-scrolling-menu"),
    journeyBtn = $(".js-journey"),
    pageHeight = $(window).height(),
    pageWidth = $(window).width(),
    pages = [
      "Title",
      "What we do",
      "How we do it",
      "Contact us",
      "Our projects"
    ];

function toggleFloats(index, nextIndex, direction){
  //after leaving section 2
  if(index == 1){
    scrollingMenu.addClass("mod-float").css({ top: ((nextIndex - 1) * 100) + "%"});
  }
  else if(nextIndex == 1) {
    scrollingMenu.removeClass("mod-float").css({ top: "50%"});
  }
  else {
    scrollingMenu.css({ top: ((nextIndex - 1) * 100) + "%"});
  }

  if(index % 2 == 0) {
    scrollingMenu.removeClass("mod-blue");
    journeyBtn.removeClass("mod-blue");
  }
  else {
    scrollingMenu.addClass("mod-blue");
    journeyBtn.addClass("mod-blue");
  }

  journeyBtn.css({ top: (nextIndex * 100) + "%"}).text(pages[nextIndex]);
}

function leanJourneyBtn(e) {
  var marginLeft = -75 + 50 * ((e.pageX / pageWidth) - 0.5),
      marginTop = -50 - 80 * (e.pageY / pageHeight);
  journeyBtn.css({"margin-left": marginLeft, "margin-top": marginTop});
  console.log(marginTop);
}

journeyBtn.on("click", function() {
  $.fn.fullpage.moveSectionDown();
});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  journeyBtn.css({"margin-top": "-90px"});
}
else {
  $("html").on("mousemove", leanJourneyBtn);
}
