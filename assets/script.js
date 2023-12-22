// Display current day
$('#currentDay').text(dayjs().format('MMM D, YYYY'));

// Time-block color-coded
var colorCode = function() {
$('.time-block').each(function () {
  var timeBlock = parseInt($(this).attr("id").split("-")[1]);
  var time = dayjs().format('HH');
  if (timeBlock < time) {
    $(this).addClass('past');
  } else if (time == timeBlock) {
    $(this).removeClass('past');
    $(this).addClass('present');
  } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
});
}

colorCode();
var textInp
var textStorage

// save text into local storage

$('.saveBtn').on("click", function () {
  textInp = $(this).siblings(".description").val(); 
  textStorage = $(this).parent().attr("id");
  localStorage.setItem(textStorage, textInp);
});

// persist with saved text
function loadedText() {
  $('.time-block').each(function () {
    var stored = $(this).attr('id');
    var retrieve = localStorage.getItem(stored);
    if (retrieve) {
      $(this).find('.description').val(retrieve);
    }
  });
}

window.onload =  loadedText;

// Clear saved texts at end of day
function cleanSlate() {
  var endOfDay = dayjs().set('hour', 19);
  var atMidnight = endOfDay.diff(dayjs());
  
  setTimeout(function() {
    localStorage.clear();
  }, atMidnight);

}

cleanSlate();