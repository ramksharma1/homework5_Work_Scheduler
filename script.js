$(document).ready(function(){
    //Save data from the local storage for each time block
    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
    $("#hour19 .description").val(localStorage.getItem("hour19"));
    $("#hour20 .description").val(localStorage.getItem("hour20"));
    $("#hour21 .description").val(localStorage.getItem("hour21"));

    //Pulls the current day and displays it within the header//
    function currdate () {
        $('#currentDay').text(moment().format("MMMM, Do, YYYY, h:mm a "));

    }
    // Call the currdate function //
    $(currdate);
    
    function saveButton() {
        $(".saveBtn").on("click", function() {
            console.log(this);
            var textInput = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");
            // Saves the items in Storage
            localStorage.setItem(time, textInput);
        })
    }
    // Call the saveButton function //
    $(saveButton);

    function colorTimeBlocks() {

        var currentHr = moment().hour();

        $(".time-blocks").each(function(){
            var blockHr = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHr, currentHr)

            if(blockHr < currentHr) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");

            }
            else if (blockHr > currentHr) {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
            else {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
                
            }

        })

    }
    // Call the colorTimeBlocks function //
    $(colorTimeBlocks);

})