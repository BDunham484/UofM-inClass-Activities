// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
var today = dayjs();
$('#1a').text(today.format('MMM d, YYYY'));
// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
var then = dayjs('2027-01-01')
$('#2a').text(then.format('dddd'));
// TODO: 3. What is the current time in the format: hours:minutes:seconds
var time = dayjs()
$('#3a').text(time.format('h:mm:ss'))
// TODO: 4. What is the current Unix timestamp?
var unix = dayjs();
$('#4a').text(unix.unix());
// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var uts = dayjs('1318781876');
$('#5a').text(uts.toString('MMM d, YYYY h:mm:ss'));
// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)
var later = dayjs('2027-05-04');
$('#6a').text(today.diff(later, 'd'));

