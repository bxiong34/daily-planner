//header with current day & time
var today = dayjs();
var currentDate = today.format('[Today is] MMMM D, YYYY! h:mm A'); 
$('#currentDate').text(currentDate);

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
  var toDo = JSON.parse(localStorage.getItem("toDo")) || [];
  //loops through the different arrays and keeps saved items on page
  for (var i = 0; i < toDo.length; i++) {
    console.log(toDo[i]);
    var timeBlockEl = document.getElementById(toDo[i].time);
    // console.log(timeBlockEl);
    // console.log(timeBlockEl.children[1]);
    timeBlockEl.children[1].value = toDo[i].description;
  }
//similar to:
  // var oldList = JSON.parse(localStorage.getItem("toDo")) || [];
  // console.log(oldList);

  // if (oldList.length > 0) {
  //   toDo = oldList;
  // } else {
  //   toDo = [];
  // }

  function add (newToDo) {
  toDo.push(newToDo)
  //puts items into a string in local storage
  localStorage.setItem("toDo", JSON.stringify(toDo));
}

//toDo list is saved into local storage when save btn is clicked
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  add({
    time: $(this).parent().attr("id"),
    description: $(this).siblings(".description").val(),
  })
colorChange();
}) 

colorChange();



