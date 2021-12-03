
//Pulls the current day and displays it within the header//
function currdate () {
    $('#currentDay').text(moment().format("MMMM, Do, YYYY, h:mm a "));

}
// Call the currdate function //
$(currdate);

function colorTimeBlocks() {

    var currentHr = moment().hour();

    $(".time-blocks").each(() =>{
        var blockHr = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHr, currentHr)
    })
}