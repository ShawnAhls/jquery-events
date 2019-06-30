$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });
    $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });

    $("h2").hover(function() {
        $(this).css("background-color", "#99ccff");
    }, function() {
        $(this).css("background-color", "#ffffff");
    });

    $("p").on("click", function() {
        $(this).css("background-color", "red");
    });

    $("h2").hover(function() {
        $(this).css("font-size", "large");
    }, function() {
        $(this).css("font-size", "1em");
    });

    $("a").hover(function() {
        $("body").css("background-color", "black");
    }, function() {
        $("body").css("background-color", "#eee");
    });
});
