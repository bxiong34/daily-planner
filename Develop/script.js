//header with current day & time
var today = dayjs();
var currentDay = today.format('[Today is] MMM D, YYYY! 🌼'); 
// [and the time is] h:mm:ss A.');
$('#currentDay').text(currentDay);


//toDo list is saved into local storage when save btn is clicked
 $(".saveBtn").on("click", function (event) {
  event.preventDefault();
//get the time and description of the toDO list
  var toDo = {
    time: $(this).parent().attr("id"),
    description: $(this).siblings(".description").val(),
  };
//puts items into a string in local storage
  localStorage.setItem("toDo", JSON.stringify(toDo));

//retrieve items and  parse the items from local storage to console log
var retrieve = localStorage.getItem("toDo");
console.log("retrieve: ", (window.JSON.parse(retrieve)));
 })

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //


//gets current hour
var currentHour = dayjs().format('h')
console.log(currentHour);
//changes time-block color to past, present, or future depending on currentHour
  $(".time-block").each(function () {
     var blockHour = parseInt($(this).attr("id"));

    if (currentHour == blockHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");

    } else if (currentHour < blockHour) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");

    } else if (currentHour > blockHour) {
      $(this).removeClass("present");
      $(this).addClass("past");
      $(this).removeClass("future");
    }
 
  })
