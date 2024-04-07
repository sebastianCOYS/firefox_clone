let previous_scroll_position = window.pageYOffset; //after refreshing page(initial) === 0
//window.scrollY === the number of pixels scrolled vertically (the further down, the higher is the value)
// 0 === NOT Scrolled
//1 === scrolled 1px
//
//IGNORE THIS WARNING(not a huge problem and only shows up on firefox) 'This site appears to use a scroll-linked positioning effect. This may...'
//->
//TLDR - Most browsers nowadays use 'Asynchronous panning', that means your scroll effect might not look perfect and could look a little jittery. '
//
window.onscroll = function () {
  let current_scroll_position = window.pageYOffset; //...= 22(for example)
  console.log(window.pageYOffset);
  if (
    previous_scroll_position > current_scroll_position ||
    current_scroll_position < 300
  ) {
    //if you scrolled down -> curr will be bigger than prev so it will go to the 'else' and hide the navbar
    document.getElementById("header_wrapper").style.top = "0";
  } else {
    document.getElementById("header_wrapper").style.top = "-65px"; //because that's the height of the header_wrapper
  }
  previous_scroll_position = current_scroll_position; //changing the prev value to the current_pos value
};

//XX
