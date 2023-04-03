var dateEl = $('#date');
var timeEl = $('#time');

dateEl.text(dayjs().format('MMM d, YYYY'));

var timeInterval = setInterval(function () {
    timeEl.text(dayjs().format('h:mm:ss a'));
}, 1000)
