$(function(){
    var $body = $('body'),
        $pinEl = $('#pinterest');''

    $.ajax($pinEl.data('image-json'), {
        dataType: 'json',
        success: processImageJSON
    })

    // processImageJSON
    // - res: the response returned from the Ajax request
    //
    // Create a transparent image container with no height/width (so it's hidden
    // from users and doesn't affect document flow) and append it to the <body>
    // as the first child. Then write each image tag to the image container,
    // including the src and alt attributes.
    //
    function processImageJSON(res) {
        var $imgContainer = $('<div>').css({height: 0, opacity:0, width:0, 'pointer-events':'none'});
        $body.prepend($imgContainer);

        for (var i = 0; i < res.images.length; i++) {
            $('<img>')
                .attr('src', res.images[i].url)
                .attr('alt', res.images[i].alt)
                .css({height: 0, width: 0})
                .appendTo($imgContainer);
        }
    }
})
