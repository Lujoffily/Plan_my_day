<<<<<<< HEAD
  // Display current day
$('#currentDay').text(dayjs().format('MMM D, YYYY'));

// Time-block color-coded
$('.time-block').each(function () {
  var timeBlock = parseInt($(this).attr("id").split("-")[1]);
  var time = dayjs().format('HH');
  if (timeBlock < time) {
    $(this).addClass('past');
  } else if (time === timeBlock) {
    $(this).removeClass('past');
    $(this).addClass('present');
  } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
});

var textInp
var textStorage

// save text into local storage
$('.saveBtn').on("click", function () {
  textInp = $(this).siblings(".description").val(); 
  textStorage = $(this).parent().attr("id");
  localStorage.setItem(textStorage, textInp);
});

=======
// Display current day
$('#currentDay').text(dayjs().format('MMM D, YYYY'));

// Time-block color-coded
var time = dayjs().format('HH:mm:ss');

$('.time-block').each(function () {
  var timeBlock = $(this).attr("id").split("hour")[1];
  var time = dayjs().format('HH:mm:ss');

  if (time < timeBlock) {
    $(this).addClass('past');
    // $(this).removeClass('present');
    // $(this).removeClass('future');
  } else if (time = timeBlock) {
    $(this).removeClass('past');
    $(this).addClass('present');
    // $(this).removeClass('future');
  } else {
    $(this).removeClass('present');
    $(this).addClass('future');
  }
})
>>>>>>> 3cdcce9abf488a421c3222ee5b9304dba2eb1fa6
