$(document).ready(function(){
  console.log('hey')
// grab an element
  var myElement = document.querySelector("#header-headroom");
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(myElement);
  // initialise
  headroom.init();

})
