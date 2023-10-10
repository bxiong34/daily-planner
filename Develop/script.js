//header with current day & time
var today = dayjs();
var currentDay = today.format('[Today is] MMMM D, YYYY!'); 
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
 })
//retrieve and parse the items from local storage to console log

  var retrieve = localStorage.getItem("toDo");
console.log("retrieve: ", JSON.parse(retrieve));
//retrieve and keep items from local storage on page
var loadedData = localStorage.getItem(".time-block");
console.log(loadedData);


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
