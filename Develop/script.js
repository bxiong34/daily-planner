// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

 $(".saveBtn").on("click", function (event) {
  event.preventDefault();

  var toDo = {
    time: $(this).parent().attr("id"),
    description: $(this).siblings(".description").val(),
  };

  localStorage.setItem("toDo", JSON.stringify(toDo));
});

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


//header with current day & time
var today = dayjs();
var currentDay = today.format('[Today is] MMM D YYYY, h:mm a.');
$('#currentDay').text(currentDay);

// var currentHour = dayjs().hour(24).

// $(".time-block").each(function () {
//  let timeDiv = $(this).attr('hour').val();

//     if (currentDay == timeDiv) {
//       $(this).addClass("present");
//       $(this).removeClass("past");
//       $(this).removeClass("future");

//     } else if (currentDay < timeDiv) {
//       $(this).removeClass("present");
//       $(this).removeClass("past");
//       $(this).addClass("future");

//     } else if (currentDay > timeDiv) {
//       $(this).removeClass("present");
//       $(this).addClass("past");
//       $(this).removeClass("future");
//     }
// });