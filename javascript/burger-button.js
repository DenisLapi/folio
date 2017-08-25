var clickDelay      = 500,
    clickDelayTimer = null;

$('.burger-click-region').on('click', function () {

  if(clickDelayTimer === null) {

    var $burger = $(this);
    $burger.toggleClass('active');

    $("#profile-details").css("display","flex");


    if(!$burger.hasClass('active')) {
      $burger.addClass('closing');
      $("#profile-details .profile-image-box").addClass("profile-animation-fly-out");
      $("#profile-details .download-link").addClass("profile-animation-fly-out");
      $("#profile-details h1").addClass("profile-animation-fly-out");
      $("#profile-details p").addClass("profile-animation-fly-out");
      setTimeout(function() {
        $("#profile-details").css("display","none");
        $("#profile-details .profile-image-box").removeClass("profile-animation-fly-out");
        $("#profile-details .download-link").removeClass("profile-animation-fly-out");
        $("#profile-details h1").removeClass("profile-animation-fly-out");
        $("#profile-details p").removeClass("profile-animation-fly-out");
      }, 600);
    }

    clickDelayTimer = setTimeout(function () {
      $burger.removeClass('closing');
      clearTimeout(clickDelayTimer);
      clickDelayTimer = null;
    }, clickDelay);
  }
});
