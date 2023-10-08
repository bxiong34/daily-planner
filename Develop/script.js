var saveButton = document.getElementById("save");
var time = document.getElementById("col-2 col-md-1 hour text-center py-3")
var description = document.getElementById("col-8 col-md-10 description")

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
//   saveButton.addEventListener("click", (event) {
//   event.preventDefault()
//   localStorage.setItem("col-2 col-md-1 hour text-center py-3", time);
//   localStorage.setItem("col-8 col-md-10 description", description);
// });
  

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

  // HOUR DIVS
// var hour9El = document.querySelector('#hour-9')
// // var hour10El = document.querySelector('#hour-10')
// // var hour11El = document.querySelector('#hour-11')
// // var hour12El = document.querySelector('#hour-12')
// // var hour1El = document.querySelector('#hour-1')
// // var hour2El = document.querySelector('#hour-2')
// // var hour3El = document.querySelector('#hour-3')
// // var hour4El = document.querySelector('#hour-4')
// // var hour5El = document.querySelector('#hour-5')


// // HOUR BUTTONS
// var saveBtn9amEl = document.querySelector('#save-btn-9am')
// // var saveBtn10amEl = document.querySelector('#save-btn-10am')
// // var saveBtn11amEl = document.querySelector('#save-btn-11am')
// // var saveBtn12amEl = document.querySelector('#save-btn-12pm')
// // var saveBtn1pmEl = document.querySelector('#save-btn-1pm')
// // var saveBtn2pmEl = document.querySelector('#save-btn-2pm')
// // var saveBtn3pmEl = document.querySelector('#save-btn-3pm')
// // var saveBtn4pmEl = document.querySelector('#save-btn-4pm')
// // var saveBtn5pmEl = document.querySelector('#save-btn-5pm')

// // 9AM CLICK
// saveBtn9amEl.addEventListener('click', (event) => {
//   // prevent refresh
//   event.preventDefault()
//   // reassign hour9El to child element of textarea 
//   hour9El = document.querySelector('#hour-9 > textarea')
//   // save value inside of localStorage from reassigned element
//   localStorage.setItem('hour9am', hour9El.value)
//   // then set the textContent to the value so it stays after refresh
//   hour9El.textContent = localStorage.getItem('hour9am');
// })


//header with current day & time
var today = dayjs();
var currentDay = today.format('[Today is] MMM D YYYY, h:mm a.');
$('#currentDay').text(currentDay);


$("row time-block").each(function () {

    var timeDiv = $(this).attr("id").val();

    if (today == timeDiv) {
      $(this).addClass("present");

    } else if (today < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");

    } else if (today > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
});


