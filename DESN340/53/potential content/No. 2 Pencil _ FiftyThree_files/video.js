$(function(){

    // --- Video Popup
    var $videoButton = $('.videoPopup');
    var $toolsVideoShield = $('#toolsVideoShield');

    // XXX need to manually animate opacity; fadeIn() won't work!
    $videoButton.animate({
        opacity: 1.0
    }, 'slow');

    // also add a touch handler for the button to give touch feedback:
    // XXX this doesn't work great; TODO FIXME improve!
    $videoButton.bind('touchstart', function (ev) {
        $videoButton.addClass('active');
    });
    $(document).bind('touchend', resetButton);
    $(document).bind('touchcancel', resetButton);
    function resetButton() {
        $videoButton.removeClass('active');
    }

    $videoButton.click(function(event) {
        if ($toolsVideoShield.is(":hidden"))
            $toolsVideoShield.show();

        if ($("#toolsVideo iframe").length == 0) {
            var videoURL = $(event.currentTarget).attr('data-player-url');

            $("#toolsVideo")
                .html('<iframe src="' + videoURL + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                .append('<div id="videoPopupClose" class="video-popup-close"></div>');
        }

        // prevent the default href
        event.preventDefault();
    });

    $toolsVideoShield.click(closeShield);
    $('#videoPopupClose').click(closeShield);

    function closeShield() {
        $toolsVideoShield.hide();
        $("#toolsVideo").empty();
    }
});
