// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var saveButtons = $('.saveBtn');
  saveButtons = $('.saveBtn');

  saveButtons.click(function () {
    var clickedButton =$(this);
    var timeBlock = clickedButton.closest('.time-block');
    var timeBlockId = timeBlock.attr('id');
    console.log(timeBlockId);

    var userInput = timeBlock.find('.description').val();
    localStorage.setItem(timeBlockId, userInput);
  });


});

$(function () {
  var currentHour = dayjs().hour() 
  var timeBlock = $('.time-block');
timeBlock.each(function() {
  var timeBlockHour = $(this).attr('id')
  if (currentHour < parseInt($(this).attr('id'))) {
    console.log("comaparingTime")
    $(this).children(".description").addClass('future')
  }
  if (currentHour > parseInt($(this).attr('id'))) {
    $(this).children(".description").addClass('past')
  }
  else {
    $(this).children(".description").addClass('present')
  }

}) 
})

$(function (){
  var ToDoText = $('.description')
  ToDoText.each(function() {
    console.log(localStorage.getItem('1'))
    console.log($(this).parent().attr('id'))
    if (localStorage.getItem($(this).parent().attr('id'))) {
     console.log('we have some data')
     $(this).val(localStorage.getItem($(this).parent().attr('id')))
    }
  })
})
$('#currentDay').text(dayjs().format('DD/MM/YYYY') )

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
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
  //
  // TODO: Add code to display the current date in the header of the page.

