$(document).ready(function() {
    $("#setting_switch").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        $(this).toggleClass("active");
        $("#settings").toggleClass("active");
    });

    $(document).on("click", function(e) {
        $("#settings").removeClass("active");
    });

    $("#settings").on("click", function(e) {
        e.stopPropagation();
    });
});