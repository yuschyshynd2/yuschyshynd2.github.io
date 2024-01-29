// Paper download link events, and other button clicks/user interaction

$(function() {

    // This list of analytics event categories will grow over time.
    var gaCategories = {
        0: "Unspecified",
        1: "Button",
        2: "Video"
    };

    $('[data-ga-action]').on('click', function() {
        categoryAttr = $(this).attr("data-ga-category")
        categoryVal = categoryAttr == null ? 0 : categoryAttr;

        // New event categories from the above gaCategories object should be added as case clauses below.
        switch (categoryVal) {
            case "1":
                categoryVal = 1;
                break;

            case "2":
                categoryVal = 2;
                break;

            // Use "unspecified" category if the data-ga-category value wasn't matched by the above cases
            default:
                categoryVal = 0;
        }

        gaCategory = gaCategories[categoryVal];
        ga('send', 'event', gaCategory, $(this).attr("data-ga-action"), $(this).attr("data-ga-label"));

    });

});
