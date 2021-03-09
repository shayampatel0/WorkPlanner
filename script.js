$(document).ready(function () {
    
    var $hour9 = $("#H9");
    var $hour10 = $("#H10");
    var $hour11 = $("#H11");
    var $hour12 = $("#H12");
    var $hour13 = $("#H13");
    var $hour14 = $("#H14");
    var $hour15 = $("#H15");
    var $hour16 = $("#H16");
    var $hour17 = $("#H17");
    var now = moment();


    
    var currDate = now.format("MM/DD/YYYY");
    console.log(currDate);
    // Set date 
    $("#currentDate").text("The date today is: " + currDate + " Start if off right!");

   //     var currentHr = moment().hour();

    // $(".description").each(function (index) {
    //     // console.log($(this).attr("id"));
    //     console.log(currentHr);
    //     var textareaHour = parseInt($(this).attr("id"))
    //     if (textareaHour === currentHr) {
    //         $(this).addClass("current");
    //     }
    //     if (textareaHour < currentHr) {
    //         $(this).addClass("past");
    //     }
    //     if (textareaHour > currentHr) {
    //         $(this).addClass("future");
    //     }
    // });
    
    $("button").on("click", function () {
        
        //setting items in the local storage
        localStorage.setItem("9AM", ($hour9.val()))
        localStorage.setItem("10AM", ($hour10.val()))
        localStorage.setItem("11AM", ($hour11.val()))
        localStorage.setItem("12AM", ($hour12.val()))
        localStorage.setItem("13PM", ($hour13.val()))
        localStorage.setItem("14PM", ($hour14.val()))
        localStorage.setItem("15PM", ($hour15.val()))
        localStorage.setItem("16PM", ($hour16.val()))
        localStorage.setItem("17PM", ($hour17.val()))

    })

    //getting the content stored and sending to the screen. When page is refreshed content will stay
    $("#H9").append(localStorage.getItem("9AM"));
    $("#H10").append(localStorage.getItem("10AM"));
    $("#H11").append(localStorage.getItem("11AM"));
    $("#H12").append(localStorage.getItem("12AM"));
    $("#H13").append(localStorage.getItem("13PM"));
    $("#H14").append(localStorage.getItem("14PM"));
    $("#H15").append(localStorage.getItem("15PM"));
    $("#H16").append(localStorage.getItem("16PM"));
    $("#H17").append(localStorage.getItem("17PM"));

});

