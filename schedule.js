function calculate_time(start, end) {
  var timeCounter = 0;

  while (start != end) {
    start++;
    timeCounter++;

    if (start % 100 == 60) {
      start -= 60; 
      start += 100; 
    }

    if (start / 100 == 13) {
      start -= 1300; 
      start += 100;
    }

  }

  return timeCounter;

}



module.exports = {
  main_func: main_func
};
