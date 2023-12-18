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