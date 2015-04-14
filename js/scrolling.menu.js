var scrollingMenu = $(".js-scrolling-menu"),
    journeyBtn = $(".js-journey"),
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

  journeyBtn.css({ top: (nextIndex * 100) + "%"}).text(pages[index + 1]);
}

journeyBtn.on("click", function() {
  $.fn.fullpage.moveSectionDown();
});