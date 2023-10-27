//header with current day & time
var today = dayjs();
var currentDay = today.format('[Today is] MMMM D, YYYY!'); 
$('#currentDay').text(currentDay);

function colorChange () {
  //gets current hour
  var currentHour = dayjs().format('h')
  console.log(currentHour);
  //changes time-block color to past, present, or future depending on currentHour
    $(".time-block").each(function () {
       var blockHour = parseInt($(this).attr("id"));
  
      if (currentHour == blockHour) {
        $(this).addClass("present");
  
      } else if (currentHour < blockHour) {
        $(this).addClass("future");
  
      } else if (currentHour > blockHour) {
        $(this).addClass("past");
      }
    })
  }

//get the time and description of the toDO list
  var toDo = [];
  function add (newToDo) {
  toDo.push(newToDo)
  //puts items into a string in local storage
  localStorage.setItem("toDo", JSON.stringify(toDo));
}

//retrieve and parse the items from local storage to console log 
var getToDo = localStorage.getItem("toDo");
console.log("getToDo: ", JSON.parse(getToDo));

//make another function to get and build todos.
//make sure to handle the case when there are no todos in local storage b/c it will return null
//(retrieve.description); check jquery for loop
// function getToDos () {
//   if (toDo == null) {
//     return();
//   }
// }


//toDo list is saved into local storage when save btn is clicked
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  add({
    time: $(this).parent().attr("id"),
    description: $(this).siblings(".description").val(),
  })
colorChange();
//call function here
}) 

colorChange();
//and call here

