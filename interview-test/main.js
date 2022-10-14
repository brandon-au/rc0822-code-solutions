// function taking 2 numbers as argument
// return object with multiple properties
// arguments included in object
// start is always <= end
// should return total <- add and assign in for loop
// odds <- %% 2 === 0
// evens <- $$ 2 !== 0
// range - array containing all numbers
// average = total divided by range.length

function getRangeReport(start, end) {
  var total = 0;
  var odds = [];
  var evens = [];
  var range = [];
  var average = 0;
  var rangeReport = {
    total: 0,
    odds: [],
    evens: [],
    range: [],
    average: 0
  };
  for (var i = 0; i < range.length; i++) {
    total += range[i];
    rangeReport[total] = total;
    if (range[i] % 2 === 0) {
      odds.push(range[i]);
      rangeReport.push(odds);
    } else {
      evens.push(range[i]);
      rangeReport.push(evens);
    }
    average = (total / range.length);
    rangeReport[average] = average;
  }
  return rangeReport;
}
