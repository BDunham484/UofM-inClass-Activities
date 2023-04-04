var dateEl = $('#date');
var timeEl = $('#time');
var projectNameEl = $('#projectName');
var submitButtonEl = $('#submit-button');
var dropdownEl = $('#dropdown-menu');
var datepickerEl = $('#datepicker');
var tableBodyEl = $('#table-body');

dateEl.text(dayjs().format('MMM d, YYYY'));

var timeInterval = setInterval(function () {
    timeEl.text(dayjs().format('h:mm:ss a'));
}, 1000)

const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('submit clicked')
    // console.log(projectNameEl.val());
    // console.log($('#dropdown-menu option:selected').text());
    // console.log(datepickerEl.val());

    var tableRowEl = $('<tr>');
    var projectNameTd = $('<td>');
    var projectTypeTd = $('<td>');
    var projectDateTd =$ ('<td>');

    projectNameTd.text(projectNameEl.val());
    projectTypeTd.text($('#dropdown-menu option:selected').text());
    projectDateTd.text(datepickerEl.val());

    console.log(projectNameTd.text());
    console.log(projectTypeTd.text());
    console.log(projectDateTd.text());

    tableRowEl.append(projectNameTd);
    tableRowEl.append(projectTypeTd);
    tableRowEl.append(projectDateTd);

    tableBodyEl.append(tableRowEl);
}


submitButtonEl.on('click', handleSubmit);